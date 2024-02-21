import React from "react";

import MainLayout from "layouts/MainLayout";
import SEO from "components/seo";

export default function Blog() {
  return (
    <MainLayout>
      <p>This is a Blog Yo</p>
    </MainLayout>
  );
}

export const Head = () => (
  <SEO
    title="Blog"
    description="Check out the Simple Budget Blog to get useful insights into budgeting, and discover how Simple Budget can be useful in your budgeting journey."
  />
);
