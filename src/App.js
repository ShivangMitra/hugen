// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MemorySequenceGame from "./MemorySequenceGame";
// import MazeNavigationGame from "./MazeNavigationGame";
import LoginPage from "./LoginPage";
import './App.css';

function App() {

  const [login, setLogin] = useState(true)

  return (
    <Router>
      <div className="app-container">
        {/* <nav className="nav-bar">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/memory">Memory Sequence</Link>
          <Link className="nav-link" to="/maze">Maze Navigation</Link>
        </nav> */}
        <div>
          <div style={
            {
              backgroundColor: 'red',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1rem',
              padding: '1%',
              borderRadius: '5px',
              width: '10vh',
              cursor: 'pointer',
              textAlign: 'center',
              marginBottom: '1%'
            }} onClick={() => setLogin(true)} >Logout</div>
        </div>
        {
          login
          ?
          (
            <LoginPage setLogin={setLogin}/>
          )
          :
          (
            // <Routes>
            //   <Route path="/" element={<h1 className="welcome-text">Welcome! Choose a game from above.</h1>} />
            //   <Route path="/memory" element={<MemorySequenceGame />} />
            //   <Route path="/maze" element={<MazeNavigationGame />} />
            // </Routes>
            <MemorySequenceGame/>
          )
        }
      </div>
    </Router>
  );
}

export default App;