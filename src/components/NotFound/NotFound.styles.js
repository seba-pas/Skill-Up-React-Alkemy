import styled from 'styled-components';
import { theme } from '../../styles/Varibles';

export const ContentNotFound = styled.section`
    background: transparent;
    height: 100vh;
    img {
        width: 100%;
        height: 100%;
        z-index: -10;
        border-radius: 40px;
    }
    color: ${theme.colors.primary};
    }
    `;
export const LinkNotFound = styled.div`
    display: flex;
    justify-content: center;
    a {
        text-align: center;
        text-decoration: none;
        color: ${theme.colors.primary};
        height: 4rem;
        width: 20rem;
        background-color: ${theme.colors.overlay};
        border-radius: 20px;
        transition: ${theme.transition.default};
    }
    a:hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.overlay};
        transition: ${theme.transition.default};
    }
    button {
        font-size: 1.3rem;
    }
`;

// @media ${({ theme }) => theme.breakpoint.tablet}{
// aca va los ajustes de media query
