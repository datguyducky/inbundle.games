import React from 'react';
import styled from 'styled-components';
import { Emoji } from './index';


const BundleSection = styled.div`
	margin: 24px 0;
	background-color: #1a1a1a;
	width: 928px;
	text-align: center;
	padding: 12px 16px;
	border-radius: 6px;

	@media (max-width: 980px) {
		width: 91%;
	}
`
const BundleHeader = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: flex-end;

	h1 {
		font-size: 28px;
		margin: 0;
		font-weight: normal;

		@media (max-width: 480px) {
			font-size: 21px;
		}
	}

	#game-name {
		margin: 0 6px;
	}
`


export default function NotBundled(props) {
	return (
		<BundleSection>
				<BundleHeader>
					<h1 id='game-name'>{props.title}</h1>
					<h1>was not in a bundle! <Emoji symbol='🙁' label='sad'/></h1>
				</BundleHeader>
		</BundleSection>
	)
}