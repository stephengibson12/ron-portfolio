<script lang="ts">
  import { siteData } from '$lib/data/siteData';

  let mobileNavActive = $state(false);

  function toggleMobileNav() {
    mobileNavActive = !mobileNavActive;
  }

  function closeMobileNav() {
    mobileNavActive = false;
  }
</script>

<header class="main-header">
  <div class="container header-container">
    <div class="header-left">
      <a href="/" class="site-title premium-logo">{siteData.title}</a>
      <div class="tagline">
        {siteData.hero.description}
      </div>
    </div>

    <nav>
      <ul>
        {#each siteData.sections as section}
          <li>
            <a
              href={section.path}
              class="nav-item"
              style="--hover-color:{section.theme.header}"
            >
              <div class="status-indicator"></div>
              <span>{section.title}</span>
            </a>
          </li>
        {/each}
      </ul>
    </nav>

    <button
      class="hamburger"
      class:active={mobileNavActive}
      onclick={toggleMobileNav}
      aria-label="Toggle navigation"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</header>

<div class="mobile-nav" class:active={mobileNavActive}>
  <a
    href="/"
    class="nav-item"
    onclick={closeMobileNav}
    style="--hover-color:var(--accent-color)"
  >
    <div class="status-indicator"></div>
    <span>Home</span>
  </a>
  {#each siteData.sections as section}
    <a
      href={section.path}
      class="nav-item"
      onclick={closeMobileNav}
      style="--hover-color:{section.theme.header}"
    >
      <div class="status-indicator"></div>
      <span>{section.title}</span>
    </a>
  {/each}
</div>

<style>
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .header-left {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .tagline {
    font-family: var(--font-mono);
    font-size: 1rem;
    color: var(--text-color);
    margin-top: 1rem;
  }

  /* Default: horizontal nav for wide screens */
  nav ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav ul li a {
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 1px;
  }

  .hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  /* Medium screens: vertical stacked nav */
  @media (max-width: 768px) {
    .header-container {
      align-items: flex-start;
    }

    nav ul {
      flex-direction: column;
      align-items: flex-end;
      gap: 0;
    }

    nav ul li a {
      padding: 0.1rem 0;
    }
  }

  /* Small screens: hamburger menu */
  @media (max-width: 500px) {
    .hamburger {
      display: flex;
    }

    nav {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .tagline {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 400px) {
    .tagline {
      font-size: 0.75rem;
    }
  }
</style>
