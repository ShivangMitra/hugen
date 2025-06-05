import React, { useState, useEffect } from "react";

var timer_

const generateSequence = (length) => {
    let temp = []
    let seq_elements = []
    for(let j = 1; j < length+1; j++){
        seq_elements.push(j)
    }
    for(let i = 0; i < length; i++){
        const random = Math.floor(Math.random() * seq_elements.length);
        
        temp[i] = {
          number: seq_elements[random],
          state: 'normal',
          index: i,
          disabled: false
        }

        seq_elements.splice(random, 1);
    }
    return temp
}

const generateTrueArray = (n) => {
  let temp = []
  for(let i=1; i<=n; i++){
    temp.push(i)
  }
  return temp
}

function MemorySequenceGame() {

  const [start, setStart] = useState(false)

  const [sequence, setSequence] = useState([]);
  const [index, setIndex] = useState(0)
  const [trueSequence, setTrueSequence] = useState([])
  const [message, setMessage] = useState("");
  const [retryBtn, setRetryBtn] = useState(false)
  const [nextBtn, setNextBtn] = useState(false)

  const [flipBoxes, setFlipBoxes] = useState(true)

  const [level, setLevel] = useState(1)

  useEffect(() => {
  
    return () => {
      clearInterval(timer_)
    }
  }, [])
  

  const freshcall = (level) => {
    const newSeq = generateSequence(level);
    const trueSeq = generateTrueArray(level);
    setTrueSequence(trueSeq);
    setSequence(newSeq);
    setFlipBoxes(true)
    setIndex(0)
    setMessage("Memorize the sequence!");
  }

  const handleStart = () => {
    freshcall(level)
    setStart(true)
    timer()
  }

  const handleRetry = () => {
    freshcall(level)
    timer()
    setRetryBtn(false)
  }

  const handleNext = () => {
    setLevel(level+1)
    freshcall(level+1)
    timer()
    setNextBtn(false)
  }

  const handleClick = (ele) => {
    if(trueSequence[index] === ele.number){
      let temp = sequence
      temp[ele.index].state = 'green'
      temp[ele.index].disabled = true
      if(index === (trueSequence.length-1)){
        setNextBtn(true)
        setMessage("You did it!, lets increase the level, shall we?")
      }
      setSequence([...temp])
      setIndex(index+1)
    }
    else{
        setMessage("Oops...seems like you lost the sequence, wanna try again?")
        let temp = sequence
        temp[ele.index].state = 'red'
        setSequence([...temp])
        setFlipBoxes(true)
        setRetryBtn(true)
    }
  };

  function timer(){
    var sec = 10;
    timer_ = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML=sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer_);
            setFlipBoxes(false)
        }
    }, 1000);
}

  return (
    <div className="game-container">
      <div className="level" >
        <div>LEVEL</div>
        <div>{level}</div>
      </div>
      <h2 className="game-title">Memory Sequence Game</h2>
      {
        start
        ?
        (
          <>
            <p className="game-message">{message}</p>
            <p className="game-message" id="safeTimerDisplay">Time</p>
            <div className="button-grid">
              {
                  flipBoxes
                  ?
                  (
                      sequence.map((ele) => (
                      <button
                          style={{cursor: 'default'}}
                          disabled={true}
                          key={ele.number}
                          onClick={() => handleClick(ele)}
                          className={ele.state === 'normal' ? "sequence-button" : ele.state === 'green' ? "sequence-button-green" : "sequence-button-red"}
                      >
                          {ele.number}
                      </button>
                  )))
                  :
                  (
                      sequence.map((ele) => (
                      <button
                          disabled={ele.disabled}
                          style={ele.disabled ? {cursor: 'default'} : {}}
                          key={ele.number}
                          onClick={() => handleClick(ele)}
                          className={ele.disabled ? ele.state === 'normal' ? "sequence-button" : ele.state === 'green' ? "sequence-button-green" : "sequence-button-red" : ele.state === 'normal' ? "sequence-button g-btn" : ele.state === 'green' ? "sequence-button-green g-btn" : "sequence-button-red g-btn"}
                      >
                      </button>
                  )))
              }
            </div>
            {
              retryBtn
              ?
              (
                <button style={{fontSize: '2rem'}} className="btn" onClick={handleRetry} >Retry</button>
              )
              :
              null
            }
            {
              nextBtn
              ?
              (
                <button style={{fontSize: '2rem'}} className="btn" onClick={handleNext} >Next</button>
              )
              :
              null
            }
          </>
        )
        :
        (
          <div>
            <button style={{fontSize: '2rem'}} className="btn" onClick={handleStart} >Start</button>
          </div>
        )
      }
    </div>
  );
}

export default MemorySequenceGame;