<script lang="ts">
  import type { Section } from '$lib/data/siteData';

  let { section }: { section: Section } = $props();
</script>

<div
  class="section-title-block"
  style="--section-header:{section.theme.header}; --section-title:{section.theme.title}"
>
  <a href={section.path}>
    <h2>{section.title}</h2>
    <p>{section.description}</p>
  </a>
</div>

<style>
  .section-title-block {
    margin-top: 4rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--dim-color);
  }

  .section-title-block a {
    text-decoration: none;
    border-bottom: none;
  }

  .section-title-block h2 {
    font-family: var(--font-display);
    font-size: 2rem;
    color: var(--section-header);
    transition: 0.3s;
  }

  .section-title-block a:hover h2 {
    text-shadow: 0 0 10px var(--section-header);
  }

  .section-title-block p {
    color: var(--dim-color);
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    .section-title-block {
      margin-top: 2.5rem;
      margin-bottom: 1.5rem;
    }

    .section-title-block h2 {
      font-size: 1.6rem;
    }

    .section-title-block p {
      font-size: 0.8rem;
    }
  }
</style>
