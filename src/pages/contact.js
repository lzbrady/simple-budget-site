import React from 'react';
import styled from 'styled-components';

import MainLayout from 'layouts/MainLayout';
import Button from 'components/Button';

import { colors } from 'BaseTheme';

export default function Contact() {
    return (
        <MainLayout>
            <Container>
                <FormContainer>
                    <Title>Contact Us</Title>
                    <Note>Please note, if you're contacting us in regards to your account, providing your account phone number will help speed up the process.</Note>

                    <Form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="hidden" name="bot-field" />

                        <FormContent>
                            <InputGroup>
                                <StyledLabel>
                                    Name
                                    <StyledInput type="text" name="name" />
                                </StyledLabel>
                            </InputGroup>

                            <InputGroup>
                                <StyledLabel>
                                    Email
                                    <StyledInput type="email" name="email" />
                                </StyledLabel>
                            </InputGroup>

                            <InputGroup>
                                <StyledLabel>
                                    Message
                                    <StyledTextArea rows={7} type="text" name="message" />
                                </StyledLabel>
                            </InputGroup>

                            <SubmitButton>Submit</SubmitButton>
                        </FormContent>
                    </Form>
                </FormContainer>
            </Container>
        </MainLayout>
    );
}

const Container = styled.div`
    padding: 32px;
`;

const Form = styled((props) => <form {...props} />)``;

const FormContainer = styled.div`
    box-shadow: 0px 3px 6px rgb(87, 87, 87, 0.32);
    border-radius: 13px;
    padding: 20px;
    width: 80%;
    max-width: 560px;
    margin: auto;
    position: relative;
    z-index: 10;
`;

const FormContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    grid-gap: 20px;
    margin-top: 20px;
    flex-wrap: wrap;
`;

const Note = styled.p`
    text-align: center;
    font-size: 12px;
    color: ${colors.gray};
    margin: 8px 0px 16px;
`;

const StyledInput = styled((props) => <input {...props} />)`
    background-color: ${colors.offWhite};
    border: none;
    padding: 10px;
    border-radius: 8px;
    flex: 1;
    font-size: 14px;
    margin-top: 5px;
`;

const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    flex: 1;
    max-width: 100%;
`;

const StyledTextArea = styled((props) => <textarea {...props} />)`
    background-color: ${colors.offWhite};
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
    font-size: 14px;
    margin-top: 5px;
    resize: vertical;
`;

const SubmitButton = styled.button`
    background-color: ${colors.accent};
    color: ${colors.white};
    padding: 16px 32px;
    border-radius: 32px;
    text-decoration: none;
    margin: 40px auto 0px;
    border: none;
    font-size: 18px;

    :hover {
        cursor: pointer;
        background-color: ${colors.accentHover};
    }
`;

const Title = styled.h1`
    text-align: center;
    margin: 0px;
`;
