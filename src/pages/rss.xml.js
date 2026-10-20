import rss from '@astrojs/rss';
import {gP} from '../utils/posts'

export async function GET(context) {
  const astroFiles = import.meta.glob('./Articles/*.astro', { eager: true });
  const posts = gP(astroFiles)

  return rss({
    title: 'GreenJacketBoy Feed', // you may want something else (e.g. something fancier)
    description: 'Latest articles and updates from GreenJacketBoy', // same
    site: context.site,
    items: posts
  });
}
