import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import MainLayout from 'layouts/MainLayout';

import { colors } from 'BaseTheme';

export default function About({}) {
    return (
        <MainLayout
            HeroComponent={
                <HeroHeader>
                    <HeroHeaderBG />
                    <StaticImage alt="About Us" src="../../static/images/about.jpg" layout="fullWidth" height={128} />

                    <HeroContentContainer>
                        <HeroTitle>About Simple Budget</HeroTitle>
                        <HeroSubtitle>(Founder Luke hiking in the Blue Ridge Mountains)</HeroSubtitle>
                    </HeroContentContainer>
                </HeroHeader>
            }
        >
            <Section>
                <Row>
                    <div>
                        <StaticImage alt="App Screenshot One" src="../../static/images/Pancakes.png" width={240} />
                        <Caption>Pancakes working on an early iteration</Caption>
                    </div>

                    <Content>
                        <BodyText>
                            Simple Budget was created with a single purpose, as a way to track spending habits. Whether or not we like to admit it, money affects our past, present, and future. Using
                            Simple Budget ensures you have visibility into your past spending habits, clarity on the money you currently have, and peace of mind knowing exactly how your future
                            finances will look.
                        </BodyText>
                        <BodyText>
                            My name is Luke, and I am the sole creator of Simple Budget. When searching for a budget tool, I was intrigued by apps that could automatically link to my bank accounts and
                            tell me about my spending habits. The problem was, once I actually connected everything, it was so automated that I never felt compelled to go in and check on things. So
                            although these apps had potential, it was the app that was gaining insights into my spending, not me.
                        </BodyText>
                        <BodyText>
                            I wanted to manually enter all of my transactions, as a way to ensure I was on top of my spending. Simple Budget started out as a spreadsheet to allow me this level of
                            control. This eventually evolved into a full fledged app as my budgeting ambitions grew. Today, these ambitions haven't slowed, as new features continue to be added.
                        </BodyText>
                    </Content>
                </Row>

                <Subtitle>The Real Inspiration</Subtitle>
                <BodyText>
                    While having full transparency into spending habits is the focus of Simple Budget, the real inspiration comes from things money can't buy. It's unfortunate that money drives so
                    many of our decisions, but it is not free to live. However, we get so caught up in our job, and setting ourselves up for the next goal in life, and we forget about what we truly
                    want to do with our lives. Would you be doing the same job if you never had to worry about money again? Would you travel? Would you spend more time with your family? The real
                    inspiration behind Simple Budget is getting people in a place where money does not limit our lives, and we're free to focus on what really matters to us.
                </BodyText>
            </Section>

            <Section>
                <Title>The Team</Title>
                <BodyText>
                    Today, Simple Budget is supported by a small, highly efficient, and caring team. Our slim size allows us to move fast and not get bogged down by bureaucratic BS. Instead, we get to
                    focus on innovative ideas and improving the app based on actual user feedback, not what corporate thinks would be best (there is no corporate!). We love our users, and look forward
                    to hearing more stories of how Simple Budget has helped, as well we new ideas on how it can help even more.
                </BodyText>
            </Section>
        </MainLayout>
    );
}

const BodyText = styled.p`
    margin: 0px 0px 16px;
    display: inline-block;
`;

const Caption = styled.p`
    margin: 0px;
    color: ${colors.gray};
    font-size: 12px;
    text-align: center;
`;

const Content = styled.div`
    flex: 1;
    margin-left: 32px;
`;

const HeroHeaderBG = styled.div`
    position: absolute;
    width: 100%;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background-color: ${colors.gray};
    z-index: 10;
    opacity: 0.25;
`;

const HeroContentContainer = styled.div`
    position: absolute;
    left: 0px;
    bottom: 0%;
    right: 0px;
    width: 100%;
    text-align: center;
    background: linear-gradient(0deg, rgb(252, 255, 251) 0%, rgb(252, 255, 251, 75%) 60%, rgb(252, 255, 251, 0%));
    opacity: 1;
    z-index: 20;
    padding-top: 32px;
`;

const HeroHeader = styled.div`
    margin-top: 80px;
    width: 100%;
    position: relative;
`;

const HeroSubtitle = styled.p`
    margin: 0px;
    color: ${colors.gray};
    font-size: 14px;
`;

const HeroTitle = styled.h1`
    margin: 32px 0px 8px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
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
