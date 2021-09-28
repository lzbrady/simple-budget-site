import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import { colors } from 'BaseTheme';

export default function Footer() {
    return (
        <Container>
            <Links>
                <FooterLink to="/about">About</FooterLink>
                <FooterLink to="/why-simple-budget">Why Simple Budget</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
            </Links>

            <Trademark>© {new Date().getFullYear()} | Simple Budget</Trademark>

            <AppLinkContainer>
                <AppLink href="https://apps.apple.com/us/app/simple-budget-expense-tracker/id1560574926" target="_blank">
                    <StaticImage alt="Download on iOS" src="../../static/images/ios_download.png" height={44} />
                </AppLink>
                <AppLink href="https://play.google.com/store/apps/details?id=com.pgmediasolutions.simplebudget" target="_blank">
                    <StaticImage alt="Download on Android" src="../../static/images/android_download.png" height={44} />
                </AppLink>
            </AppLinkContainer>
        </Container>
    );
}

const AppLink = styled.a`
    margin: 0px 8px;
`;

const AppLinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 32px;
`;

const Links = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin: 8px;
`;

const Container = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    background-color: ${colors.offWhite};
`;

const FooterLink = styled((props) => <Link {...props} />)`
    text-decoration: none;
    text-decoration: none;
    margin: 0px 8px;
    padding: 4px 8px;
    text-align: center;
    color: ${colors.accent};

    :hover {
        cursor: pointer;
        color: ${colors.accentHover};
        text-decoration: underline;
    }
`;

const Trademark = styled.p`
    text-align: center;
    color: ${colors.gray};
    margin: 16px;
`;
