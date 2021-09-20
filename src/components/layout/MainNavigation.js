import { Link } from 'react-router-dom';

import navclass from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={navclass.header}>
            <div className={navclass.logo}>Programming Events</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/home'>Home Page</Link>
                    </li>
                    <li>
                        <Link to='/all-events'>All Events</Link>
                    </li>
                    <li>
                        <Link to='/new-events'>New Events</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;