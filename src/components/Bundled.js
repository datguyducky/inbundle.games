import React from 'react';
import styled from 'styled-components';
import Emoji from './Emoji';
import {dateConvert} from '../Utils';


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
		font-weight: bold;
		margin: 2px 0;
	}

	#bundle-date {
		font-size: 14px;
		color: #fff;
	}
`
const BundleHeader = styled.div`
	display: flex;
	justify-content: center;

	h1 {
		font-size: 28px;
		margin: 0;
		color: #fff;
		font-weight: normal;
	}

	#game-name {
		margin: 0 6px;
	}
`


export default function Bundled(props) {
	//TODO: currently is only displaying information about first bundle that game was in. Make it working for other bundles
	const bundle_start = parseInt(props.info[0].date_start) * 1000;
	const bundle_end = parseInt(props.info[0].date_end) * 1000;
	const bundle_name = props.info[0].name;


	return (
		<BundleSection>
				<BundleHeader>
					<h1 id='game-name'>{props.title}</h1>
					<h1>was in a bundle! <Emoji symbol='🙂' label='smile'/></h1>
				</BundleHeader>

				<p id='bundle-name'>{bundle_name}</p>
				<p id='bundle-date'>
					from {dateConvert(bundle_start)} to {dateConvert(bundle_end)}
				</p>
		</BundleSection>
	)
}