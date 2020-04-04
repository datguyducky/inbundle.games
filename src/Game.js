import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from './components/Input';
import ImgSlider from './components/ImgSlider';
import PlatformIcon from './components/PlatformIcon';
import Emoji from './components/Emoji';


const StyledGame = styled.div`
	width: 980px;
	margin: 0 auto;
	color: inherit;
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 100%;

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
const TopbarInput = styled.div`
	display: flex;
	align-items: center;
	position: relative;

	h1 {
		font-size: 21px;
	}
`
const BundleSection = styled.div`
	margin: 24px 0;
	background-color: #111;
	width: 928px;
	text-align: center;
	padding: 12px 16px;
	border-radius: 6px;

	p {
		margin: 0;
	}

	#bundle-name {
		font-size: 18px;
		letter-spacing: 2px;
	}

	#bundle-date {
		font-size: 14px;
	}
`

const BundleHeader = styled.div`
	display: flex;
	justify-content: center;

	h1 {
		font-size: 28px;
		margin: 0;
		color: #fff;
	}

	#game-name {
		margin: 0 6px;
	}
`
const GameSection = styled.div`
	display: grid;
	grid-template-columns: 52% 1fr;
	margin-top: 6px;
	background-color: #111;
	width: 960px;
	border-radius: 6px;
`
const GameDetails = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 12px 0;

	h1 {
		color: #fff;
		font-size: 18px;
		min-width: 72%;
		text-align: center;
		margin: 0;
		padding-bottom: 12px;
		border-bottom: 2px solid gray;
	}

	section {
		display: flex;
		flex-direction: column;
		min-width: 72%;
		align-items: center;
		padding: 12px 0;
		border-bottom: 2px solid gray;

		:last-of-type {
			border-bottom: none;
		}
	}

	.detailsQ {
		margin-right: 4px;
		line-height: 1.6em;
	}

	.detailsA {
		color: #fff;
		font-size: 14px;

		a {
			color: inherit;
			margin-right: 6px;
		}
	}

	.svg-icon {
		margin-right: 4px;
	}
`


export default function Game(props) {
	const [gameInfo, setGameInfo] = useState([]);
	const l_state = props.history.location.state || '';


	useEffect(() => {	
		const gameInfo = async () => {
			//Using RAWG API to get information about games
			await fetch(`https://api.rawg.io/api/games/${l_state.game_id}`, {
				headers: {
					'User-Agent': 'bundle'
				}	
			})
			.then((response) => response.json())
			.then((data) => {
				setGameInfo(data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
		}
		gameInfo();

	}, []);


	return (
		<StyledGame>
			<TopbarInput>
				<h1>WAS</h1>
				<Input propClass='top-input'/>
				<h1>IN A BUNDLE?</h1>
			</TopbarInput>

			<BundleSection>
				<BundleHeader>
					<h1 id='game-name'>{l_state.game_title}</h1>
					<h1>was in a bundle! <Emoji symbol='🙂' label='smile'/></h1>
				</BundleHeader>

				<p id='bundle-name'>ASDSADAS BUNDLE</p>
				<p id='bundle-date'>20.04.2019 - 28.04.2019</p>
			</BundleSection>
			
			<GameSection>
				<ImgSlider
					img_list={l_state.game_screenshots}
				/>

				<GameDetails>
					<h1>GAME DETAILS:</h1>

					<section>
						<div>
							<span className='detailsQ'>Release date:</span>
							<span className='detailsA'>{gameInfo.released}</span>
						</div>
						
						<div>
							<span className='detailsQ'>Publisher:</span>
							<span className='detailsA'>
								{
									gameInfo.publishers && gameInfo.publishers.length > 0 ? 
										gameInfo.publishers[0].name
									: null
								}
							</span>
						</div>
						
						<div>
							<span className='detailsQ'>Developer:</span>
							<span className='detailsA'>
								{
									gameInfo.developers && gameInfo.developers.length > 0 ? 
										gameInfo.developers[0].name
									: null
								}
							</span>
						</div>
					</section>

					<section>
						<div>
							<span className='detailsQ'>Platforms:</span>
							<span className='detailsA'> 
							{
								//displaying max 5 platforms
								gameInfo.platforms ? 
									gameInfo.platforms.map((e, i) =>
											i <= 5 ?
												<PlatformIcon
													name={e.platform.name}
													key={i}
												/>
											: null
									)
								: null
							}
							{
								//for more than 5 platforms we're displaying how much more there's left
								gameInfo.platforms ? 
									gameInfo.platforms.length > 5 ?
										<span style={{fontSize: 12}}>+{gameInfo.platforms.length - 5}</span>
									: null
								: null
							}
							</span>
						</div>

						<div>
							<span className='detailsQ'>Genres:</span>
							<span className='detailsA'>
								{
									gameInfo.genres ? 
										gameInfo.genres.map((e, i) => 
											gameInfo.genres.length > 1 ?
												<span key={i}>{e.name}, </span>
											: 
												<span key={i}>{e.name} </span>
										)
									: null
								}
							</span>
						</div>
					</section>

					<section>
						<div>
							<span className='detailsQ'>Website:</span>
							<a href={gameInfo.website} className='detailsA'>
								{
									gameInfo.developers ? 
										gameInfo.developers[0].name
									: null
								}
							</a>
						</div>
						
						<div>
							<span className='detailsQ'>Stores:</span>
							<span className='detailsA'>
								{
									gameInfo.stores ? 
										gameInfo.stores.map((e, i) => 
											<a key={i} href={e.url}>{e.store.name}</a>
										)
									: null
								}
							</span>
						</div>
					</section>
				</GameDetails>
			</GameSection>
		</StyledGame>
	)
}