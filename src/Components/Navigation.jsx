import React from 'react';
import { useWindowScroll } from 'react-use';
import classNames from 'classnames';

import './Navigation.scss';

const Nav = () => {
    const { y } = useWindowScroll();
    
    const scrolled = y > 25;

    return (
        <div className={classNames('app-nav', { 'app-nav--background': scrolled })}>
            <div className="app-nav__wrapper">
                <div className={classNames('app-nav__brand', { 'app-name__brand--small': scrolled })}>
                    Leslie & Shaun
                </div>
                <div className="app-nav__navigation">
                    <ul className={classNames('app-nav__list', { 'app-nav__list--small': scrolled })}>
                        <li className="app-nav__item">Event Details</li>
                        <li className="app-nav__item">RSVP</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav;