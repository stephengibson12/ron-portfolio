
window.renderBio = () => {
    const container = h('section', 'bio-section');
    container.style.marginTop = '2rem';
    container.style.marginBottom = '2rem';

    // Local Theme Scope for Icons
    container.style.setProperty('--section-title', '#00FFFF'); // Cyan for About Me

    // Section Title
    const title = h('h2', '', 'About Me');
    title.style.color = '#00FFFF';
    title.style.fontSize = '2rem';
    title.style.fontFamily = 'var(--font-display)';
    title.style.marginBottom = '1.5rem';
    title.style.textShadow = '2px 2px 0px #000';
    container.appendChild(title);

    // Content Wrapper
    const content = h('div', '');
    content.style.display = 'flex';
    content.style.alignItems = 'flex-start'; // Align top
    content.style.gap = '2rem';

    // Avatar
    const img = document.createElement('img');
    img.src = '/images/headshot.png';
    img.alt = 'About Ronald Corona';
    img.style.width = '150px';
    img.style.height = '150px';
    img.style.borderRadius = '50%';
    img.style.objectFit = 'cover';
    img.style.border = '2px solid #00FFFF';
    img.style.boxShadow = '5px 5px 0 #00FFFF';
    img.style.flexShrink = '0';
    img.onerror = () => { img.style.display = 'none'; };

    // Bio Text & Details
    const details = h('div', '');
    details.style.flex = '1';

    const text = h('p', '', 'Independent software developer working on full stack web applications');
    text.style.fontSize = '1.2rem';
    text.style.lineHeight = '1.6';
    text.style.marginBottom = '1rem';
    text.style.color = '#fff';

    const email = h('a', 'bio-email', 'Ronaldmcorona@gmail.com');
    email.href = 'mailto:Ronaldmcorona@gmail.com';
    email.style.display = 'block';
    email.style.width = 'fit-content';
    email.style.color = '#00FFFF';
    email.style.fontFamily = 'var(--font-mono)';
    email.style.marginBottom = '1rem';
    email.style.background = 'none';

    // Icons
    const iconStyle = `width:24px; height:24px; stroke:#00FFFF; fill:none; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; cursor:pointer; transition: transform 0.2s;`;

    const iconsDiv = h('div', '');
    // GitHub
    const githubIcon = `
        <a href="#" class="card-icon-link" target="_blank" title="GitHub" style="display:inline-block; margin-right:1rem;">
            <svg xmlns="http://www.w3.org/2000/svg" style="${iconStyle}" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>`;

    // Rocket (External)
    const rocketIcon = `
        <a href="#" class="card-icon-link" target="_blank" title="Projects" style="display:inline-block; margin-right:1rem;">
            <svg xmlns="http://www.w3.org/2000/svg" style="${iconStyle}" viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 2 2 9"></path><path d="M15 2v6"></path><path d="M2 15h6"></path></svg>
        </a>`;

    // Resume (Graduation Hat)
    const resumeIcon = `
        <a href="#" class="card-icon-link" target="_blank" title="Resume" style="display:inline-block;">
            <svg xmlns="http://www.w3.org/2000/svg" style="${iconStyle}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
        </a>`;

    iconsDiv.innerHTML = githubIcon + rocketIcon + resumeIcon;

    details.appendChild(text);
    details.appendChild(email);
    details.appendChild(iconsDiv);

    content.appendChild(img);
    content.appendChild(details);
    container.appendChild(content);

    return container;
};
