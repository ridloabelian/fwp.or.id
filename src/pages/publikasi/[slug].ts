import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ params, redirect }) => {
  const slug = params.slug ? encodeURIComponent(params.slug) : '';
  return redirect(slug ? `/berita/${slug}` : '/berita', 301);
};
