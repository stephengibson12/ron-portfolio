<script lang="ts">
  import type { Section, Project } from '$lib/data/siteData';

  let { section, project }: { section: Section; project: Project } = $props();
</script>

<div class="breadcrumb">
  <a
    href={section.path}
    class="nav-item"
    style="--hover-color:{section.theme.header}"
  >
    <div class="status-indicator"></div>
    <span>{section.title}</span>
  </a>

  <span class="separator"> / </span>

  <span class="current">{project.title}</span>
</div>

<style>
  .breadcrumb {
    margin-bottom: 1.5rem;
    font-family: var(--font-mono);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .breadcrumb a {
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
  }

  .separator {
    color: var(--dim-color);
  }

  .current {
    color: var(--dim-color);
  }
</style>
