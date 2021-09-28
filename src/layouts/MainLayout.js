import React from 'react';
import styled from 'styled-components';

import Footer from 'components/Footer';
import Header from 'components/Header';

import { colors } from 'BaseTheme';

import 'layouts/MainLayout.css';

export default function MainLayout({ children, HeroComponent }) {
    return (
        <Container>
            <Header />
            {HeroComponent}
            <ContentContainer addPadding={!HeroComponent}>{children}</ContentContainer>
            <Footer />
        </Container>
    );
}

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.white};
    font-family: 'Open Sans';
`;

const ContentContainer = styled.main`
    background-color: ${colors.white};
    padding-top: ${(props) => (props.addPadding ? '80px' : '0px')};
    padding-bottom: 40px;
    max-width: 960px;
    flex: 1;
    width: 100%;
`;
