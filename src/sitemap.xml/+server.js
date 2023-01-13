export async function get() {
	const website = 'https://anagolay.network';
	const staticPages = Object.keys(import.meta.glob('/src/routes/**/!(_)*.{svelte,md}', { eager: true }))
		.filter((page) => !page.includes('/src/routes/+page.svelte'))
		.map((page) => {
			return page.replace('/src/routes', website).replace('/+page.svelte', '/');
		});

	const sitemap = (staticPages) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
<url><loc>${website}</loc></url>
${staticPages.map((page) => `<url><loc>${page}</loc></url>`).join('')}

</urlset>`;

	return new Response(sitemap(staticPages), {
		headers: {
			/* eslint-disable-next-line */
			'Content-Type': 'application/xml',
		},
	});
}
