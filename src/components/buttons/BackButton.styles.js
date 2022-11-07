import styled from 'styled-components';

export const ContentBackButton = styled.button`
    height: 3rem;
    width: 4rem;
    background-color: transparent;
    border: none;
    @media screen and (min-width: 768px) {
        height: 2rem;
        width: 3rem;
        ::after {
            position: absolute;
            margin-left: 1rem;
            top: 8px;
            content: 'Atrás';
        }
    }
`;
