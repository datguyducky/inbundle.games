import React from 'react';
import styled from 'styled-components';
import Emoji from './Emoji';


const StyledFooter = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 2em;
	padding-bottom: 6px;

	#md-span {
		color: #fff;
		margin-right: 4px;
	}

	a {
		color: inherit;
		text-decoration: none;

		:hover {
			text-decoration: underline;
		}
	}
`


export default function Footer() {
	return (
		<StyledFooter>
				<span id='md-span'>Made with <Emoji symbol='❤️' label='heart' color='red'/> by </span>
				<a href='https://github.com/datguysheepy/'> @datguysheepy</a>
		</StyledFooter>
	)
}