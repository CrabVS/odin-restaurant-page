import './reset.css';
import './style.css';
import './header.css';

import initializeHome from './components/home/home';
import initializeMenu from './components/menu/menu';

const addHeaderListeners = function addHeaderListeners() {
    const navHome = document.getElementById('nav-home');
    const navMenu = document.getElementById('nav-menu');

    navHome.addEventListener('click', initializeHome);
    navMenu.addEventListener('click', initializeMenu);
}

addHeaderListeners();
initializeHome();