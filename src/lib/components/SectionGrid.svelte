<script lang="ts">
  import type { Project, SectionTheme } from '$lib/data/siteData';
  import ProjectCard from './ProjectCard.svelte';

  let { projects, theme }: { projects: Project[]; theme: SectionTheme } = $props();
</script>

<div class="section-grid">
  {#each projects as project (project.id)}
    <ProjectCard {project} {theme} />
  {/each}
</div>
