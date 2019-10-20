import React from 'react';
import image from '../bowtiqueHomeImg.jpg'
import logo from '../homeLogo.png'

const Home = (props) => {
    // console.log(props)
    return (
        <div className="thumbnail text-center">
            <img src={image} className="img-fluid" alt="bowtique" />
            <div className="caption">
                <img className="img-fluid" src={logo} alt="" />
                <br />
                <button onClick={() => {props.history.replace('/bowties')}} type="button">SHOP NOW ></button>
            </div>
        </div>
    )
}

export default Home;