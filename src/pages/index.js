import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import MainLayout from 'layouts/MainLayout';
import Button from 'components/Button';

import { colors } from 'BaseTheme';
import CategoryIcon from '@icons/category.svg';
import InsightIcon from '@icons/insight.svg';
import TransactionIcon from '@icons/transaction.svg';

const ButtonStyle = {
    marginTop: '16px',
};

const BubbleSectionStyle = {
    margin: '96px 32px 0px',
    borderRadius: '26px',
};

const PowerfulInsightsStyle = {
    borderTop: `4px solid ${colors.primary}`,
    borderBottom: `4px solid ${colors.primary}`,
    padding: '32px 0px',
};

const PremiumScreenshotStyle = {
    borderRadius: '13px',
    overflow: 'hidden',
};

const ScreenshotContainerStyle = {
    height: '300px',
    width: '100%',
    minWidth: '260px',
    position: 'relative',
};

const ScreenshotLeftStyle = {
    left: '0px',
    bottom: '0px',
};

const ScreenshotRightStyle = {
    top: '0px',
    right: '0px',
};

const StatsContainerStyle = {
    flexDirection: 'column',
    marginTop: '32px',
};

const PremiumScreenshotImageNames = ['Annual_Savings.png', 'Categories_Overview.png', 'Category_Details.png', 'Budget_Calculator.png'];
const IndexPage = () => {
    const [premiumScreenshotIndex, setPremiumScreenshotIndex] = useState(0);

    useEffect(() => {
        const unsubscribe = setInterval(() => {
            setPremiumScreenshotIndex((prev) => (prev + 1 >= PremiumScreenshotImageNames.length ? 0 : prev + 1));
        }, 5000);

        return unsubscribe;
    }, []);

    const getPremiumScreenshot = useCallback(() => {
        switch (premiumScreenshotIndex) {
            case 0:
                return <StaticImage style={PremiumScreenshotStyle} alt="Premium Screenshot One" src="../../static/images/premium/Annual_Savings.png" width={240} />;
            case 1:
                return <StaticImage style={PremiumScreenshotStyle} alt="Premium Screenshot One" src="../../static/images/premium/Categories_Overview.png" width={240} />;
            case 2:
                return <StaticImage style={PremiumScreenshotStyle} alt="Premium Screenshot One" src="../../static/images/premium/Category_Details.png" width={240} />;
            case 3:
                return <StaticImage style={PremiumScreenshotStyle} alt="Premium Screenshot One" src="../../static/images/premium/Budget_Calculator.png" width={240} />;
        }
    }, [premiumScreenshotIndex]);

    return (
        <MainLayout
            HeroComponent={
                <HeroHeader>
                    <HeroContentContainer>
                        <HeroLeft>
                            <HeroTitleContainer>
                                <TitleLight fontSize={48}>Simplify Your Budget</TitleLight>
                                <HeroLabel>Know your Spending. Grow your Savings.</HeroLabel>
                            </HeroTitleContainer>

                            <AppLinkContainer>
                                <AppLink href="https://apps.apple.com/us/app/simple-budget-expense-tracker/id1560574926" target="_blank">
                                    <StaticImage alt="Download on iOS" src="../../static/images/ios-download.png" height={44} />
                                </AppLink>
                                <AppLink href="https://play.google.com/store/apps/details?id=com.pgmediasolutions.simplebudget" target="_blank">
                                    <StaticImage alt="Download on Android" src="../../static/images/android-download.png" height={44} />
                                </AppLink>
                            </AppLinkContainer>
                        </HeroLeft>

                        <HeroRight>
                            <StaticImage alt="Simple Budget Screenshot" src="../../static/images/transactions-screenshot.png" width={240} />
                        </HeroRight>
                    </HeroContentContainer>
                </HeroHeader>
            }
        >
            <title>Home | Simple Budget</title>

            <Section small>
                <Columns alignTop>
                    <Col>
                        <CategoryIcon fill={colors.primary} width={50} height={50} />
                        <ColTitle>Categorize Your Spending</ColTitle>
                        <BodyText>
                            This goes beyond assigning transactions to categories for the sake of cool graphs. You also specify an amount you plan to spend on each category, and it is up to you to
                            stick to that amount.
                        </BodyText>
                    </Col>
                    <ColDivider />
                    <Col>
                        <TransactionIcon fill={colors.primary} width={50} height={50} />
                        <ColTitle>Add Your Transactions</ColTitle>
                        <BodyText>
                            Each time you spend money on something, you should add it to your budget app. Simple Budget makes no judgments on spending habits, and it is important all of your
                            transactions are added so your budget is accurate.
                        </BodyText>
                    </Col>
                    <ColDivider />
                    <Col>
                        <InsightIcon fill={colors.primary} width={50} height={50} />
                        <ColTitle>Learn From Insights</ColTitle>
                        <BodyText>
                            Simple Budget requires effort from you, but once you start using it, you get to experience the insights it can provide. You will have absolute clarity on your financial
                            position.
                        </BodyText>
                    </Col>
                </Columns>
            </Section>

            <Section>
                <Columns style={PowerfulInsightsStyle}>
                    <Col style={ScreenshotContainerStyle}>
                        <ScreenshotContainer style={ScreenshotLeftStyle}>
                            <StaticImage alt="App Screenshot One" src="../../static/images/insights1.png" width={240} />
                        </ScreenshotContainer>
                        <ScreenshotContainer style={ScreenshotRightStyle}>
                            <StaticImage alt="App Screenshot Two" src="../../static/images/insights2.png" width={240} />
                        </ScreenshotContainer>
                    </Col>
                    <Col flex={2}>
                        <Title>Experience Powerful Insights</Title>
                        <ScreenshotDesc>
                            You need to save money, but don't know where you can cut back on spending. Never experience this dilemma again with the power of Simple Budget insights.
                        </ScreenshotDesc>
                        <Button style={ButtonStyle} text="Learn More" to="why-simple-budget" />
                    </Col>
                </Columns>
            </Section>

            <Section>
                <PremiumContainer>
                    <PremiumContent>
                        <Title>Premium Insights</Title>
                        <BodyText>Unlock powerful insights for only $1/month. Because keeping a budget shouldn't be another expense.</BodyText>

                        <PricingContainer>
                            <Pricing borderRight>
                                <Price>$1 / month</Price>
                            </Pricing>
                            <Pricing>
                                <Price>$10 / year</Price>
                            </Pricing>
                        </PricingContainer>

                        <PremiumList>
                            <PremiumListItem>View your full budget history</PremiumListItem>
                            <PremiumListItem>Watch your savings grow every month</PremiumListItem>
                            <PremiumListItem>Get a breakdown of spending by category</PremiumListItem>
                            <PremiumListItem>Get a further breakdown of each category</PremiumListItem>
                            <PremiumListItem>Budget Calculator: See exactly how your finances will look at the end of the month</PremiumListItem>
                            <PremiumListItem>Be on the lookout for new features added!</PremiumListItem>
                        </PremiumList>

                        <BasicTitle>Not Ready for Premium?</BasicTitle>
                        <BodyText>
                            No worries, non premium accounts can still use the full app. Unlike other budgeting apps, premium access is focused on insights, not usability. No limits on categories,
                            transactions, or any other data you input.
                        </BodyText>
                    </PremiumContent>

                    <PremiumScreenshotContainer>{getPremiumScreenshot()}</PremiumScreenshotContainer>
                </PremiumContainer>
            </Section>

            <Section style={BubbleSectionStyle} backgroundColor={colors.primary}>
                <ReasonsContainer>
                    <ReasonTitleContainer>
                        <TitleLight>How Would a Budget Help Me?</TitleLight>
                    </ReasonTitleContainer>

                    <ReasonsWrapper>
                        <Reason>Become more aware of how much money you're actually making each month</Reason>
                        <Reason>Know exactly how, and where, you're spending the money you earn</Reason>
                        <Reason>Identify areas you're over-spending</Reason>
                        <Reason>Know how you can adjust your spending habits</Reason>
                        <Reason>Determine how much you can put towards savings by building it right into your budget</Reason>
                        <Reason>Build stronger financial independence by taking control of your own money</Reason>
                    </ReasonsWrapper>

                    <Button inverse style={ButtonStyle} text="Get Simple Budget" to="why-simple-budget" />
                </ReasonsContainer>
            </Section>

            <Section>
                <Title>Take Control of Your Finances</Title>
                <BodyText>
                    Living paycheck to paycheck? Worried about making rent or other bills? You're not alone. Imagine instead of being one of these statistics, you had a plan for every dollar you
                    spend. Instead of worrying about how much you spent last weekend, you knew how much you could afford to spend this weekend.
                </BodyText>

                <Columns style={StatsContainerStyle}>
                    <StatContainer>
                        <StatNumber>$5.3k</StatNumber>
                        <StatDesc>Average household credit card debt</StatDesc>
                        <StatCitation>[1]</StatCitation>
                    </StatContainer>
                    <StatContainer>
                        <StatNumber>2.7</StatNumber>
                        <StatDesc>Number of cards held by avg credit card holder</StatDesc>
                        <StatCitation>[1]</StatCitation>
                    </StatContainer>
                    <StatContainer>
                        <StatNumber>$90.4k</StatNumber>
                        <StatDesc>Avg American Debt</StatDesc>
                        <StatCitation>[2]</StatCitation>
                    </StatContainer>
                    <StatContainer>
                        <StatNumber>64%</StatNumber>
                        <StatDesc>Americans who site money as a significant source of stress</StatDesc>
                        <StatCitation>[3]</StatCitation>
                    </StatContainer>
                    <StatContainer>
                        <StatNumber>1 App</StatNumber>
                        <StatDesc>To put your financial worries behind you</StatDesc>
                    </StatContainer>
                </Columns>

                <StatsSourceContainer>
                    <StatsSource>Sources (2021)</StatsSource>
                    <StatsSource>[1] https://www.debt.org/faqs/americans-in-debt/</StatsSource>
                    <StatsSource>[2] https://www.debt.org/faqs/americans-in-debt/demographics/</StatsSource>
                    <StatsSource>[3] https://www.debt.org/advice/good-vs-bad/</StatsSource>
                </StatsSourceContainer>
            </Section>
        </MainLayout>
    );
};

