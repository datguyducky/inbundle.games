import React from 'react';
import styled from 'styled-components';
import { Emoji } from './index';


const BundleSection = styled.div`
	margin: 24px 0;
	background-color: #111;
	width: 928px;
	text-align: center;
	padding: 12px 16px;
	border-radius: 6px;
`
const BundleHeader = styled.div`
	display: flex;
	justify-content: center;

	h1 {
		font-size: 28px;
		margin: 0;
		font-weight: normal;
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