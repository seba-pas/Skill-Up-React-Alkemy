import styled from 'styled-components';
import { theme } from '../../../styles/Varibles';

export const ContentBills = styled.section`
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10rem;
    gap: 3rem;
    height: 100vh;
    margin: 40px 0 0 0;
    .top {
        margin: 0 0 20px;
        a .label {
            font-size: 1.2rem;
        }
    }
    .billSubmit {
        background-color: ${theme.colors.primary};
    }
    .billSubmit:hover {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
    }
    .billsForm {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .billsForm input {
        border-radius: 5px;
        font-size: 2rem;
        text-align: center;
    }
    .billsForm label {
        font-size: 2rem;
    }
`;
