import React from 'react';
import styled from 'styled-components';
import {dateConvert} from '../Utils';


const StyledBundleCard = styled.li`
	margin: 0 auto;

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


export default function BundleCard(props) {
	//const bundle_start = parseInt(props.info[0].date_start) * 1000;
	//const bundle_end = parseInt(props.info[0].date_end) * 1000;
	//const bundle_name = props.info[0].name;

	return (
		<StyledBundleCard>
			<p id='bundle-name'>
				{props.bundle_name}
			</p>
			<p id='bundle-date'>
				from {dateConvert(props.bundle_start)} to {dateConvert(props.bundle_end)}
			</p>
		</StyledBundleCard>
	)
}