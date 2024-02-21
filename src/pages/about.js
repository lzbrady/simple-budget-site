import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import MainLayout from "layouts/MainLayout";
import SEO from "components/seo";

export default function About() {
  return (
    <MainLayout>
      <Section>
        <Title>About Simple Budget</Title>

        <Row>
          <ImageContainer>
            <StaticImage
              alt="App Screenshot One"
              src="../../static/images/LogoTransparent.png"
              width={240}
            />
          </ImageContainer>

          <Content>
            <BodyText>
              Simple Budget has one goal in mind-- to help you save money. Money
              plays an essential part of our society, and making sure you are in
              a comfortable financial situation can help make your life easier.
              Using Simple Budget ensures you have visibility into your past
              spending habits, clarity on the money you currently have, and
              peace of mind knowing exactly how your future finances will look.
            </BodyText>
            <BodyText>
              There are plenty of existing budgeting apps, and even some that
              can link to your bank accounts to automatically log your
              transactions for you. The problem is, once you connect everything,
              it becomes so automated that it becomes easy to forget. It ends up
              being the app that gains insights into your spending, not you.
            </BodyText>
            <BodyText>
              Manually entering your transactions ensures you stay aware of your
              spending. Simple Budget takes it from there and shows how you can
              start growing your savings!
            </BodyText>
          </Content>
        </Row>

        <Subtitle>The Inspiration</Subtitle>
        <BodyText>
          While having full transparency into spending habits is the focus of
          Simple Budget, the real inspiration comes from things money can't buy.
          It's unfortunate that money drives so many of our decisions, but it
          controls much of the society we live in today. Many people live
          paycheck to paycheck with no other option. But would you be doing the
          same job if money was no longer an issue? Would you travel? Would you
          spend more time with your family? The real inspiration behind Simple
          Budget is getting people in a place where money does not limit our
          lives, and we're free to focus on what really matters to us.
        </BodyText>

        <Subtitle>The Team</Subtitle>
        <BodyText>
          Today, Simple Budget is supported by a small, highly efficient, and
          caring team. Our slim size allows us to move fast and not get bogged
          down by overly complicated bureaucratic processes. Instead, we get to
          focus on innovative ideas and improving the app based on actual user
          feedback, not what corporate thinks would be best (there is no
          corporate!). We love our users, and look forward to hearing more
          stories of how Simple Budget has helped, as well we new ideas on how
          it can help even more.
        </BodyText>
      </Section>
    </MainLayout>
  );
}

export const Head = () => (
  <SEO
    title="About"
    description="Come check out what Simple Budget is, and how it can help you on your budgeting journey. Spoiler alert: it is a budgeting tool designed to help you gain insights into your spending, and start increasing your savings."
  />
);

const BodyText = styled.p`
  margin: 0px 0px 16px;
  display: inline-block;
`;

const Content = styled.div`
  flex: 1;
  margin: 8px 0px;
  min-width: 240px;
`;

const ImageContainer = styled.div`
  margin-right: 32px;
  box-shadow: 0px 4px 8px #b3b3b3;
  border-radius: 26px;
  align-self: baseline;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Section = styled.div`
  margin-top: 32px;
  padding: 16px;
`;

const Subtitle = styled.h3`
  margin: 32px 0px 8px;
  font-size: 24px;
`;

const Title = styled.h1`
  margin: 16px 0px 24px;
  text-align: center;
`;
