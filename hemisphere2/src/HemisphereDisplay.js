import React from 'react';
import './Hemisphere.css';
import northernPic from './image/north.jfif';
import southernPic from './image/south.jfif';


const hemisphereConfig = {
    Northern: {
        text: 'it is northern hemisphere',
        picture: northernPic
    },
    Southern : {
        text: 'it is southern hemisphere',
        picture: southernPic
    }
};

const HemisphereDisplay = ({ latitude }) => {
    // console.log(latitude);
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const { text, picture } = hemisphereConfig[hemisphere];
    return(
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className='image'>
                    <img src={picture} alt="hemisphere picture" />
                </div>
                <div>
                    <h1 className='ui teal bottom attached label'>
                        { text }
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay;