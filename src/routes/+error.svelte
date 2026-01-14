<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>Error {$page.status} | Ronald Corona</title>
</svelte:head>

<div class="error-page">
  <h1>{$page.status}</h1>
  <p>{$page.error?.message || 'Page not found'}</p>
  <a href="/" class="hero-link">
    RETURN HOME
  </a>
</div>

<style>
  .error-page {
    text-align: center;
    padding: 4rem 0;
  }

  .error-page h1 {
    color: var(--accent-color);
    font-size: 6rem;
    font-family: var(--font-display);
    margin-bottom: 1rem;
  }

  .error-page p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .error-page .hero-link {
    display: inline-block;
    padding: 0.8rem 1.5rem;
  }
</style>
