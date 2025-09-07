import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  // Define available categories
  const validCategories: Record<string, any> = {
    'animations': () => import('./animations/page'),
    'backgrounds': () => import('./backgrounds/page'),
    'buttons': () => import('./buttons/page'),
    'effects': () => import('./effects/page'),
    'responsive-design': () => import('./responsive-design/page'),
    'templates': () => import('./templates/page'),
    'text': () => import('./text/page'),
    'transitions': () => import('./transitions/page'),
  };

  if (!validCategories[category]) {
    notFound();
  }

  try {
    const CategoryComponent = (await validCategories[category]()) as any;
    const Page = CategoryComponent.default;
    return <Page />;
  } catch (error) {
    console.error(`Error loading category page for ${category}:`, error);
    notFound();
  }
}

export async function generateStaticParams() {
  return [
    { category: 'animations' },
    { category: 'backgrounds' },
    { category: 'buttons' },
    { category: 'effects' },
    { category: 'responsive-design' },
    { category: 'templates' },
    { category: 'text' },
    { category: 'transitions' },
  ];
}