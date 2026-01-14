<script lang="ts">
  const iconStyle = "width:24px; height:24px; stroke:#00FFFF; fill:none; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; cursor:pointer; transition: transform 0.2s;";
</script>

<section class="bio-section">
  <h2>About Me</h2>

  <div class="bio-content">
    <img
      src="/images/headshot.png"
      alt="About Ronald Corona"
      class="avatar"
    />

    <div class="bio-details">
      <p class="bio-text">
        Independent software developer working on full stack web applications
      </p>

      <a href="mailto:Ronaldmcorona@gmail.com" class="bio-email">
        Ronaldmcorona@gmail.com
      </a>

      <div class="social-icons">
        <a href="#" class="card-icon-link" target="_blank" title="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" style={iconStyle} viewBox="0 0 24 24">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a href="#" class="card-icon-link" target="_blank" title="Projects">
          <svg xmlns="http://www.w3.org/2000/svg" style={iconStyle} viewBox="0 0 24 24">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
          </svg>
        </a>
        <a href="#" class="card-icon-link" target="_blank" title="Resume">
          <svg xmlns="http://www.w3.org/2000/svg" style={iconStyle} viewBox="0 0 24 24">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
        </a>
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
</style>
