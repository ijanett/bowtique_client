import React from 'react';
import image from '../bowtiqueHomeImg.jpg'
import logo from '../homeLogo.png'

export default class Home extends React.Component {
    render() {
        return (
            <div className="thumbnail text-center">
                <img src={image} className="img-fluid" alt="bowtique" />
                <div className="caption">
                    <img src={logo} alt="" />
                    <br />
                    <button onClick={() => {this.props.history.replace('/bowties')}} type="button" className="btn-arrow-right">SHOP NOW ></button>
                </div>
            </div>
        )
    }
}