<script lang="ts">
  import { siteData } from '$lib/data/siteData';
  import Bio from '$lib/components/Bio.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import SectionGrid from '$lib/components/SectionGrid.svelte';
</script>

<svelte:head>
  <title>{siteData.title} | Software Developer, Skater, Digital Nomad</title>
  <meta name="description" content="Portfolio of Ronald Corona - Full stack developer crafting music apps, games, electronics projects, and data analytics tools." />
  <meta property="og:title" content="{siteData.title} | Software Developer" />
  <meta property="og:description" content="Full stack developer crafting music apps, games, electronics projects, and data analytics tools." />
  <meta property="og:image" content="https://ron-portfolio-3bb0b.web.app/images/cover.png?v=2" />
</svelte:head>

<Bio />

<section class="projects-header">
  <h2>Projects</h2>
</section>

{#each siteData.sections as section (section.id)}
  <SectionHeader {section} />
  <SectionGrid projects={section.projects} theme={section.theme} />
{/each}

<style>
  .projects-header {
    margin-top: 4rem;
    margin-bottom: 1rem;
    border-left: 4px solid var(--accent-color);
    padding-left: 1.5rem;
  }

  .projects-header h2 {
    font-family: var(--font-display);
    font-size: 2.5rem;
    color: var(--accent-color);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0;
  }
</style>
