import React from 'react';
import './aboutUs.scss';
import image1 from '../../image/10.jpg'

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <div className="text-area">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectedolor sit amet consectetur adipisicing elit tur adipisicing elit. Repellendus quae quasi incidunt deserunt. Magni modi, assumenda dolorem expedita vitae a.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elitdolor sit amet consectetur adipisicing elit. Redolor sit amet dolor sit amet consectetur adipisicing elit consectetur adipisicing elit rum minima iure ad numquam asperiores voluptatem esse.</p>
            </div>
            <div className="image">
                <img src={image1} alt="aboutus" />
            </div>
        </div>
    )
}

export default AboutUs
