import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Nav, Input, Footer } from './components';
import { hsvToRgb } from './Utils';


const GlobalStyle = createGlobalStyle`
	html, body {
		margin: 0;
		background-color: #000;
		color: rgb(${hsvToRgb()});
		font-family: 'Spartan', sans-serif;
	}
`
const StyledHome = styled.div`
	width: 100%;
	height: 100vh;
	color: inherit;
	display: grid;
	grid-template-rows: 3em 1fr 2em;
`
const ContentWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 62px;
		font-weight: 600;
	}
`

export default function Home() {
	return (
		<StyledHome>
			<GlobalStyle/>

			<Nav/>
			<ContentWrapper>
				<h1>WAS</h1>
					<Input/>
				<h1>IN A BUNDLE?</h1>
			</ContentWrapper>
			<Footer/>

		</StyledHome>
	)
}