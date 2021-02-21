import { useRouter } from 'next/router';
import Accordion from 'components/accordion';
import SEO from 'components/seo';
import { sitePages } from 'settings/site-pages';
import { faq } from 'settings/faq';

export default function FAQ() {
  const { pathname } = useRouter();
  const PAGE_TYPE: string = pathname.substring(1);
  const page = sitePages[PAGE_TYPE];
  return (
    <>
      <SEO title={page?.page_title} description={page?.page_description} />
      <div className="py-35px px-0">
        <h3 className="w-full flex justify-center mb-30px text-24px text-gray-900 text-center font-semibold">
          F.A.Q
        </h3>
        <Accordion items={faq} />
      </div>
    </>
  );
}
