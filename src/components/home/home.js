import './home.css';

import initializeMenu from '../menu/menu';

const addButtonListener = function addButtonListener() {
    const buttonEl = document.querySelector('#home-header .btn');

    buttonEl.addEventListener('click', initializeMenu );
}

const initializeHome = function initializeHome() {
    const contentEl = document.getElementById('content');
    
    contentEl.innerHTML = 
    `<div id="home">
        <div id="home-header">
            <h1>Affordable and Delicious</h1>
            <hr>
            <h4>Sweet doughy deals and custom orders!</h4>
            <button class="btn">The Menu</button>
        </div>
    </div>`

    addButtonListener();
}

export default initializeHome;

