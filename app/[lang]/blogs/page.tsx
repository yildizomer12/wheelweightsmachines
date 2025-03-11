import BlogList from '@/components/blogs/BlogList';
import { type Locale } from '@/i18n-config';
import { Hero } from '@/components/hero';
import { Contact } from '@/components/contact';

export { generateMetadata } from './page.metadata';

interface Props {
  params: { lang: Locale };
}

export default async function BlogsPage({ params }: Props) {
  const awaitedParams = await params;
  const { lang } = awaitedParams;
  return (
    <>
      <Hero />
      <BlogList />
      <Contact />
    </>
  );
}
