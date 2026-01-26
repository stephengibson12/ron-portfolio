<script lang="ts">
  import { siteData } from '$lib/data/siteData';

  const iconStyle = "width:24px; height:24px; stroke:#00FFFF; fill:none; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; cursor:pointer; transition: transform 0.2s;";
</script>

<section class="bio-section">
  <h2>About Me</h2>

  <div class="bio-content">
    <img
      src="/images/headshot.webp"
      alt="About {siteData.title}"
      class="avatar"
    />

    <div class="bio-details">
      <p class="bio-text">
        Full stack developer building web apps, games, and hardware projects.
      </p>

      {#if siteData.social.email}
        <a href="mailto:{siteData.social.email}" class="bio-email">
          {siteData.social.email}
        </a>
      {/if}

      <div class="social-icons">
        {#if siteData.social.github}
          <a href={siteData.social.github} class="card-icon-link" target="_blank" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" style={iconStyle} viewBox="0 0 24 24">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        {/if}
        {#if siteData.social.linkedin}
          <a href={siteData.social.linkedin} class="card-icon-link" target="_blank" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" style={iconStyle} viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  .bio-section {
    margin-top: 2rem;
    margin-bottom: 2rem;
    --section-title: #00FFFF;
  }

  h2 {
    color: #00FFFF;
    font-size: 2rem;
    font-family: var(--font-display);
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 0px #000;
  }

  .bio-content {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
  }

  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #00FFFF;
    box-shadow: 5px 5px 0 #00FFFF;
    flex-shrink: 0;
  }

  .bio-details {
    flex: 1;
  }

  .bio-text {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    color: #fff;
  }

  .bio-email {
    display: block;
    width: fit-content;
    color: #00FFFF;
    font-family: var(--font-mono);
    margin-bottom: 1rem;
    background: none;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
  }

  .social-icons a {
    display: inline-block;
  }

  .social-icons a:hover svg {
    transform: scale(1.1);
  }

  /* Responsive styles */
  @media (max-width: 600px) {
    .bio-content {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .avatar {
      width: 120px;
      height: 120px;
    }

    .bio-details {
      width: 100%;
    }

    .bio-text {
      font-size: 1rem;
    }

    .bio-email {
      margin-left: auto;
      margin-right: auto;
    }

    .social-icons {
      justify-content: center;
    }
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 1.6rem;
    }

    .avatar {
      width: 100px;
      height: 100px;
    }

    .bio-text {
      font-size: 0.9rem;
    }

    .bio-email {
      font-size: 0.85rem;
    }
  }
</style>
