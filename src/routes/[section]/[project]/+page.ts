import { error } from '@sveltejs/kit';
import { getSectionById, getProjectById } from '$lib/data/siteData';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const section = getSectionById(params.section);
  if (!section) {
    throw error(404, 'Section not found');
  }

  const project = getProjectById(params.section, params.project);
  if (!project) {
    throw error(404, 'Project not found');
  }

  return { section, project };
};
