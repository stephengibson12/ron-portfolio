
window.renderFooter = (app) => {
    const footer = document.createElement('footer');
    footer.style.background = '#111';
    footer.style.marginTop = '4rem';
    footer.style.padding = '2rem';
    footer.style.textAlign = 'center';
    footer.style.borderTop = '2px solid #00ff41';
    footer.innerHTML = `<div class="container">&copy; ${new Date().getFullYear()} Ronald Corona. All rights reserved <span style="color:var(--accent-color)">//</span></div>`;
    app.appendChild(footer);
};
