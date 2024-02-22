import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import MainLayout from "layouts/MainLayout";
import Seo from "components/seo";
import { colors } from "BaseTheme";

const HeaderImageContainerStyle = {
  width: "100%",
  maxHeight: "300px",
  marginTop: "80px",
};
const HeaderImageStyle = {
  overflow: "hidden",
};

export default function Blog({ data }) {
  const { allMarkdownRemark } = data;
  const blogs = allMarkdownRemark?.nodes;
  console.log("blogs", blogs);

  return (
    <MainLayout
      HeroComponent={
        <>
          <StaticImage
            alt="The Simple Budget Blog"
            src="../../../static/images/headers/blog-header.jpg"
            style={HeaderImageContainerStyle}
            imgStyle={HeaderImageStyle}
          />
          <ImageCredit>
            Photo by{" "}
            <a href="https://unsplash.com/@we_are_rising?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              lucas Favre
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/man-holding-1-us-dollar-banknote-MNXaW_ABlZY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </ImageCredit>
        </>
      }
    >
      <TitleWrapper>
        <Title>Simple Budget Blog</Title>
        <Subtitle>Welcome to the blog for all things budgeting.</Subtitle>
      </TitleWrapper>

      <BlogPostsWrapper>
        {blogs.map((blogPost) => {
          const { title, date, description } = blogPost.frontmatter;
          return (
            <BlogPost key={title}>
              <BlogLink to={`/blog${blogPost.fields.slug}`}>
                <BlogPostTitle>{title}</BlogPostTitle>
                <BlogPostDesc>{description || blogPost.excerpt}</BlogPostDesc>
                <BlogPostDate>Published: {date}</BlogPostDate>
              </BlogLink>
            </BlogPost>
          );
        })}
      </BlogPostsWrapper>
    </MainLayout>
  );
}

export const Head = () => (
  <Seo
    title="Blog"
    description="Check out the Simple Budget Blog to get useful insights into budgeting, and discover how Simple Budget can be useful in your budgeting journey."
  />
);

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;

const BlogPost = styled.div`
  border-bottom: 1px solid ${colors.lightGray};
  margin: 8px 0px;
  padding: 8px;

  &:hover {
    box-shadow: 0px 4px 8px #b3b3b3;
    cursor: pointer;
    border-radius: 8px;
  }
`;
const BlogPostDate = styled.p`
  font-size: 12px;
  text-align: end;
  margin: 0px;
`;
const BlogPostDesc = styled.p`
  margin: 4px;
`;
const BlogLink = styled((props) => <Link {...props} />)`
  color: ${colors.black};
  text-decoration: none;
`;
const BlogPostTitle = styled.h3`
  font-weight: 600;
  margin-top: 0px;
  color: ${colors.accent};
  text-decoration: underline;
`;
const BlogPostsWrapper = styled.div`
  margin-top: 16px;
`;

const ImageCredit = styled.p`
  position: absolute;
  top: 88px;
  margin: 0px;
  right: 8px;
  color: white;
  font-size: 10px;
`;

const Subtitle = styled.h3`
  margin: 0px;
`;
const Title = styled.h1`
  margin: 0px;
`;
const TitleWrapper = styled.div`
  margin: 16px 0px;
`;
