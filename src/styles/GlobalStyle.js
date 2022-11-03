import { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
    // global styles

    .custom-input {
        margin: 0 0 15px;
        transition: ${({ theme }) => theme.transition.default};
        .label {
            display: block;
            margin: 0 0 7px 5px;
            color: ${({ theme }) => theme.c_text.gray};
            font-size: 1.4rem;
            transition: inherit;
            &:is(.label .input:focus) {
                color: ${({ theme }) => theme.colors.primary};
            }
        }
        .input {
            border: 1px solid ${({ theme }) => theme.c_text.gray};
            padding: ${({ theme }) => theme.padding.input};
            background: transparent;
            display: block;
            width: 235px;
            transition: inherit;
            border-radius: ${({ theme }) => theme.rounded.s};
            
            &:focus {
                border-color: ${({ theme }) => theme.colors.primary};
            }

        }

        &:last-child {
            margin: 0;
        }
    }
`;
