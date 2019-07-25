import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logOut }) => { 
    const display = currentUser ? (
        <div>
            <h3>Welcome {currentUser.email}</h3>
            <button onClick={logOut}>Logout</button>
        </div>
    ) : (
            <div>
                <Link className="btn" to="/signup">Sign Up</Link>
                <Link className="btn" to="/login">Log In</Link>
            </div>
        );
    return (
        <header className='nav-bar'>
            <h1 className='logo'>BenchBnB</h1>
            <div>
                {display}
            </div>
        </header>
    )
}


