import ArticleTitle from "@/components/ArticleTitle";
import Paragraph from "@/components/Paragraph";
import PageContent from "@/components/PageContent";

// `app/page.js` is the UI for the `/` URL
export default function Page() {
  return <div className="page-container p-10 left-[280px] top-[60px] relative flex gap-6">
    <article>
      <ArticleTitle>Foundations</ArticleTitle>
      <Paragraph>Polaris is the design system for the Shopify admin. It’s the shared language that guides how we build high-quality merchant experiences.</Paragraph>
    </article>
    <PageContent></PageContent>
  </div>
}