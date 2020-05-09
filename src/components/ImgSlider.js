import React, { useEffect } from 'react';
import styled from 'styled-components';


const StyledImgSlider = styled.div`
	position: relative;
	
	@media (max-width: 720px) {
		width: 420px;
		height: 280px;
		margin: 0 auto;
	}

	@media (max-width: 480px) {
		width: 280px;
		height: 160px;
	}
`
const Screenshot = styled.div`
	background-image: url('${props => props.url}');
	width: 100%;
	height: 100%;
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: cover;
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
	display: none;

	@media (max-width: 720px) {
		border-radius: 6px;
	}
`
const SliderArrowLeft = styled.div`
	position: absolute;
	color: #fff;
	left: 0;
	font-size: 32px;
	cursor: pointer;
	top: 40%;
	padding: 4px 8px;
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;

	:hover {
		background-color: #222;
		opacity: 0.6;
	}
`
const SliderArrowRight = styled.div`
	position: absolute;
	color: #fff;
	right: 0;
	font-size: 32px;
	cursor: pointer;
	top: 40%;
	padding: 4px 8px;
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;

	:hover {
		background-color: #222;
		opacity: 0.6;
	}
`
const SliderProgressWrapper = styled.div`
	position: absolute;
	bottom: 0;
	display: flex;
	width: 100%;
	justify-content: center;
	padding-bottom: 12px;

	& > div {
		margin-right: 10px;

		:last-of-type {
			margin-right: 0;
		}
	}
`
const SliderProgress = styled.div`
	width: 52px;
	border-radius: 10px;
	height: 5px;
	background-color: #888;

	&.active {
		background-color: #fff;
	}
`


export default function ImgSlider(props) {
	// currently displayed slide
	let arrNum = 0;
	// array of images for slider
	let slides = document.getElementsByClassName('slide-img') || '';
	let bar = document.getElementsByClassName('slide-progress') || '';
	
	useEffect(() => {
		if (props.img_list && slides.length > 0) {
			slides[0].style.display = 'block';
			bar[0].classList.add('active');
		}
	}, [props.img_list, slides, bar]);


	const SliderNextHandler = () => {
		if(props.img_list && slides.length > 0) {
			if (arrNum >= slides.length - 1) {
				arrNum = 0;
				
				slides[slides.length - 1].style.display = 'none';
				slides[arrNum].style.display = 'block';
				
				bar[slides.length - 1].classList.remove('active');
				bar[arrNum].classList.add('active');
				
				return;
			}
			
			slides[arrNum].style.display = 'none';
			slides[arrNum + 1].style.display = 'block';
			bar[arrNum].classList.remove('active');
			bar[arrNum + 1].classList.add('active');
			
			arrNum += 1;
		}
	}

	
	const SliderBackHandler = () => {
		if(props.img_list && slides.length > 0) {
			let slides = document.getElementsByClassName('slide-img');
			let bar = document.getElementsByClassName('slide-progress');
			
			// if first image is currently displayed, then go back to the last one
			if (arrNum === 0) {
				// hide image
				slides[arrNum].style.display = 'none';
				// display new
				slides[slides.length - 1].style.display = 'block';
				
				
				// remove active class from progress bar
				bar[arrNum].classList.remove('active');
				// set active class to new progress bar
				bar[slides.length - 1].classList.add('active');
				

				// set num for currently displayed image
				arrNum = slides.length - 1;	

			} else {
				// hide image
				slides[arrNum].style.display = 'none'
				// display new
				slides[arrNum - 1].style.display = 'block';
				

				// remove active class from progress bar
				bar[arrNum].classList.remove('active');
				// set active class to new progress bar
				bar[arrNum - 1].classList.add('active');

				
				// set num for currently displayed image
				arrNum -= 1;
			}
		}
	}
	

	return (
		<StyledImgSlider>
			<SliderArrowLeft onClick={SliderBackHandler}>&lsaquo;</SliderArrowLeft>
			{
				props.img_list ? 
					props.img_list.map((e, i) =>
						i<5 ?
							<Screenshot 
								url={e.image}
								key={i}
								className='slide-img'
								onClick={SliderNextHandler}
							/>
						: null
					)
				: null
			}
			<SliderArrowRight onClick={SliderNextHandler}>&rsaquo;</SliderArrowRight>

			<SliderProgressWrapper>
				{
					props.img_list ? 
					props.img_list.map((e, i) =>
						i<5 ?
							<SliderProgress key={i} className='slide-progress'/>
						: null
					)
				: null
				}
			</SliderProgressWrapper>
		</StyledImgSlider>
	)
}