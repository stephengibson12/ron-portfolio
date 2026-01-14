<script lang="ts">
  import SectionGrid from '$lib/components/SectionGrid.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.section.title} | Ronald Corona</title>
  <meta name="description" content={data.section.description} />
</svelte:head>

<div style="--section-header:{data.section.theme.header}; --section-title:{data.section.theme.title}">
  <h1 class="page-title">{data.section.title}</h1>

  <SectionGrid projects={data.section.projects} theme={data.section.theme} />
</div>

<style>
  .page-title {
    color: var(--section-header);
    font-family: var(--font-display);
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
</style>
