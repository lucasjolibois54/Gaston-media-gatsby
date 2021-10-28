import React from 'react'
import box from '../images/Rectangle.png';

const aboutHome = () => {
    return (
        <div>
            <li className="heading-ab">What we do </li>

           <div>
            <h2 className="sub-heading-ab">Creative solutions <span className="sub-h-span">for impact</span></h2></div>
            <div className="center">
            <p className="about-p">We are a creative design and develop agency created to revolutionize the way you look a digital solutions. we’re a team of passioante and hard wokring people here to push your business to the next level. What’s not to like?</p>
            <img className="img-about" src={box} alt="Logo" />


            </div>
        </div>
    )
}

export default aboutHome