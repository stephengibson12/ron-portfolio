
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const data = window.siteData;

    // Helper: Create Project Card
    const createProjectCard = (project, sectionTheme) => {
        const card = h('div', 'card');
        card.onclick = () => window.location.href = project.path;
        card.style.cursor = 'pointer';

        // Image logic
        let imgHtml = '';
        if (project.image) {
            imgHtml = `<img src="${project.image}" class="card-image" alt="${project.title}" onerror="this.style.display='none'">`;
        }

        // Link Icons Logic
        let linksHtml = '';
        if (project.links) {
            const iconStyle = `width:24px; height:24px; stroke:var(--section-title); fill:none; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; cursor:pointer; transition: transform 0.2s;`;
            if (project.links.demo) {
                linksHtml += `
                    <a href="${project.links.demo}" class="card-icon-link" target="_blank" onclick="event.stopPropagation()" title="View Project" style="display:inline-block; margin-right:1rem;">
                        <svg xmlns="http://www.w3.org/2000/svg" style="${iconStyle}" viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 2 2 9"></path><path d="M15 2v6"></path><path d="M2 15h6"></path></svg>
                    </a>`;
            }
            if (project.links.repo) {
                linksHtml += `
                    <a href="${project.links.repo}" class="card-icon-link" target="_blank" onclick="event.stopPropagation()" title="View Code" style="display:inline-block;">
                        <svg xmlns="http://www.w3.org/2000/svg" style="${iconStyle}" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>`;
            }
        }

        card.innerHTML = `
            ${imgHtml}
            <div class="card-content">
                <div style="display:flex; justify-content:space-between; align-items:flex-start">
                    <h2 style="color: var(--section-title); margin-right: 1.5rem">${project.title}</h2>
                    <div class="card-icons" style="flex-shrink: 0">${linksHtml}</div>
                </div>
                <p>${project.description}</p>
                <div style="margin-top:auto; padding-top:1.5rem; color:var(--section-title); font-weight:bold; font-family:var(--font-mono); opacity: 0.8">
                    > ${project.action || 'VIEW'}
                </div>
            </div>
        `;
        return card;
    };

    // Render Global Header
    app.appendChild(renderHeader());

    // Routing Logic
    const path = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '');
    const parts = path.split('/').filter(p => p);

    const main = h('main', 'container');
    app.appendChild(main);

    if (parts.length === 0) {
        // HOME PAGE
        main.appendChild(renderBio());

        data.sections.forEach(section => {
            const sectionStyle = `--section-header: ${section.theme.header}; --section-title: ${section.theme.title};`;
            const sectionHeader = h('div', 'section-title-block', '');
            sectionHeader.style = `${sectionStyle} margin-top: 4rem; margin-bottom: 2rem; border-bottom: 1px solid var(--dim-color);`;

            const link = h('a', '', '');
            link.href = section.path;
            link.style.textDecoration = 'none';
            link.style.borderBottom = 'none';
            link.innerHTML = `
                <h2 style="font-family:var(--font-display); font-size:2rem; color:var(--section-header); transition:0.3s">${section.title}</h2>
                <p style="color:var(--dim-color); font-size:0.9rem">${section.description}</p>
            `;
            link.onmouseover = () => { link.querySelector('h2').style.textShadow = `0 0 10px ${section.theme.header}`; };
            link.onmouseout = () => { link.querySelector('h2').style.textShadow = 'none'; };

            sectionHeader.appendChild(link);
            main.appendChild(sectionHeader);

            const grid = h('div', 'section-grid');
            section.projects.forEach(project => {
                grid.appendChild(createProjectCard(project, section.theme));
            });
            main.appendChild(grid);
        });
    } else {
        // SECTION OR PROJECT VIEW
        const sectionId = parts[0].toLowerCase();
        const projectId = parts[1] ? parts[1].toLowerCase() : null;

        const section = data.sections.find(s => s.id === sectionId || s.path.includes(sectionId));
        if (section) {
            const sectionStyle = `--section-header: ${section.theme.header}; --section-title: ${section.theme.title};`;
            main.style = sectionStyle;

            if (projectId) {
                // Project Detail View
                const project = section.projects.find(p => p.id === projectId || p.path.includes(projectId));

                if (project) {
                    // Breadcrumb with clickable section link
                    const breadcrumb = h('div', 'breadcrumb');
                    breadcrumb.style.marginBottom = '1.5rem';
                    breadcrumb.style.fontFamily = 'var(--font-mono)';
                    breadcrumb.style.display = 'flex';
                    breadcrumb.style.alignItems = 'center';
                    breadcrumb.style.gap = '0.5rem';

                    // Section link (styled like nav-item)
                    const sectionLink = h('a', 'nav-item', '');
                    sectionLink.href = section.path;
                    sectionLink.style.setProperty('--hover-color', section.theme.header);
                    sectionLink.style.textTransform = 'uppercase';
                    sectionLink.style.fontSize = '0.9rem';
                    sectionLink.style.letterSpacing = '1px';

                    const indicator = h('div', 'status-indicator');
                    sectionLink.appendChild(indicator);

                    const sectionSpan = document.createElement('span');
                    sectionSpan.textContent = section.title;
                    sectionLink.appendChild(sectionSpan);

                    // Separator and project title
                    const separator = h('span', '', ' / ');
                    separator.style.color = 'var(--dim-color)';

                    const projectSpan = h('span', '', project.title);
                    projectSpan.style.color = 'var(--dim-color)';

                    breadcrumb.appendChild(sectionLink);
                    breadcrumb.appendChild(separator);
                    breadcrumb.appendChild(projectSpan);
                    main.appendChild(breadcrumb);

                    const fullCard = createProjectCard(project, section.theme);
                    fullCard.style.width = '100%';
                    fullCard.querySelector('.card-content').style.minHeight = '200px';
                    main.appendChild(fullCard);

                    const details = h('div', 'project-details');
                    details.style.marginTop = '2rem';
                    details.innerHTML = `
                        <h3 style="color:var(--section-title); margin-bottom:1.5rem; font-size:1.8rem">Deep Dive</h3>
                        
                        <p style="margin-bottom:1.5rem; line-height:1.8">${project.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        
                        <p style="margin-bottom:2rem; line-height:1.8">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                        
                        <div style="background:#222; width:100%; height:400px; display:flex; align-items:center; justify-content:center; color:#444; border:1px solid var(--dim-color); margin-bottom:2rem">
                            [ FULL WIDTH PROJECT MEDIA PLACEHOLDER ]
                        </div>
                        
                        <p style="margin-bottom:1.5rem; line-height:1.8">Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
                        
                        <p style="margin-bottom:2.5rem; line-height:1.8">Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Integer nec odio praesent libero sed cursus ante dapibus diam.</p>
                        
                        <div style="display:flex; gap:1rem">
                            <a href="${project.links.demo}" class="hero-link" style="display:inline-block; padding:0.8rem 1.5rem">LAUNCH PROJECT</a>
                            <a href="${project.links.repo}" class="hero-link" style="display:inline-block; padding:0.8rem 1.5rem; border-color:var(--dim-color)">VIEW SOURCE</a>
                        </div>
                    `;
                    main.appendChild(details);
                }
            } else {
                // Section Landing View
                const pageTitle = h('h1', 'page-title', section.title);
                pageTitle.style.color = 'var(--section-header)';
                main.appendChild(pageTitle);

                const grid = h('div', 'section-grid');
                section.projects.forEach(project => {
                    grid.appendChild(createProjectCard(project, section.theme));
                });
                main.appendChild(grid);
            }
        }
    }

    // Render Global Footer
    renderFooter(app);
});
