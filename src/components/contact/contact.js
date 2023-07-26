import './contact.css';

const initializeContact = function initializeContact() {
    const contentEl = document.getElementById('content');
    
    contentEl.innerHTML = 
    `<div id="contact-container">
        <div id="contact">
            <h2>Contact</h2>
            <hr>
            <div class="contact-box">
                <h5>Phone Numbers</h5>
                <h6>000-000-0000</h6>
                <h6>000-000-0000</h6>
            </div>
            <div class="contact-box">
                <h5>Locations</h5>
                <h6>Unknown Region 1</h6>
                <h6>Unknown Region 2</h6>
            </div>
        </div>
    </div>`
}

export default initializeContact;