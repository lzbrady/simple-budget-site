import React from 'react';
import styled from 'styled-components';

import MainLayout from 'layouts/MainLayout';

import { colors } from 'BaseTheme';

export default function WhySimpleBudget({}) {
    return (
        <MainLayout>
            <Section>
                <Title>Why Simple Budget</Title>

                <BodyText>
                    We strive to deliver the highest possible return on investment to our users. While we're not an investment app, you do invest your time into your budget, and it should work for you
                    in return. To us, this means a few things.
                </BodyText>

                <Reason>
                    <ReasonTitle>Quick Onboarding</ReasonTitle>
                    <ReasonDesc>
                        We designed our onboarding process to be as quick and painless as possible. All you need is your phone number, and you can create an account. You'll see a few high level
                        overviews of how the app works, but we believe good design speaks for itself.
                    </ReasonDesc>
                </Reason>

                <Reason>
                    <ReasonTitle>Simple Transactions</ReasonTitle>
                    <ReasonDesc>
                        You'll be adding transactions a lot. Whether you like to add them while you're still in the checkout line, or wait for the comfort of your own place, you don't want to take a
                        full minute per transaction. Using Simple Budget is a quick and frustration-free user experience.
                    </ReasonDesc>
                </Reason>

                <Reason>
                    <ReasonTitle>Highly Customizable</ReasonTitle>
                    <ReasonDesc>
                        We know each budgeter is unique in the way they budget. Some people like to have a "Food" category, while others prefer a more granular experience. We try to allow for everyone
                        to customize their own budget experience, right down to the emojis you choose to represent your categories.
                    </ReasonDesc>
                </Reason>

                <Reason>
                    <ReasonTitle>Powerful Insights</ReasonTitle>
                    <ReasonDesc>Use our beautifully designed graphs and charts to gain a deeper understanding about your own spending habits. Upgrade to premium for even more insights!</ReasonDesc>
                </Reason>

                <Reason>
                    <ReasonTitle>Easily Digestible</ReasonTitle>
                    <ReasonDesc>
                        An app that works well is not always pleasant to use. We treat the design and user experience of Simple Budget with the same importance as the usability of it. Your budget is
                        something you'll be checking possibly several times a day. Shouldn't it be enjoyable to look at and use?
                    </ReasonDesc>
                </Reason>
            </Section>
        </MainLayout>
    );
}

const BodyText = styled.p`
    margin: 0px 0px 16px;
    display: inline-block;
`;

const Reason = styled.div`
    border-bottom: 1px solid ${colors.lightGray};
    padding: 16px 0px 32px;
`;

const ReasonTitle = styled.h1`
    margin: 16px 0px;
    font-size: 28px;
    color: ${colors.primaryComp};
`;

const ReasonDesc = styled.p`
    margin: 0px;
`;

const Section = styled.div`
    margin-top: 32px;
    padding: 16px;
`;

const Title = styled.h1`
    margin: 16px 0px 24px;
    text-align: center;
`;
