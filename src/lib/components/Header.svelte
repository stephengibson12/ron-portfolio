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
    white-space: nowrap;
  }

  nav ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav ul li a {
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
  }

  .hamburger {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
</style>
