import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { getAccessTokenDecoded, logout } from 'core/utils/auth';

import './styles.scss';

const Navbar = () => {

    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();

    useEffect(() => {
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    }, [location]);

    
    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    return (
        <nav className="main-nav">
            <a href="/" className="nav-logo-text">
                <h4>MovieFlix</h4>
            </a>

            {
                currentUser && (
            
                    <Link to="/" 
                        onClick={(e) => {handleLogout(e)}}
                        className="btn-exit btn-text active">
                        SAIR
                    </Link>
            )}     
            
        </nav>
    )
}

export default Navbar;