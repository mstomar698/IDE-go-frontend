import styled from "styled-components";

const Button = styled.button`
    position: relative;
    background-color: transparent;
    border: solid 1px ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.3rem;
    padding: 10px;
    z-index: 1;

    &:before {
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: ${({ theme }) => theme.colors.primary};
        position: absolute;
        z-index: -1;
        transform: scaleX(0);
        transform-origin: 0%;
        transition: transform ease-in-out 0.3s;
    }
    &:hover {
    &:before {
        transform: scaleX(1);
    }
    }

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`;

const View = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.drawerBackground};
`;

const Item = styled.a` 
    font-size: 1.3rem; 
    font-weight: bold;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.text}
`;

const Container = styled.div`
    width: 100%;
    height: inherit;
    position: relative;
    background-color: ${({theme}) => theme.colors.background};
`;

const Content = styled.div`
    width: 100%;
    height: max-content;
    padding: ${({theme}) => theme.defaults.spacing.paddingContent};
    background-color: ${({ theme }) => theme.colors.background};

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const Title = styled.h1`
    font-size: 4rem;
    font-family: bold;
    color: ${({colored, theme}) => colored ? theme.colors.primary : theme.colors.text};

    @media (max-width: 768px) {
        text-align: center;
        font-size: 2.3rem;    
    }
`;

const Subtitle = styled.h5`
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: 768px) {
        text-align: center;
        font-size: 1.3rem;    
    }
`;

const SessionTitle = styled.h1`
    font-size: 2rem;
    font-family: bold;
    color: ${({ theme }) => theme.colors.text};
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
    width: min-content;
    white-space: nowrap;

    @media (max-width: 768px) {
        text-align: start;
        font-size: 1.3rem;    
    }
`;

const Span = styled.span`
    font-size: 1.2rem;
    font-family: normal;
    color: ${({ theme }) => theme.colors.text};
    text-align: justify;

    @media (max-width: 768px) {
        font-size: 0.9rem;    
    }
`;

const Skills = styled.span`
    font-size: 1.2rem;
    font-family: bold;
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: 768px) {
        font-size: 0.9rem;    
    }
`;

const Link = styled.a`
    font-size: 1.3rem;
    border-bottom: 2px solid ${({theme}) => theme.colors.primary};
    width: min-content;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.text};
`;

const Text = {
    Title,
    Subtitle,
    SessionTitle,
    Span,
    Skills,
    Link
};


const MainStyle = {View, Item, Button, Container, Content, Text, Title, Link, Span, Skills, SessionTitle, Subtitle};

export default MainStyle;
