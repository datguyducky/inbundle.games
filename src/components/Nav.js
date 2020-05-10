import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';


const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	padding: 0 2em;

	h1 {
		color: #fff;
		font-size: 24px;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	ul {
		text-transform: uppercase;
		list-style: none;
		display: flex;
		margin-left: auto;
	
		li:first-of-type {
			margin-right: 1em;
		}
	
		a:hover {
			text-decoration: underline;
		}
	
		@media (max-width: 520px) {
			margin: 0;
			padding: 0;
			width: 185.9px;
			justify-content: center;
		}
	}

	@media (max-width: 520px) {
		flex-direction: column;

		h1 {
			margin-bottom: 6px;
		}
	}
`


export default function Nav() {
	const location = useLocation();

	return (
		<StyledNav>
			<h1><Link to="/">inbundle.games</Link></h1>
			
			<ul>
				<li>
					{
						location.pathname === '/about' ?
							<Link to='/'>HOME</Link>
						: 
							<Link to='/about'>ABOUT</Link>
					}
				</li>
				
				<li>
					<a href='https://github.com/datguysheepy/inbundle.games'>GITHUB</a>
				</li>
			</ul>
		</StyledNav>
	)
}