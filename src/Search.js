import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Input, SearchCard } from './components';
import Loader from 'react-loader-spinner';


const StyledSearch = styled.div`
	width: 980px;
	margin: 0 auto;
	color: inherit;
	display: flex;
	align-items: center;
	flex-direction: column;
	flex: 1;

	.loader {
		margin: 21px 0;
	}

	.top-input {
		font-size: 21px;
		height: 27px;
		width: 260px;

		input {
			font-size: 21px;
			height: 25px;
			width: 260px;
		}
	}

	@media (max-width: 980px) {
		width: 90%;
	}
`
const TopbarInputAnim = keyframes`
	0% {
		top: -80px;
	}
	
	100% {
		top: 0;
	}
`
const TopbarInput = styled.div`
	display: flex;
	align-items: center;
	animation: ${TopbarInputAnim} ease-out .4s;
	position: relative;

	h1 {
		font-size: 21px;
		margin: 0;
	}

	@media (max-width: 1240px) {
		margin-top: 24px;
		flex-wrap: wrap;
		justify-content: center;
	}

	@media (max-width: 520px) {
		animation: none;
	}
`
const Result = styled.div`
	margin: 24px 0;
	width: 640px;
	display: flex;
	flex-direction: column;
	background-color: #1a1a1a;
	border-radius: 6px;
	padding: 12px 16px;

	@media (max-width: 980px) {
		width: 90%;
	}
`
const NoResult = styled.p`
	color: #fff;
	font-size: 18px;
	text-align: center;
`


export default function Search(props) {
	const [loading, setLoading] = useState(true);
	const [gamesSearch, setGamesSearch] = useState([]);
	const l_state = props.history.location.state || '';

	
	useEffect(() => {
		// by doing this we're hidding old results when we're researching something new 
		// and we're waiting for response from API.
		setGamesSearch([]); 
		
		const toSearch = async () => {
			// Using RAWG API to get information about games
			await fetch(`https://api.rawg.io/api/games?search=${l_state.game_title}`, {
				headers: {
					'User-Agent': 'inbundle.games'
				}	
			})
			.then((response) => response.json())
			.then((data) => {
				setGamesSearch(data.results);
				setLoading(false);
				// send another request if there's another page of games
				if(data.next) {
					nextToSearch(data.next);
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
		}
		toSearch();

		const nextToSearch = async (nextHref) => {
			// send USER-AGENT header as requested in terms of use in RAWG API
			await fetch(`${nextHref}`, {
				headers: {
					'User-Agent': 'inbundle.games'
				}	
			})
			.then((response) => response.json())
			.then((data) => {
				setGamesSearch(prevState => {
					return [...prevState, ...data.results]
				})

				// not good idea for big results like Final Fantasy
				/* fetch and then show another results only when user scrolls to bottom of a page
				if(data.next) {
					nexttoSearch(data.next);
				}*/
			})
			.catch((error) => {
				console.error('Error:', error);
			});
		}
	}, [l_state.game_title]);


	//TODO: add skeleton component when loading?
	return (
		<StyledSearch>
			<TopbarInput>
				<h1>WAS</h1>
				<Input propClass='top-input'/>
				<h1>IN A BUNDLE?</h1>
			</TopbarInput>

			{
				loading ?
					<Loader
						className="loader"
						type="TailSpin"
						color="#fff"
						height={42}
						width={200}
						timeout={2500}
					/>
				:
					gamesSearch.length > 0 ?
						<Result>
						{
							gamesSearch.map((e, i) => 
								<SearchCard
									game_title={e.name}
									game_cover={e.background_image}
									platforms={e.platforms}
									game_id={e.id}
									game_screenshots={e.short_screenshots}
									key={i} 
								/>
							)
						}
						</Result>
					: !loading ?
						<NoResult>
							Sorry, we couldn't find what you were looking for.
						</NoResult>
					: null
			}
		</StyledSearch>
	)
}