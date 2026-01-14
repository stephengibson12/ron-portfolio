import { error } from '@sveltejs/kit';
import { getSectionById } from '$lib/data/siteData';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const section = getSectionById(params.section);

  if (!section) {
    throw error(404, 'Section not found');
  }

  return { section };
};
