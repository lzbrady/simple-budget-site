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
                                    <StyledTextArea type="text" name="message" />
                                </StyledLabel>
                            </InputGroup>

                            <Button rows={7} text="Submit" style={{ margin: '40px auto 0px' }} />
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

const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    grid-gap: 20px;
    margin-top: 20px;
    flex-wrap: wrap;
`;
