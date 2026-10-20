export function gP(aF) {
  return Object.entries(aF)
    .filter(([path]) => !path.endsWith('index.astro'))
    .map(([path, module]) => ({
      title: module.frontmatter?.title || 'Sans titre',
      pubDate: module.frontmatter?.pubDate || '1970-01-01',
      description: module.frontmatter?.description || '',
      link: path.replace('./Articles', '/Articles').replace('./', '/Articles/').replace(/\.astro$/, ''),
    }))
    .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
}
