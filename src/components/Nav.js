import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';


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
	const location = useLocation();

	return (
		<StyledNav>
			<ul>
				<li>
					{
						location.pathname === '/about' ?
							<Link to='/'>HOME</Link>
						: 
							<Link to='/about'>ABOUT</Link>
					}
				</li>
				<li><a href='https://github.com/datguysheepy'>GITHUB</a></li>
			</ul>
		</StyledNav>
	)
}