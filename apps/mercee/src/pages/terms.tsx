import { useRouter } from 'next/router';
import TermsPageContent from 'containers/term/terms';
import SEO from 'components/seo';
import { sitePages } from 'settings/site-pages';

export default function FAQ() {
  const { pathname } = useRouter();
  const PAGE_TYPE: string = pathname.substring(1);
  const page = sitePages[PAGE_TYPE];
  return (
    <>
      <SEO title={page?.page_title} description={page?.page_description} />

      <div className="px-0">
        <TermsPageContent />
      </div>
    </>
  );
}
