import React, { useState, useEffect } from "react";

const generateSequence = (length = 4) => {
    let temp = []
    let seq_elements = []
    for(let j = 1; j < length+1; j++){
        seq_elements.push(j)
    }
    for(let i = 0; i < length; i++){
        const random = Math.floor(Math.random() * seq_elements.length);
        
        temp[i] = seq_elements[random]

        seq_elements.splice(random, 1);
    }
    return temp
}

function MemorySequenceGame() {
  const [sequence, setSequence] = useState([]);
  const [index, setIndex] = useState(0)
  const [trueSequence, setTrueSequence] = useState([])
  const [message, setMessage] = useState("");

  const [flipBoxes, setFlipBoxes] = useState(true)
  
  useEffect(() => {
    const newSeq = generateSequence();
    setTrueSequence([1,2,3,4])
    console.log(newSeq)
    setSequence(newSeq);
    setMessage("Memorize the sequence!");
    timer()
  }, [message]);

  const handleClick = (num) => {
    if(trueSequence[index] === num){
        setIndex(index+1)
    }
    else{
        setMessage("Fail")
        setFlipBoxes(true)
    }
  };

  function timer(){
    var sec = 10;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            setFlipBoxes(false)
        }
    }, 1000);
}

  return (
    <div className="game-container">
      <h2 className="game-title">Memory Sequence Game</h2>
      <p className="game-message">{message}</p>
      <p className="game-message" id="safeTimerDisplay"></p>
      <div className="button-grid">
        {
            flipBoxes
            ?
            (
                sequence.map((num) => (
                <button
                    key={num}
                    onClick={() => handleClick(num)}
                    className="sequence-button"
                >
                    {num}
                </button>
            )))
            :
            (
                sequence.map((num) => (
                <button
                    key={num}
                    onClick={() => handleClick(num)}
                    className="sequence-button"
                >
                </button>
            )))
        }
      </div>
    </div>
  );
}

export default MemorySequenceGame;