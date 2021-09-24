import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { colors } from 'BaseTheme';

export default function Button({ inverse, style, text, to }) {
    return (
        <StyledButton inverse={inverse} style={style} to={to}>
            {text}
        </StyledButton>
    );
}

const StyledButton = styled((props) => <Link {...props} />)`
    background-color: ${(props) => (props.inverse ? colors.white : colors.accent)};
    color: ${(props) => (props.inverse ? colors.accent : colors.white)};
    padding: 16px 32px;
    border-radius: 32px;
    text-decoration: none;

    :hover {
        cursor: pointer;
        background-color: ${(props) => (props.inverse ? colors.offWhite : colors.accentHover)};
    }
`;
