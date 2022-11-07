import styled from 'styled-components';

export const ContentTopUpBalance = styled.section`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10rem;
    gap: 3rem;
    background: #fefefe;
    height: 100vh;
    .backButtonContainer {
        position: absolute;
        top: 10px;
        left: 0;
    }
    .topUpForm {
        gap: 3rem;
        font-family: 'Rubik';
        font-style: normal;
        font-size: 1.5rem;
    }
    @media screen and (min-width: 768px) {
        .backButtonContainer {
            top: 80%;
            left: 47%;
        }
    }
`;
