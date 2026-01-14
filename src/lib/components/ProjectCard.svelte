<script lang="ts">
  import type { Project, SectionTheme } from '$lib/data/siteData';

  let { project, theme }: { project: Project; theme: SectionTheme } = $props();

  const iconStyle = "width:24px; height:24px; stroke:var(--section-title); fill:none; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; cursor:pointer; transition: transform 0.2s;";

  function handleKeypress(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      window.location.href = project.path;
    }
  }
</script>

<div
  class="card"
  style="--section-title:{theme.title}"
  onclick={() => window.location.href = project.path}
  onkeypress={handleKeypress}
  role="button"
  tabindex="0"
>
  {#if project.image}
    <img
      src={project.image}
      class="card-image"
      alt={project.title}
    />
  {/if}

  <div class="card-content">
    <div class="card-header">
      <h2>{project.title}</h2>
      <div class="card-icons">
        {#if project.links?.demo}
          <a
            href={project.links.demo}
            class="card-icon-link"
            target="_blank"
            onclick={(e) => e.stopPropagation()}
            title="View Project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" style={iconStyle} viewBox="0 0 24 24">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
          </a>
        {/if}
        {#if project.links?.repo}
          <a
            href={project.links.repo}
            class="card-icon-link"
            target="_blank"
            onclick={(e) => e.stopPropagation()}
            title="View Code"
          >
            <svg xmlns="http://www.w3.org/2000/svg" style={iconStyle} viewBox="0 0 24 24">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        {/if}
      </div>
    </div>
    <p>{project.description}</p>
    <div class="card-action">
      &gt; {project.action || 'VIEW'}
    </div>
  </div>
</div>

<style>
  .card {
    cursor: pointer;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .card-header h2 {
    color: var(--section-title);
    margin-right: 1.5rem;
  }

  .card-icons {
    flex-shrink: 0;
    display: flex;
    gap: 0.5rem;
  }

  .card-action {
    margin-top: auto;
    padding-top: 1.5rem;
    color: var(--section-title);
    font-weight: bold;
    font-family: var(--font-mono);
    opacity: 0.8;
  }
</style>
