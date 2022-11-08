import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
    // global styles
    body {
        background: ${({ theme }) => theme.colors.white};
    }
    #root {
        position: relative;
        min-height: 100vh;
        @media ${({ theme }) => theme.breakpoints.mobileM}{
            padding: ${({ theme }) => theme.padding.layoutMobile};
        }
        @media ${({ theme }) => theme.breakpoints.tablet}{
            padding: ${({ theme }) => theme.padding.layoutDesktop};
        }
        @media ${({ theme }) => theme.breakpoints.laptop}{
            padding: ${({ theme }) => theme.padding.layoutDesktop};
        }
        
    }

    #notistack-snackbar {
        font-size: 1.2rem;
    }
    /* class */
    .d-flex {
        display: flex;
    }
    .d-flex.center {
        justify-content: center;
        align-items: center;
    }
    .d-flex.between {
        justify-content: space-between;
        align-items: center;
    }

    .no-scroll {
        overflow: hidden;
        max-height: 100vh;
    }

    /* font weight*/
    .fw-3{
        font-weight: 300;
    }
    .fw-4{
        font-weight: 400;
    }
    .fw-5{
        font-weight: 500;
    }
    .fw-7{
        font-weight: 700;
    }
    /* font-size */
    .f-14 {
        font-size: 1.4rem;
    }
    .f-16 {
        font-size: 1.6rem;
    }
    .f-18 {
        font-size: 1.8rem;
    }
    .f-24 {
        font-size: 2.4rem;
    }
    .f-28 {
        font-size: 2.8rem;
    }
    /* color text */
    .t-white {
        color: ${({ theme }) => theme.c_text.white};
    }
    .c-primary {
        color: ${({ theme }) => theme.colors.primary};
    }


    .t-center {
        text-align: center;
    }

    h5.label {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.c_text.gray};
        text-transform: uppercase;
    }

    .text {
        font-size: 1.6rem;
        font-weight: 500;
    }

    .t-light {
        font-size: 1.2rem;
        font-weight: 300;
        color: ${({ theme }) => theme.c_text.gray}
    }

    /* components */
    .btn {
        border-radius: ${({ theme }) => theme.rounded.s};
        text-align: center;
        color: ${({ theme }) => theme.c_text.white};
        font-weight: 600;
        width: 235px;
        margin: 0 auto;
        line-height: 40px;
        display: block;
        text-transform: uppercase;
        transition: ${({ theme }) => theme.transition.default};
        cursor: pointer;
        &:hover {
            background: ${({ theme }) => theme.colors.h_primary};
        }
        &:disabled {
            background: ${({ theme }) => theme.c_text.gray};
        }
    }

    .primary {
        background: ${({ theme }) => theme.colors.primary};
    }

    .card {
        background: ${({ theme }) => theme.c_text.white};
        border-radius: ${({ theme }) => theme.rounded.l};
        padding: 16px;
        margin: 0 0 15px 0;
        box-shadow: ${({ theme }) => theme.shadow.box};

        &last-child {
            margin: 0;
        }
    }


`;
