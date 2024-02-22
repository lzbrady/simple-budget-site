import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import MainLayout from "layouts/MainLayout";
import Seo from "components/seo";

import { colors } from "BaseTheme";
import CategoryIcon from "@icons/category.svg";
import InsightIcon from "@icons/insight.svg";
import TransactionIcon from "@icons/transaction.svg";

export default function Download() {
  return (
    <MainLayout>
      <DownloadContainer>
        <TitleContainer>
          <Title>Download Simple Budget</Title>
          <Subtitle>Know your Spending. Grow your Savings.</Subtitle>
        </TitleContainer>

        <AppLinkContainer>
          <AppLink
            href="https://apps.apple.com/us/app/simple-budget-expense-tracker/id1560574926"
            target="_blank"
          >
            <StaticImage
              alt="Download on iOS"
              src="../../static/images/ios_download.png"
              height={44}
            />
          </AppLink>
          <AppLink
            href="https://play.google.com/store/apps/details?id=com.pgmediasolutions.simplebudget"
            target="_blank"
          >
            <StaticImage
              alt="Download on Android"
              src="../../static/images/android_download.png"
              height={44}
            />
          </AppLink>
        </AppLinkContainer>
      </DownloadContainer>

      <Section>
        <Columns>
          <Col>
            <CategoryIcon fill={colors.primary} width={50} height={50} />
            <ColTitle>Categorize Your Spending</ColTitle>
            <BodyText>
              How have you been spending your money each month? The best place
              to start saving is by knowing how you are currently spending your
              money.
            </BodyText>
          </Col>
          <ColDivider />
          <Col>
            <TransactionIcon fill={colors.primary} width={50} height={50} />
            <ColTitle>Add Your Transactions</ColTitle>
            <BodyText>
              Tracking your transactions will allow you to see accurate and
              informative insights about your spending, and highlight area where
              you're spending the most.
            </BodyText>
          </Col>
          <ColDivider />
          <Col>
            <InsightIcon fill={colors.primary} width={50} height={50} />
            <ColTitle>Learn From Insights</ColTitle>
            <BodyText>
              Understand your financial situation with Simple Budget. Insights
              will help you see where your'e spending your money, where you can
              cut back, and other opportunities to save.
            </BodyText>
          </Col>
        </Columns>
      </Section>

      <SectionDivider />

      <Footer>
        <FootNote>How will you save?</FootNote>
        <FootNote>Start by downloading today.</FootNote>
      </Footer>
    </MainLayout>
  );
}

export const Head = () => (
  <Seo
    title="Download"
    description="Download Simple Budget today to kickstart your budgeting journey. Find out how Simple Budget guides you to save more with intuitive charts, figures, insights, and more."
  />
);

const AppLink = styled.a`
  margin: 16px;
`;

const AppLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyText = styled.p`
  color: ${colors.darkGray};
`;

const Columns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const Col = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 16px 32px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const ColDivider = styled.div`
  background-color: ${colors.lightGray};
  width: 1px;
  height: 144px;
  align-self: center;
`;

const ColTitle = styled.h3``;

const DownloadContainer = styled.div`
  background: linear-gradient(136deg, #7ace95 50%, #46c3c1);
  padding: 16px 8px;
`;

const Footer = styled.div`
  margin: 32px;
`;

const FootNote = styled.p`
  text-align: center;
  margin: 4px;
`;

const Section = styled.div`
  background-color: ${(props) => props.$backgroundColor};
  margin-top: 16px;
  padding: 16px;
`;

const SectionDivider = styled.div`
  background-color: ${colors.lightGray};
  height: 1px;
  width: calc(100% - 32px);
  margin: 16px 16px;
  align-self: center;
`;

const Subtitle = styled.h3`
  margin: 8px 0px 0px;
  color: #ececec;
`;

const Title = styled.h1`
  margin: 0px;
  color: white;
`;

const TitleContainer = styled.div`
  text-align: center;
  padding: 16px;
`;
