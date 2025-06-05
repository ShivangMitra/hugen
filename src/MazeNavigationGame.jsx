import React, { useRef, useEffect, useState } from "react";

function MazeNavigationGame() {
  const canvasRef = useRef(null);
  const [pos, setPos] = useState({ x: 10, y: 10 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const drawMaze = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "black";
      ctx.fillRect(100, 0, 20, 200);
      ctx.fillRect(200, 100, 20, 200);

      ctx.fillStyle = "green";
      ctx.fillRect(280, 280, 20, 20);

      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 8, 0, Math.PI * 2);
      ctx.fill();
    };

    drawMaze();
  }, [pos]);

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (!(x > 100 && x < 120 && y < 200) && !(x > 200 && x < 220 && y > 100 && y < 300)) {
      setPos({ x, y });
    }
  };

  return (
    <div className="game-container">
      <h2 className="game-title">Maze Navigation Game</h2>
      <canvas
        ref={canvasRef}
        width={1000}
        height={500}
        className="maze-canvas"
        onMouseMove={handleMouseMove}
      />
    </div>
  );
}

export default MazeNavigationGame;