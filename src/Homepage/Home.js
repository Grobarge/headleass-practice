import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div className="Home-container">

                <div className="card 1">
                    <div className="card_image"> <img src="https://media.giphy.com/media/l3zoJcPxBD4qYFrws/source.gif" /> </div>
                    <div className="card_title title-white">
                        <p>Gajes Picks</p>
                    </div>
                    <div className="card_description">
                        <p>Gaje's picks is a collection of my favorite 
                        Grateful Dead shows</p>
                    </div>
                </div>

                <Link to="/Toasters">
                <div className="card 2">
                    <div className="card_image">
                        <img src="https://media.giphy.com/media/26uf0NdX2Y21ZRmFO/source.gif" />
                    </div>
                    <div className="card_title title-white">
                        <p>Toaster Review</p>
                    </div>
                    <div className="card_description">
                        <p>Toaster Reviews, the best online resource for choosing the toaster thats right for you</p>
                    </div>
                </div>
                </Link>

                <div className="card 3">
                    <div className="card_image">
                        <img src="https://media.giphy.com/media/3oEjHRCl5C4dwURY40/giphy.gif" />
                    </div>
                    <div className="card_title title-white">
                        <p>Attended Shows</p>
                    </div>
                    <div className="card_description">
                        <p>Click on this to see all of the concerts I have been to</p>
                    </div>
                </div>

            </div>
        )
    }

}

export default Home;