const AppLink = styled.a`
    margin: 0px 8px;
`;

const AppLinkContainer = styled.div``;

const BasicTitle = styled.h3`
    margin: 32px 0px 0px;
`;

const BodyText = styled.p`
    color: ${colors.darkGray};
`;

const Columns = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: ${(props) => (props.alignTop ? 'flex-start' : 'center')};
`;

const Col = styled.div`
    flex: ${(props) => props.flex || 1};
    min-width: ${(props) => (props.minWidth ? `${props.minWidth}px` : '200px')};
    margin: ${(props) => props.margin || '16px 32px'};
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

const ColDivider = styled.div`
    background-color: #c6cdd2;
    width: 1px;
    height: 144px;
    align-self: center;
`;

const ColTitle = styled.h3``;

const HeroHeader = styled.div`
    background: linear-gradient(172deg, ${colors.primary} 60%, ${colors.primaryComp});
    padding: 16px;
    margin-top: 80px;
    width: 100%;
`;

const HeroContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    max-width: 1080px;
    margin: auto;
    justify-content: center;
    align-items: center;
`;

const HeroLabel = styled.h3`
    text-align: center;
    color: ${colors.white};
    margin: 8px 0px;
`;

const HeroLeft = styled.div`
    flex: 1;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const HeroRight = styled.div`
    width: 272px;
`;

