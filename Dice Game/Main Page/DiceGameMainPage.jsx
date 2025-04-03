import React from 'react';
import './DiceGameMainPage.css';
import { Link } from 'react-router-dom';

const DiceGameMainPage = () => {
    return (
        <div className="MainDiv">
            <img
                style={{
                    width: '650px',
                    height: '520px'
                }}
                src="/public/DiceGameImages/MainPageDiceImage.png"
                alt="Main Dice Game"
            />
            <div className="TextAndBtn">
                <span>DICE GAME</span>
                <Link to="/GamePage">
                    <button>Play Now</button>
                </Link>
            </div>
        </div>
    );
};

export default DiceGameMainPage;
