import React, { useEffect } from 'react';
import styled from 'styled-components';


const StyledImgSlider = styled.div`
	position: relative;

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
	let test = 0;
	let slides = document.getElementsByClassName('slide-img') || '';
	let bar = document.getElementsByClassName('slide-progress') || '';
	
	useEffect(() => {
		if (props.img_list && slides.length > 0) {
			slides[0].style.display = 'block';
			bar[0].classList.add('active');
		}
	}, [props.img_list]);


	const SliderNextHandler = () => {
		if(props.img_list && slides.length > 0) {
			if (test >= slides.length - 1) {
				test = 0;
				
				slides[slides.length - 1].style.display = 'none';
				slides[test].style.display = 'block';
				
				bar[slides.length - 1].classList.remove('active');
				bar[test].classList.add('active');
				
				return;
			}
			
			slides[test].style.display = 'none';
			slides[test + 1].style.display = 'block';
			bar[test].classList.remove('active');
			bar[test + 1].classList.add('active');
			
			test += 1;
		}
	}

	
	const SliderBackHandler = () => {
		if(props.img_list && slides.length > 0) {
			let slides = document.getElementsByClassName('slide-img');
			let bar = document.getElementsByClassName('slide-progress');
			
			if (test === 0) {
				slides[test].style.display = 'none';
				slides[slides.length - 1].style.display = 'block';
				
				bar[test].classList.remove('active');
				bar[slides.length - 1].classList.add('active');
				
				test = slides.length - 1;
				
				return;
			}

			slides[test].style.display = 'none'
			slides[test - 1].style.display = 'block';
			
			bar[test].classList.remove('active');
			bar[test - 1].classList.add('active');

			test -= 1;
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