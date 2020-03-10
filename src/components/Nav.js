import React from 'react';
import styled from 'styled-components';


const StyledNav = styled.nav`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-right: 1em;
	text-transform: uppercase;

	a {
		color: inherit;
		text-decoration: none;

		:hover {
			text-decoration: underline;
		}
	}

	ul {
		list-style: none;
		display: flex;

		li:first-of-type {
			margin-right: 1em;
		}
	}
`


export default function Nav() {
	return (
		<StyledNav>
			<ul>
				<li><a href='https://github.com/datguysheepy'>ABOUT</a></li>
				<li><a href='https://github.com/datguysheepy'>GITHUB</a></li>
			</ul>
		</StyledNav>
	)
}