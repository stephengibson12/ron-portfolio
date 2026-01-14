<script lang="ts">
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.project.title} | {data.section.title} | Ronald Corona</title>
  <meta name="description" content={data.project.description} />
</svelte:head>

<div style="--section-header:{data.section.theme.header}; --section-title:{data.section.theme.title}">
  <Breadcrumb section={data.section} project={data.project} />

  <div class="project-card-full">
    <ProjectCard project={data.project} theme={data.section.theme} />
  </div>

  <div class="project-details">
    <h3>Deep Dive</h3>

    <p>
      {data.project.description} This project showcases advanced techniques and creative solutions
      in the field of {data.section.title.toLowerCase()}. Built with modern tools and best practices,
      it demonstrates a commitment to quality and innovation.
    </p>

    <div class="media-placeholder">
      [ FULL WIDTH PROJECT MEDIA PLACEHOLDER ]
    </div>

    <div class="action-buttons">
      {#if data.project.links?.demo}
        <a href={data.project.links.demo} class="hero-link">
          LAUNCH PROJECT
        </a>
      {/if}
      {#if data.project.links?.repo}
        <a href={data.project.links.repo} class="hero-link secondary">
          VIEW SOURCE
        </a>
      {/if}
    </div>
  </div>
</div>

<style>
  .project-card-full {
    width: 100%;
  }

  .project-details {
    margin-top: 2rem;
  }

  .project-details h3 {
    color: var(--section-title);
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }

  .project-details p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }

  .media-placeholder {
    background: #222;
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #444;
    border: 1px solid var(--dim-color);
    margin-bottom: 2rem;
  }

  .action-buttons {
    display: flex;
    gap: 1rem;
  }

  .action-buttons .hero-link {
    display: inline-block;
    padding: 0.8rem 1.5rem;
  }

  .action-buttons .hero-link.secondary {
    border-color: var(--dim-color);
  }
</style>
