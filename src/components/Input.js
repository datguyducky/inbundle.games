import React, { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';


const StyledForm = styled.form`
	input {
		padding: 0;
		background-color: transparent;
		border-radius: 0;
		border: none;
		color: #fff;
		width: 480px;
		font-size: 44px;
		font-family: 'Spartan', sans-serif;
		font-weight: 400;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		height: 48px;
	}

	label {
		position: relative;
		width: 480px;
		display: block;
		display: flex;
		margin: 0 1em;
		font-size: 44px;
		font-weight: 400;
		height: 50px;
		align-items: flex-end;
		border-bottom: 2px solid currentColor;

		#u-text {
			color: #fff;
		}
	}
`


function Input(props) {
	const [SearchValue, setSearch] = useState('');
	const [recentSearch, setRecent] = useState(true );
	//Array with title of games for auto-typing effect on search input 
	const gamesArr = [
		'Grand Theft Auto V',
		'Rimworld',
		'My Friend Pedro',
		'Fallout 76',
		'Stardew Valley',
		'Prison Architect',
		'Frostpunk'
	];


	const searchHandler = async (e) => {
		setRecent(false); //to be available to search for other game, when we're on SEARCH route or even further
		const target = e.target;
		const value = target.value;
		setSearch(value);
	}


	const submitHandler = (event) => {
		//kinda hacky way to submit form without button, but with only by pressing ENTER key
		event.preventDefault();
		props.history.push({
			pathname: '/search',
			state: {game_title: SearchValue},
			search:	`?title=${SearchValue}`
		})
		//it takes us to SEARCH route with game_title query
	}


	return (
		<StyledForm onSubmit={submitHandler}>
			<label id='lb' className={props.propClass}>
				<span id='u-text'>
					{
						SearchValue === '' ?
							props.history.location.state ?
								''
							:
								<ReactTypingEffect
									text={gamesArr}
									typingDelay='1000'
									eraseDelay='2000'
									speed='200'
								/>
						: ''
					}

				</span>

				<input 
					type='text' 
					value={
						props.history.location.state && recentSearch ?
							props.history.location.state.game_title
						: SearchValue
					} 
					onChange={e => searchHandler(e)}
				/>
			</label>
			
			<input type="submit" hidden />
		</StyledForm>
	)
}


export default withRouter(Input)