import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
	html, body {
		margin: 0;
		background-color: #000;
		color: #fff;
		font-family: 'Spartan', sans-serif;
	}
`
const StyledHome = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	color: orangered;

	h1 {
		font-size: 62px;
		font-weight: 600;
	}

	input {
		margin: 0 16px;
		height: 1em;
		width: 460px;
		padding: 0;
		background-color: #000;
		border-radius: 0;
		border: none;
		color: #fff;
		border-bottom: 2px solid orangered;
		font-size: 44px;
		text-align: center;
		font-weight: 400;
	}
`

export default function Home() {
	return (
		<StyledHome>
			<GlobalStyle/>

			<h1>WAS</h1>
			<input type='text' value='Grand Theft Auto V'/>
			<h1>IN A BUNDLE?</h1>
		</StyledHome>
	)
}