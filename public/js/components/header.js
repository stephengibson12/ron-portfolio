window.renderHeader = () => {
  const data = window.siteData;
  const header = document.createElement("header");
  header.className = "main-header";
  const container = h("div", "container");
  header.appendChild(container);

  // Flex container: Left = Branding, Right = Nav
  container.style.display = "flex";
  container.style.justifyContent = "space-between";
  container.style.alignItems = "center";
  container.style.width = "100%";

  // Left Column: Logo + Tagline
  const leftCol = h("div", "header-left");
  leftCol.style.display = "flex";
  leftCol.style.flexDirection = "column";
  leftCol.style.gap = "0.5rem";

  // Logo with new default style
  const titleLink = h("a", "site-title premium-logo", data.title);
  titleLink.href = "/";

  // Tagline
  const tagline = h("div", "tagline", "Software Developer. Skater. Digital Nomad.");
  tagline.style.fontFamily = "var(--font-mono)";
  tagline.style.fontSize = "1rem";
  tagline.style.color = "var(--text-color)";
  tagline.style.marginTop = "1rem";
  tagline.style.whiteSpace = "nowrap";

  leftCol.appendChild(titleLink);
  leftCol.appendChild(tagline);

  // Right Column: Nav (Desktop)
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  // Helper to create nav items
  const createNavItem = (section) => {
    const a = h("a", "nav-item", "");
    a.href = section.path;
    a.style.textTransform = "uppercase";
    a.style.fontSize = "0.9rem";
    a.style.letterSpacing = "1px";
    a.style.setProperty("--hover-color", section.theme.header);

    const indicator = h("div", "status-indicator");
    a.appendChild(indicator);

    const span = document.createElement("span");
    span.textContent = section.title;
    a.appendChild(span);

    return a;
  };

  data.sections.forEach((section) => {
    const li = document.createElement("li");
    li.appendChild(createNavItem(section));
    ul.appendChild(li);
  });

  nav.appendChild(ul);

  // Hamburger Button (Mobile)
  const hamburger = h("div", "hamburger");
  hamburger.innerHTML = "<span></span><span></span><span></span>";

  // Mobile Nav Overlay
  const mobileNav = h("div", "mobile-nav");
  data.sections.forEach((section) => {
    mobileNav.appendChild(createNavItem(section));
  });

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("active");
  });

  // Close menu on link click
  mobileNav.querySelectorAll(".nav-item").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileNav.classList.remove("active");
    });
  });

  container.appendChild(leftCol);
  container.appendChild(nav);
  container.appendChild(hamburger);

  // Append mobile nav to body so it overlays everything
  document.body.appendChild(mobileNav);

  return header;
};
