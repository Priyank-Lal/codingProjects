import React, { use, useEffect, useState } from 'react'
import './DiceGameGamePage.css'

const DiceGameGamePage = () => {
    const [diceImg, setDiceImg] = useState('')
    const [selectedNumber, setSelectedNumber] = useState('')
    const [score, setScore] = useState(0)
    const [notSelected, setNotSelected] = useState(false)
    const [showRules, setShowRules] = useState(false)
    const [pointsManagement, setPointsManagement] = useState(false)

    const DiceRoll = () => {
        if (!selectedNumber) {
            setNotSelected(true)
            return;
        }
        const Random = Math.floor(Math.random() * 6) + 1
        setDiceImg(Random)
    }

    const ScoreGenerator = () => {
        if (diceImg == selectedNumber) {
            setScore(score + 1)
            setPointsManagement(true)
        }
        else {
            setScore(score > 0 ? score - 1 : score)
            setPointsManagement(false)
        }
    }

    useEffect(() => {
        ScoreGenerator()
    }, [diceImg])

    useEffect(() => {
        setScore(0)
    }, [])

    return (
        <>
            {notSelected &&
                <>
                    <div className='Error-Handling-Div'>
                        <span style={{
                            color: 'red'
                        }}>You have not selected any number</span>
                    </div>
                </>
            }

            <div className="SelectNumberAndScoreDiv">
                <div className="ScoreDiv">
                    <div style={{
                        height: '110px'
                    }}>
                        <span id='ScoreNumber'>{score}
                        </span>
                    </div>
                    <span className='Total-Score'>Total Score</span>
                </div>
                {/* <span
                    className='PointsAnimation'>{
                        pointsManagement ? '+1' : '-1'
                    }</span> */}
                <div className="SelectNumberDiv">
                    <div className="Numbers">
                        <button style={{
                            backgroundColor: selectedNumber == 1 ? 'black' : 'white',
                            color: selectedNumber == 1 ? 'white' : 'black',
                        }} onClick={() => {
                            setSelectedNumber('1');
                            setNotSelected(false)

                        }}>1</button>
                        <button style={{
                            backgroundColor: selectedNumber == 2 ? 'black' : 'white',
                            color: selectedNumber == 2 ? 'white' : 'black',
                        }} onClick={() => {
                            setSelectedNumber('2');
                            setNotSelected(false)
                        }}>2</button>
                        <button style={{
                            backgroundColor: selectedNumber == 3 ? 'black' : 'white',
                            color: selectedNumber == 3 ? 'white' : 'black',
                        }} onClick={() => {
                            setSelectedNumber('3');
                            setNotSelected(false)
                        }}>3</button>
                        <button style={{
                            backgroundColor: selectedNumber == 4 ? 'black' : 'white',
                            color: selectedNumber == 4 ? 'white' : 'black',
                        }} onClick={() => {
                            setSelectedNumber('4');
                            setNotSelected(false)
                        }}>4</button>
                        <button style={{
                            backgroundColor: selectedNumber == 5 ? 'black' : 'white',
                            color: selectedNumber == 5 ? 'white' : 'black',
                        }} onClick={() => {
                            setSelectedNumber('5');
                            setNotSelected(false)
                        }}>5</button>
                        <button style={{
                            backgroundColor: selectedNumber == 6 ? 'black' : 'white',
                            color: selectedNumber == 6 ? 'white' : 'black',
                        }} onClick={() => {
                            setSelectedNumber('6');
                            setNotSelected(false)
                        }}>6</button>
                    </div>
                    <span>Select Number</span>
                </div>
            </div>

            <div className="RollDiceDiv">
                <div className="RollDiceImgDiv">
                    <img onClick={() => {
                        DiceRoll()
                    }} src={`/public/DiceGameImages/dice_${diceImg ? diceImg : 1}.png`} alt="" />
                    <span>Click on Dice to roll</span>
                </div>
                <div className="RollDiceBtnDiv">
                    <button onClick={() => {
                        setScore(0)
                    }} className='ResetScoreBtn'>Reset Score</button>
                    <button onClick={() => {
                        setShowRules(!showRules)
                        console.log(showRules);
                    }} className='ShowRulesBtn'>{showRules ? 'Hide Rules' : 'Show Rules'}</button>
                </div>
            </div>
            {showRules &&
                <>
                    <div className="RulesDiv">
                        <div className="heading">
                            <span>How to play Dice Game</span>
                        </div>
                        <div className="MainRules">
                            <div className='MainRulesSpan'>
                                <span >Select any number</span>
                            </div>
                            <div className='MainRulesSpan'>
                                <span >Click on dice image</span>
                            </div>
                            <div className='MainRulesSpan'>
                                <span >After click on  dice  if selected number is equal to dice number you will get 1 point</span>
                            </div>
                            <div className='MainRulesSpan'>
                                <span >If you get wrong guess then 1 point will be dedcuted </span>
                            </div>
                        </div>
                    </div>
                </>
            }

        </>
    )
}

export default DiceGameGamePage

