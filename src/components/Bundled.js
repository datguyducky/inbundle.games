import React from 'react';
import styled from 'styled-components';
import { Emoji, BundleCard } from './index';


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
	margin-bottom: 12px;
	align-items: flex-end;

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
const BundleNum = styled.span`
	margin: 0 8px;
`
const BundleList = styled.ul`
	display: grid;
	grid-row-gap: 8px;
	margin: 0;
	padding: 0;
`



export default function Bundled(props) {
	return (
		<BundleSection>
				<BundleHeader>
					<h1 id='game-name'>{props.title}</h1>
					<h1>
						<BundleNum>
							{
								props.info.length <= 1
								? 'was in a bundle!'
								: `was in a ${props.info.length} bundles:`
							}
						</BundleNum>

						<Emoji symbol='🙂' label='smile'/>
					</h1>
				</BundleHeader>
				
				<BundleList>
					{
						props.info.map((e, i) => 
							<BundleCard
								key={i}
								bundle_name={e.name}
								bundle_start={parseInt(e.date_start) * 1000}
								bundle_end={parseInt(e.date_end) * 1000}
							/>
						)
					}
				</BundleList>
		</BundleSection>
	)
}