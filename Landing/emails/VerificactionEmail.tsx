// VerificationEmail.tsx
import * as React from 'react';
import {
    Html,
    Head,
    Preview,
    Body,
    Container,
    Section,
    Text,
    Button,
    Hr,
} from '@react-email/components';

interface VerificationEmailProps {
    userName?: string;
    otp: string;
}

export const VerificationEmail = ({
    userName,
    otp,
}: VerificationEmailProps) => {
    return (
        <Html>
            <Head />
            <title>Verification Code</title>
            <Preview>Here is your verification code: {otp} </Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={logoSection}>
                        <Text style={logoText}>MyApp</Text>
                    </Section>
                    <Text style={heading}>Hi {userName},</Text>
                    <Text style={paragraph}>
                        If you did not create an account, no further action is required.
                    </Text>
                    <Hr style={hr} />
                    <Text style={footer}>
                        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

// Styles
const main = {
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '40px auto',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '600px',
};

const logoSection = {
    textAlign: 'center' as const,
    marginBottom: '20px',
};

const logoText = {
    fontSize: '24px',
    fontWeight: 'bold' as const,
    color: '#333333',
};

const heading = {
    fontSize: '20px',
    fontWeight: 'bold' as const,
    color: '#333333',
};

const paragraph = {
    fontSize: '16px',
    color: '#555555',
    lineHeight: '1.5',
};

const buttonContainer = {
    textAlign: 'center' as const,
    margin: '30px 0',
};

const button = {
    backgroundColor: '#007BFF',
    color: '#ffffff',
    padding: '12px 24px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold' as const,
};

const hr = {
    border: 'none',
    borderTop: '1px solid #dddddd',
    margin: '20px 0',
};

const footer = {
    fontSize: '12px',
    color: '#999999',
    textAlign: 'center' as const,
};
