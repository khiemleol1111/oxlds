import ArticleTitle from "@/components/ArticleTitle";
import PageContent from "@/components/PageContent";
import Paragraph from "@/components/Paragraph";
import SectionTitle from "@/components/SectionTitle";

// `app/page.js` is the UI for the `/` URL
export default function Page() {
  const sections = [
    { id: "section1", label: "Usable for everyone" },
    { id: "section2", label: "Building inclusive experiences" },
    { id: "section3", label: "Managing focus to support" },
    { id: "section4", label: "Limiting non-standard interactions" },
    { id: "section5", label: "Assistive technology support" },
    { id: "section6", label: "Coding standards" },
  ];
  return (
    <div className="page-container p-10 flex items-start top-[84px] flex-grow gap-6">
      <article className="flex-grow">
        <ArticleTitle>Accessibility</ArticleTitle>
        <Paragraph>
          Making commerce better for everyone means caring deeply about making
          quality products. A quality product should have a fantastic user
          experience (UX).
        </Paragraph>
        <SectionTitle id="section1">Usable for everyone</SectionTitle>
        <Paragraph>
          It’s important that Shopify products—and Partner products—are usable
          and useful to everyone. Everyone is a pretty big group. It includes
          our merchants, their customers, our developer partners, our employees,
          and the greater tech community at large. That also includes all
          members of our community who have disabilities. Disabilities may
          affect how people move, see, hear, communicate, learn, understand, and
          process information. As a result, it’s important to consider how to
          design and develop your product to support a wide range of needs and
          experiences. In the United States, as many as 1 in 4 adults has at
          least 1 disability [Source: CDC]. In Canada, the estimate is 22%, and
          elsewhere in the world the estimate is closer to 1 in 7 [Source:
          Statistics Canada, World Bank].
        </Paragraph>
        <SectionTitle id="section2">
          Building inclusive experiences
        </SectionTitle>
        <Paragraph>
          Using our components is a way to improve accessibility and consistency
          when building products for Shopify. The component library in this
          style guide includes code we can use across applications This
          component code includes accessible markup Since the code exists in a
          single component that gets reused, it’s easier to update and fix any
          bugs The build-it-once, use-it-everywhere model means the
          accessibility knowledge of the designers and developers who build
          these components is available to all of Shopify and our partners.
          Because of this, merchants get a consistent experience that can be
          leveraged into accessible products. Many accessibility features come
          free in the components. But, it’s important to make sure that
          components are integrated in a way that doesn't create unforeseen
          accessibility barriers. Depending how components are used, there may
          be more design and implementation considerations. Be sure to test user
          task flows post integration.
        </Paragraph>
        <SectionTitle id="section3">
          Managing focus to support merchant workflows
        </SectionTitle>
        <Paragraph>
          Don’t programmatically move focus to new content without merchant
          input. Polaris components that use controls to display overlays, such
          as modals and popovers, manage focus automatically.
        </Paragraph>
        <SectionTitle id="section4">
          Limiting non-standard interactions
        </SectionTitle>
        <Paragraph>
          Merchants will expect to interact with controls and content in ways
          that follow the defaults for their browser, platform, and assistive
          technologies. Introducing non-standard features can give merchants
          better ways of accomplishing tasks, but they can also create barriers.
          For example, merchants who rely on the keyboard will expect that
          buttons can be activated with the enter/return key or the space key.
          If buttons are programmed to be used with different keys, merchants
          will need to be instructed on how to use them. Before designing or
          building custom features that use non-standard controls or
          interactions, first consider whether the goal can be met using native
          features. If non-standard interactions are required: Carefully follow
          guidelines and best practices for designing, building, and testing
          custom features on your platform Give merchants clear instructions for
          using the custom feature Provide an additional, standard way to
          accomplish the task
        </Paragraph>
        <SectionTitle id="section5">Assistive technology support</SectionTitle>
        <Paragraph>
          Our components are tested for accessibility with automated and manual
          techniques. Merchants should expect to be able to access features
          built with our components using modern assistive technologies. These
          include native and third-party tools like: Screen readers Speech
          recognition programs Supports for low vision and color blindness
          Alternative keyboards Switch devices Tools for readability
        </Paragraph>
      </article>
      <PageContent sections={sections}></PageContent>
    </div>
  );
}