const HeroTitleContainer = styled.div`
    text-align: center;
    margin-bottom: 32px;
`;

const PremiumContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const PremiumContent = styled.div`
    flex: 1;
    margin-right: 32px;
`;

const PremiumList = styled.ul``;

const PremiumListItem = styled.li`
    color: ${colors.darkGray};
`;

const PremiumScreenshotContainer = styled.div`
    width: 240px;
    box-shadow: 0px 3px 6px rgb(87, 87, 87, 0.32);
    border: 4px solid ${colors.offWhite};
    border-radius: 13px;
    background-color: white;
    align-self: center;
`;

const PricingContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 260px;
    border: 2px solid ${colors.primaryComp};
    border-radius: 13px;
`;

const Pricing = styled.div`
    flex: 1;
    padding: 16px 0px;
    text-align: center;
    border-right: ${(props) => (props.borderRight ? `1px solid ${colors.primaryComp}` : 'none')};
`;

const Price = styled.h3`
    margin: 0px;
    color: ${colors.primaryComp};
`;

const Reason = styled.h3`
    margin: 0px;
    margin-bottom: 16px;
    color: ${colors.white};
    font-weight: normal;
    font-size: 18px;

    :before {
        content: '\u21d2';
        margin-right: 4px;
    }
`;

const ReasonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const ReasonTitleContainer = styled.div`
    border-bottom: 1px solid white;
    margin: 8px 0px 32px;
    padding: 0px 32px 4px;
`;

const ReasonsWrapper = styled.div``;

const ScreenshotContainer = styled.div`
    position: absolute;
    width: 70%;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0px 3px 6px rgb(87, 87, 87, 0.32);
`;

const ScreenshotDesc = styled.h3`
    color: ${colors.darkGray};
    margin: 0px;
    margin-top: 16px;
`;

const Section = styled.div`
    margin-top: ${(props) => (props.small ? '16px' : '64px')};
    background-color: ${(props) => props.backgroundColor};
    padding: 16px;
`;

const StatCitation = styled.p`
    color: ${colors.gray};
    font-size: 12px;
    align-self: center;
    margin-left: 4px;
`;

const StatContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    margin: 8px 16px;
`;

const StatDesc = styled.p`
    margin: 0px;
    color: ${colors.gray};
    font-size: 24px;
`;

const StatNumber = styled.p`
    font-size: 44px;
    font-weight: 800;
    margin: 0px;
    margin-right: 8px;
    color: ${colors.primaryComp};
`;

const StatsSource = styled.a`
    color: ${colors.gray};
    font-size: 12px;
    font-style: italic;
`;

const StatsSourceContainer = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    margin: 0px;
    font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '36px')};
`;

const TitleLight = styled.h1`
    margin: 0px;
    color: ${colors.white};
    font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '36px')};
`;

export default IndexPage;
