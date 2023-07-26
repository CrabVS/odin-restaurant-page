import './menu.css';

const initializeMenu = function initializeMenu() {
    const contentEl = document.getElementById('content');
    
    contentEl.innerHTML = 
    `<div id="menu-container">
        <div id="menu">
            <h2>Menu</h2>
            <hr>
            <div id="item-boxes">
                <div class="item-box">
                    <div class="item-description">
                        <h4>Pepperoni Pizza</h4>
                        <p>The classic pizza. The one above all.</p>
                    </div>
                    <div class="item-price">R76.99</div>
                </div>
                <hr>
                <div class="item-box">
                    <div class="item-description">
                        <h4>Pineapple Pizza</h4>
                        <p>The most debated pizza. Does pineapple and dough go together?!</p>
                    </div>
                    <div class="item-price">R46.99</div>
                </div>
                <hr>
                <div class="item-box">
                    <div class="item-description">
                        <h4>Vegetarian Pizza</h4>
                        <p>A pizza as the name states. Has no meat.</p>
                    </div>
                    <div class="item-price">R46.99</div>
                </div>
                <hr>
                <div class="item-box">
                    <div class="item-description">
                        <h4>Vegetarian Pizza</h4>
                        <p>A pizza as the name states. Has no meat.</p>
                    </div>
                    <div class="item-price">R46.99</div>
                </div>
                <hr>
                <div class="item-box">
                    <div class="item-description">
                        <h4>Vegetarian Pizza</h4>
                        <p>A pizza as the name states. Has no meat.</p>
                    </div>
                    <div class="item-price">R46.99</div>
                </div>
            </div>
        </div>
    </div>`
}

export default initializeMenu;