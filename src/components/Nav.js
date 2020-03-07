import React from 'react';
import styled from 'styled-components';


const StyledNav = styled.nav`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-right: 1em;

	a {
		color: inherit;
		text-decoration: none;
	}
`


export default function Nav() {
	return (
		<StyledNav>
			<a href='https://github.com/datguysheepy'>GITHUB</a>
		</StyledNav>
	)
}