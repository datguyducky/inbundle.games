import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Input from './components/Input';
import SearchCard from './components/SearchCard';


const StyledSearch = styled.div`
	width: 980px;
	margin: 0 auto;
	color: inherit;
	display: flex;
	align-items: center;
	flex-direction: column;

	.top-input {
		font-size: 21px;
		height: 27px;
		width: 320px;

		input {
			font-size: 21px;
			height: 25px;
			width: 320px;
		}
	}
`
const TopbarInputAnim = keyframes`
	0% {
		top: 160px;
		transform: scale(2);
	}
	
	100% {
		top: 0;
		transform: scale(1);
	}
`
const TopbarInput = styled.div`
	display: flex;
	align-items: center;
	animation: ${TopbarInputAnim} ease-out .6s;
	position: relative;

	h1 {
		font-size: 21px;
	}
`
const Result = styled.div`
	margin: 24px 0;
	width: 640px;
	display: flex;
	flex-direction: column;
	background-color: #111;
	border-radius: 6px;
	padding: 12px 16px;
`


export default function Search(props) {
	const [gamesSearch, setGamesSearch] = useState([]);

	
	useEffect(() => {	
		const ToSearch = async () => {
			const l_state = props.history.location.state || '';
			//Using RAWG API to get information about games
			await fetch(`https://api.rawg.io/api/games?search=${l_state.game_title}`, {
				headers: {
					'User-Agent': 'bundle'
				}	
			})
			.then((response) => response.json())
			.then((data) => {
				setGamesSearch(data.results);

				if(data.next) {
					nextToSearch(data.next);
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
		}
		ToSearch();

		const nextToSearch = async (nextHref) => {
			await fetch(`${nextHref}`, {
				headers: {
					'User-Agent': 'bundle'
				}	
			})
			.then((response) => response.json())
			.then((data) => {
				setGamesSearch(prevState => {
					return [...prevState, ...data.results]
				})

				/* not good idea for big results like Final Fantasy
				/* use it with skeleton component
				if(data.next) {
					nextToSearch(data.next);
				}*/
			})
			.catch((error) => {
				console.error('Error:', error);
			});
		}
	}, []);


	//TODO: add skeleton component when loading?
	return (
		<StyledSearch>
			<TopbarInput>
				<h1>WAS</h1>
				<Input propClass='top-input'/>
				<h1>IN A BUNDLE?</h1>
			</TopbarInput>

			{
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
				: null
			}
		</StyledSearch>
	)
}