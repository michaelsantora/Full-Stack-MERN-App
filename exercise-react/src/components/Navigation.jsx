import {Link} from 'react-router-dom'

function Navigation(){
    return (
        <nav className="app-nav">
            <Link to="/">Home</Link>
            <Link to="/create-exercise">Add Exercise</Link>
        </nav>
    )
}

export default Navigation;