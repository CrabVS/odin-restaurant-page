import './home.css';

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
}

export default initializeHome;

