import styled from 'styled-components';

export const ContentTransactions = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    gap: 2rem;
    .transcontainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }

    .transcard {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-self: center;
        gap: 2rem;
        padding: 16px;
        margin-bottom: 20px;
        width: 70vw;
        height: 50px;
        background: #ffffff;
        border-radius: 16px;
    }

    .detail {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */

        /* text */

        color: #333333;
    }

    .date {
        font-family: 'Rubik';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        letter-spacing: 0.02em;

        color: #858585;
    }

    .price {
        width: 54px;
        height: 19px;

        font-family: 'Rubik';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        /* identical to box height */

        /* text */

        color: #333333;

        /* Inside auto layout */

        flex: none;
        order: 1;
        flex-grow: 0;
    }
    .newTransactionForm {
        display: flex;
        flex-direction: column;
        margin-bottom: 5rem;
    }
`;
