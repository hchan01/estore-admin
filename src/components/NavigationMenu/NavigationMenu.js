import React from 'react';
import './styles.scss';
import logo from '../../assets/images/logo.png';
import { useRouteMatch, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBoxes, faReceipt } from '@fortawesome/free-solid-svg-icons';

const NavigationMenu = () => {
    let { url } = useRouteMatch();

    return (
        <div className="navigation-menu">
            <img src={logo} className="navigation-menu__logo" />
            <hr />
            <ul>
                <li className="navigation-menu__row">
                    <NavLink exact to={`${url}`} className="navigation-menu__link" activeClassName="active">
                        <div className="navigation-menu__band"></div>
                        <FontAwesomeIcon icon={faHome} className="navigation-menu__icon" />
                        <span className="navigation-menu__link-text">Home</span>
                        <div className="triangle"></div>
                    </NavLink>
                </li>
                <li className="navigation-menu__row">
                    <NavLink exact to={`${url}/inventory`} className="navigation-menu__link" activeClassName="active">
                        <div class="navigation-menu__band"></div>
                        <FontAwesomeIcon icon={faBoxes} className="navigation-menu__icon" />
                        <span className="navigation-menu__link-text">Inventory</span>
                        <div className="triangle"></div>
                    </NavLink>
                </li>
                <li className="navigation-menu__row">
                    <NavLink exact to={`${url}/orders`} className="navigation-menu__link" activeClassName="active">
                        <div class="navigation-menu__band"></div>
                        <FontAwesomeIcon icon={faReceipt} className="navigation-menu__icon" />
                        <span className="navigation-menu__link-text">Orders</span>
                        <div className="triangle"></div>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu;