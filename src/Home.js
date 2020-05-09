import React from 'react';
import styled from 'styled-components';
import { Input } from './components';


const StyledHome = styled.div`
	width: 100%;
	color: inherit;
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`
const ContentWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 62px;
		font-weight: 600;

		@media (max-width: 960px) {
			font-size: 32px;
		}

		@media (max-width: 380px) {
			font-size: 24px;	
		}
	}

	@media (max-width: 1240px) {
		flex-wrap: wrap;
		padding: 0 24px;
		
		h1 {
			margin: 16px;
		}
	}
`


export default function Home() {
	return (
		<StyledHome>

			<ContentWrapper>
				<h1>WAS</h1>
					<Input/>
				<h1>IN A BUNDLE?</h1>
			</ContentWrapper>

		</StyledHome>
	)
}