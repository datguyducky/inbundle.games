import React from 'react';
import styled from 'styled-components';
import PlatformIcon from '../components/PlatformIcon';


const StyledGameCard = styled.div`
	height: 74px;
	display: flex;
	cursor: pointer;
	align-items: center;

	:hover, :active {
		opacity: 0.62;
	}
`
const GameCover = styled.div`
	height: 54px;
	width: 43px;
	margin-right: 12px; 
	background-image: url(${props => props.game_cover ? props.game_cover : ''});
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 6px;
`
const GameInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	h3 {
		color: #fff;
		font-size: 16px;
		margin: 0;
		margin-top: 2px;
	}
`
const PlatformsWrapper = styled.div`
	display: flex;
	align-items: center;

	.svg-icon {
		margin-right: 4px;
	}
`


export default function SearchCard(props) {
	const platforms = props.platforms || [];

	return (
		<StyledGameCard>
			<GameCover game_cover={props.game_cover}/>
			
			<GameInfo>
				<PlatformsWrapper>
					{
						//displaying max 5 platforms
						platforms.map((e, i) =>
							i <= 5 ?
								<PlatformIcon
									name={e.platform.name}
									key={i}
								/>
							: null
						)
					}
					{
						//for more than 5 platforms we're displaying how much more there's left
						platforms.length > 5 ?
							<span style={{fontSize: 12}}>+{platforms.length - 5}</span>
						: null
					}
				</PlatformsWrapper>
				
				<h3>
					{props.game_title}
				</h3>
			</GameInfo>
		</StyledGameCard>
	)
}