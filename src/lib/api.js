const WP_API_URL = import.meta.env.PUBLIC_WP_API_URL || 'https://your-wordpress-site.com/wp-json';

export async function getLogos() {
  try {
    const response = await fetch(`${WP_API_URL}/wp/v2/herramientas?_embed&per_page=100`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    const logos = data.map(item => {
      const featuredMedia = item._embedded?.['wp:featuredmedia']?.[0];
      
      return {
        id: item.id,
        title: item.title.rendered,
        imageUrl: featuredMedia?.source_url || featuredMedia?.media_details?.sizes?.medium?.source_url || '',
        alt: featuredMedia?.alt_text || item.title.rendered
      };
    }).filter(logo => logo.imageUrl);
    
    return logos;
  } catch (error) {
    console.error('Error fetching logos from WordPress:', error);
    return [];
  }
}

export async function getLogosFallback() {
  return [
    {
      id: 1,
      title: 'WordPress',
      imageUrl: 'https://s.w.org/style/images/about/WordPress-logotype-standard.png',
      alt: 'WordPress'
    },
    {
      id: 2,
      title: 'Astro',
      imageUrl: 'https://astro.build/assets/press/astro-logo-dark.svg',
      alt: 'Astro'
    },
    {
      id: 3,
      title: 'React',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      alt: 'React'
    },
    {
      id: 4,
      title: 'Tailwind CSS',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      alt: 'Tailwind CSS'
    },
    {
      id: 5,
      title: 'Vercel',
      imageUrl: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
      alt: 'Vercel'
    },
    {
      id: 6,
      title: 'Netlify',
      imageUrl: 'https://www.netlify.com/v3/img/components/logomark.png',
      alt: 'Netlify'
    }
  ];
}

export async function getProjects() {
  try {
    const response = await fetch(`${WP_API_URL}/wp/v2/proyectos?_embed&per_page=100`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    const projects = data.map(item => {
      const featuredMedia = item._embedded?.['wp:featuredmedia']?.[0];
      const categories = item._embedded?.['wp:term']?.[0] || [];
      
      return {
        id: item.id,
        slug: item.slug,
        title: item.title.rendered,
        excerpt: item.excerpt.rendered,
        content: item.content.rendered,
        imageUrl: featuredMedia?.source_url || featuredMedia?.media_details?.sizes?.large?.source_url || '',
        alt: featuredMedia?.alt_text || item.title.rendered,
        categories: categories.map(cat => ({
          id: cat.id,
          name: cat.name,
          slug: cat.slug
        })),
        technologies: item.acf?.technologies?.map(tech => tech.technology_name || tech) || [],
        url: item.acf?.project_url || '#',
        lighthouseScore: item.acf?.lighthouse_score || 100,
        loadTime: item.acf?.load_time || '0.5s',
        seoScore: item.acf?.seo_score || 100,
        challenge: item.acf?.challenge || '',
        solution: item.acf?.solution || '',
        date: item.date
      };
    }).filter(project => project.imageUrl);
    
    return projects;
  } catch (error) {
    console.error('Error fetching projects from WordPress:', error);
    return [];
  }
}

export async function getProjectBySlug(slug) {
  try {
    const response = await fetch(`${WP_API_URL}/wp/v2/proyectos?slug=${slug}&_embed`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.length === 0) {
      return null;
    }
    
    const item = data[0];
    const featuredMedia = item._embedded?.['wp:featuredmedia']?.[0];
    const categories = item._embedded?.['wp:term']?.[0] || [];
    
    return {
      id: item.id,
      slug: item.slug,
      title: item.title.rendered,
      excerpt: item.excerpt.rendered,
      content: item.content.rendered,
      imageUrl: featuredMedia?.source_url || featuredMedia?.media_details?.sizes?.large?.source_url || '',
      alt: featuredMedia?.alt_text || item.title.rendered,
      categories: categories.map(cat => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug
      })),
      technologies: item.acf?.technologies?.map(tech => tech.technology_name || tech) || [],
      url: item.acf?.project_url || '#',
      lighthouseScore: item.acf?.lighthouse_score || 100,
      loadTime: item.acf?.load_time || '0.5s',
      seoScore: item.acf?.seo_score || 100,
      challenge: item.acf?.challenge || '',
      solution: item.acf?.solution || '',
      date: item.date
    };
  } catch (error) {
    console.error('Error fetching project by slug from WordPress:', error);
    return null;
  }
}

export async function getAllProjects() {
  return getProjects();
}

export async function getPosts() {
  try {
    const response = await fetch(`${WP_API_URL}/wp/v2/posts?_embed&per_page=100`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    const posts = data.map(item => {
      const featuredMedia = item._embedded?.['wp:featuredmedia']?.[0];
      const categories = item._embedded?.['wp:term']?.[0] || [];
      const author = item._embedded?.['author']?.[0];
      
      return {
        id: item.id,
        slug: item.slug,
        title: item.title.rendered,
        excerpt: item.excerpt.rendered,
        content: item.content.rendered,
        imageUrl: featuredMedia?.source_url || featuredMedia?.media_details?.sizes?.large?.source_url || '',
        alt: featuredMedia?.alt_text || item.title.rendered,
        categories: categories.map(cat => ({
          id: cat.id,
          name: cat.name,
          slug: cat.slug
        })),
        author: {
          name: author?.name || 'WebToWP',
          avatar: author?.avatar_urls?.['96'] || ''
        },
        date: item.date,
        modified: item.modified
      };
    }).filter(post => post.imageUrl);
    
    return posts;
  } catch (error) {
    console.error('Error fetching posts from WordPress:', error);
    return [];
  }
}

export async function getPostBySlug(slug) {
  try {
    const response = await fetch(`${WP_API_URL}/wp/v2/posts?slug=${slug}&_embed`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.length === 0) {
      return null;
    }
    
    const item = data[0];
    const featuredMedia = item._embedded?.['wp:featuredmedia']?.[0];
    const categories = item._embedded?.['wp:term']?.[0] || [];
    const author = item._embedded?.['author']?.[0];
    
    return {
      id: item.id,
      slug: item.slug,
      title: item.title.rendered,
      excerpt: item.excerpt.rendered,
      content: item.content.rendered,
      imageUrl: featuredMedia?.source_url || featuredMedia?.media_details?.sizes?.large?.source_url || '',
      alt: featuredMedia?.alt_text || item.title.rendered,
      categories: categories.map(cat => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug
      })),
      author: {
        name: author?.name || 'WebToWP',
        avatar: author?.avatar_urls?.['96'] || ''
      },
      date: item.date,
      modified: item.modified
    };
  } catch (error) {
    console.error('Error fetching post by slug from WordPress:', error);
    return null;
  }
}

export async function getAllPosts() {
  return getPosts();
}
