import styled from 'styled-components';

export const ContentTopUpBalance = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10rem;
    gap: 3rem;
    .backButtonContainer {
        position: absolute;
        top: 10px;
        left: 0;
    }
    .topUpForm {
        gap: 3rem;
    }
    @media screen and (min-width: 768px) {
        .backButtonContainer {
            top: 80%;
            left: 47%;
        }
    }
`;
