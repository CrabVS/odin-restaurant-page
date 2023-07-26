import './reset.css';
import './style.css';
import './header.css';

import initializeHome from './components/home/home';
import initializeMenu from './components/menu/menu';
import initializeContact from './components/contact/contact';

const addHeaderListeners = function addHeaderListeners() {
    const navHome = document.getElementById('nav-home');
    const navMenu = document.getElementById('nav-menu');
    const navContact = document.getElementById('nav-contact');

    navHome.addEventListener('click', initializeHome);
    navMenu.addEventListener('click', initializeMenu);
    navContact.addEventListener('click', initializeContact);

}

addHeaderListeners();
initializeHome();