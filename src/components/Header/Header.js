import React from 'react';
import './styles.scss';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faStream } from '@fortawesome/free-solid-svg-icons';

const toggleSideBar = () => {
    document.body.classList.contains("hide-sidebar") ? document.body.classList.remove("hide-sidebar") : document.body.classList.add("hide-sidebar");
}

const Header = () => (
    <header class="admin-header">
        <Button variant="dark" onClick={toggleSideBar}>
            <FontAwesomeIcon icon={faBars} className="hamburger-open" />
            <FontAwesomeIcon icon={faStream} flip="horizontal" className="hamburger-close" />
        </Button>
    </header>
)

export default Header;