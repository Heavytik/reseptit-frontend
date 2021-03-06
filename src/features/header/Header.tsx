import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div>
            <h1>Sovellus</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Etusivu</Link>
                    </li>
                    <li>
                        <Link to="/reseptiarkisto">Reseptiarkisto</Link>
                    </li>
                    <li>
                        <Link to="/kirjautuminen">Kirjautuminen</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;