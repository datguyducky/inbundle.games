import React from 'react';
import styled from 'styled-components';
import { Emoji } from './index';


const StyledFooter = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 24px;
	padding-bottom: 16px;
	flex-direction: column;
	text-align: center;

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

	p {
		margin: 0;
	}

	#source-info {
		color: #aaa;
		font-size: 12px;
		margin-top: 4px;

		a {
			text-decoration: underline;
		}
	}
`


export default function Footer() {
	return (
		<StyledFooter>
				<p>
					<span id='md-span'>Made with <Emoji symbol='❤️' label='heart' color='red'/> by </span>
					<a href='https://github.com/datguysheepy/'> @datguysheepy</a>
				</p>
				
				<p id="source-info"> 
					INBUNDLE.GAMES uses <a href="https://rawg.io/apidocs">RAWG database API</a> to display game details and screenshots.
				</p>
		</StyledFooter>
	)
}