import React from 'react';
import styled from 'styled-components';


const StyledAbout = styled.div`
	width: 760px;
	margin: 21px auto;
	color: inherit;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: 18px;
	flex: 1;

	div {
		border-left: 2px solid currentColor;
		padding-left: 32px;

		p {
			color: #fff;
			line-height: 1.3em;

			.color {
				color: var(--main-color);
			}
		}
	}

	a {
		color: var(--main-color);
		text-decoration: none;
		font-size: 18px;

		:hover {
			opacity: 0.8;
		}
	}

	#sources {
		margin: 32px 0;

		ul {
			margin: 6px 0;

			li {
				font-size: 16px;
				color: #aaa;
			}
		}
	}

	@media (max-width: 760px) {
		width: 90%;
	}
`


export default function About() {
	return (
		<StyledAbout>
			<div>
				<p>
					inbundle.games is a simple online tool to <span className="color">check if a specific games has ever been in bundle</span> at Humble Bundle - number of bundles it was in and their exact names and dates on which they were available for purchase. 
					Now, if you've ever wondered if game was bundled then the answer is a few clicks away!
				</p>
	
				<p>
					inbundle.games stores information about bundles with games for PCs, consoles and mobile phones and our site <span className="color">goes back to the first available bundle from Humble Bundle - "The Humble Indie Bundle" from May 2010</span>.
				</p>
	
				<p>
					<span className="color">Warning!</span> If game has a special version such as: complete edition, game of the year etc., please also check its basic version, because information about its presence in bundles may sometimes be incorrect for special editions. Our site <span className="color">does not display</span> information about occurrences in bundles for <span className="color">DLCs</span>!
				</p>
	
				<p id="sources">
					Creating this page would not be possible without the following pages:
					<ul>
						<li>
							<a href="https://barter.vg/">Barter.vg</a>
						</li>
						<li>
							<a href="https://www.steamgifts.com/discussions/deals">Steamgifts.com</a>
						</li>
						<li>
							<a href="https://www.reddit.com/r/GameDeals/">r/GameDeals</a>
						</li>
						<li>
							<a href="https://isthereanydeal.com/specials/#/filter:page/humblebundle">IsThereAnyDEAL</a>
						</li>
						<li>
							<a href="https://en.everybodywiki.com/List_of_Humble_Bundles">EverybodyWiki</a>
						</li>
						<li>
							<a href="https://rawg.io/">RAWG API</a> - their wonderful API allows us to display game details and screenshots
						</li>
					</ul>
				</p>
	
				<p>
				And one more thing ... <span className="color">thank you for using my site and I hope it was a pleasant visit</span>.
				Remember if you have encountered an error or you want to report finding incorrect information on our site, you can use <a href="https://github.com/datguysheepy/inbundle.games/issues">THIS</a> link to do so.
				</p>
			</div>
		</StyledAbout>
	)
}