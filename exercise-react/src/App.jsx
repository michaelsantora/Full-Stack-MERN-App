import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import Navigation from './components/Navigation';
import {useState} from 'react'

function App() {

    const [exerciseToEdit, setExerciseToEdit] = useState();

    return (
      <>
        <header className="title">
            <h1>Exercise Tracker</h1>
            <p><em>Full Stack MERN App Demonstration</em></p>
        </header>

        <div className="app">
            <Router>
              <Navigation/>
              <Routes>
                <Route path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit}/>}></Route>
                <Route path="/create-exercise" element={ <CreateExercisePage />}></Route>
                <Route path="/edit-exercise" element={ <EditExercisePage exerciseToEdit = {exerciseToEdit}/>}></Route>
              </Routes>
            </Router>
        </div>
        
        <footer>
                <p><em>&#169; 2025 Michael Santora</em></p>
        </footer>
      </>
  );
}

export default App;