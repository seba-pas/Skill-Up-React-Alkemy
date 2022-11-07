import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
    // global styles

    /* class */
    .d-flex {
        display: flex;
    }
    .d-flex.center {
        justify-content: center;
        align-items: center;
    }

    .no-scroll {
        overflow: hidden;
        max-height: 100vh;
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



`;
