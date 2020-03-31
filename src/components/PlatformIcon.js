import React from 'react';
import { Windows, Linux, Android, Apple, Nintendoswitch, Xbox, Playstation } from '@icons-pack/react-simple-icons';


const PlatformIcon = props => (
    <span
        className="svg-icon"
    >
    	{
			props.name === 'PC' ?
				<Windows size={12}/>
			:
			props.name === 'Linux' ?
				<Linux size={12}/>
			:
			props.name === 'PlaysStation 4' || props.name === 'PlayStation 3' ?
				<Playstation size={12}/>
			:
			props.name === 'Xbox One' || props.name === 'Xbox 360' ?
				<Xbox size={12}/>
			:
			props.name === 'Nintendo Switch' ?
				<Nintendoswitch size={12}/>
			:
			props.name === 'Android' ?
				<Android size={12}/>
			:
			props.name === 'iOS' || props.name === 'macOS' ?
				<Apple size={12}/>
			: null
		}
	</span>
);

export default PlatformIcon;