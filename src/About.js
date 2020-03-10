import React from 'react';
import styled from 'styled-components';


const StyledAbout = styled.div`
	width: 760px;
	margin: 0 auto;
	color: inherit;
	min-height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: 16px;

	div {
		border-left: 2px solid currentColor;
		padding-left: 32px;

		p {
			color: #fff;
			line-height: 1.2em;
		}
	}
`


export default function About() {
	return (
		<StyledAbout>
			<div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a interdum tellus, id blandit metus. Duis a nisl bibendum, egestas risus eu, vehicula sem. Phasellus at enim et dolor gravida molestie. Fusce pellentesque aliquet varius. Proin ac dolor vitae lacus lacinia venenatis. Nunc porta eu sem sed pretium. Phasellus eros justo, tincidunt eu lacus at, ultricies efficitur magna. Etiam dignissim mi ac velit laoreet, ac finibus libero venenatis. Aenean fermentum lorem et tincidunt accumsan. Morbi nec volutpat ligula, non interdum dolor.
				</p>
	
				<p>
					Nunc convallis, tellus sit amet mattis placerat, ante sapien pretium orci, nec gravida leo sapien et eros. Donec pretium, nunc quis varius mollis, velit dolor mattis est, vel interdum ex nunc vitae urna. Vestibulum suscipit, metus vitae posuere gravida, ipsum est facilisis purus, in ultricies nunc lorem vel turpis. Phasellus ornare dolor sem. Nam quis finibus libero. Aliquam vitae massa dictum, facilisis purus id, tempor libero. Praesent vitae fermentum lorem. Pellentesque commodo hendrerit lobortis. Curabitur elementum, quam eget pharetra hendrerit, lorem lacus accumsan arcu, pretium condimentum ligula ipsum ac turpis. Praesent cursus interdum est, eu accumsan lacus egestas eget. Proin finibus tortor id viverra molestie. Nunc sed tellus at nulla ultrices bibendum et accumsan odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin ultrices risus vel congue facilisis. Nulla mi leo, posuere nec urna at, pulvinar auctor ipsum. 
				</p>
	
				<p>
					Praesent in dui suscipit, consectetur magna at, malesuada urna. Nullam non ipsum sit amet mauris ornare lacinia. Donec dapibus eleifend tempor. Praesent a mi tellus. Donec sodales, nulla et congue sodales, eros dolor luctus nisi, non molestie augue enim et erat. Donec in neque tempus, porta elit sed, hendrerit nisl. Etiam nec fermentum eros. Nam eget eleifend erat. Maecenas ac mollis quam. Quisque leo sem, pretium eu scelerisque ut, tincidunt sit amet quam. 
				</p>
	
				<p>
					In quis arcu dapibus, vehicula sem eu, efficitur sem. Quisque tincidunt metus et lectus volutpat suscipit. Nunc vel convallis erat. Donec dictum, eros non tempor dignissim, felis magna vestibulum velit, et blandit metus elit sit amet sapien. Vestibulum sit amet diam vel tellus elementum faucibus sit amet quis enim. Quisque ornare magna et molestie luctus. Pellentesque id nunc sed erat pulvinar tincidunt at volutpat quam. 
				</p>
	
				<p>
					Etiam arcu ipsum, posuere vitae gravida sed, suscipit vitae quam. Morbi mauris tortor, tincidunt sit amet interdum id, laoreet nec est. Proin eleifend mi a turpis vehicula dignissim. Duis lobortis id purus et suscipit. Aliquam dignissim felis quis ligula porttitor, a rutrum enim rutrum. Aenean at nunc vitae ante hendrerit laoreet. Suspendisse eget ullamcorper ante. Mauris dignissim urna tellus, eget suscipit augue elementum nec. Curabitur viverra in elit vel pulvinar. Aenean rutrum urna sed hendrerit ornare. Vivamus sed lectus ligula. Donec sit amet bibendum ex. Duis id leo id velit venenatis hendrerit nec eget erat. 
				</p>
			</div>
		</StyledAbout>
	)
}