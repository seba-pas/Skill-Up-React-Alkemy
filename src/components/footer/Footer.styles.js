import styled from 'styled-components';

export const ContentFooter = styled.section`
    .toolbarFooter {
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        gap: 3vw;
    }

    .chipFooter {
        width: 40vw;
        height: 50px;
        font-size: 1.2rem !important;
        color: white !important;
    }

    @media screen and (max-width: 767px) {
        .chipFooter {
            font-size: 0.9rem !important;
            width: 60vw !important;
        }
        display: none;
    }
`;
