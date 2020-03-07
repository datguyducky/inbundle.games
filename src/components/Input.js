import React, { useState, useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import styled from 'styled-components';

const StyledInput = styled.span`
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
	}
`


export default function Input() {
	const [SearchValue, setSearch] = useState('');
	const gamesArr = [
		'Grand Theft Auto V',
		'Rimworld',
		'My Friend Pedro',
		'Fallout 76',
		'Stardew Valley',
		'Prison Architect',
		'Frostpunk'
	];
	

	const searchHandler = (e) => {
		const target = e.target;
		const value = target.value;
		setSearch(value);
	}


	return (
		<StyledInput>
			<label id='lb'>
				<span id='u-text'>
					{
						SearchValue === '' ?
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
					value={SearchValue} 
					onChange={e => searchHandler(e)}
				/>
			</label>
		</StyledInput>
	)
}