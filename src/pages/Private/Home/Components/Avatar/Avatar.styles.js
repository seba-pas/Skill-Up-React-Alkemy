import styled from 'styled-components';

export const ContentAvartarUser = styled.div.attrs({
    className: 'd-flex'
})`
    flex-direction: row;
    position: relative;
    margin: 0 0 25px 0;

    .avatar-user {
        width: 67px;
        height: 67px;
        position: relative;
        border-radius: ${({ theme }) => theme.rounded[50]};
        background: transparent;
        padding: 6px;
        &:before {
            content: '';
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${({ theme }) => theme.colors.gradient};
            border-radius: ${({ theme }) => theme.rounded[50]};
        }
        &:after {
            content: '';
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${({ theme }) => theme.colors.white};
            border-radius: ${({ theme }) => theme.rounded[50]};
            margin: 3px;
        }
        img {
            border-radius: ${({ theme }) => theme.rounded[50]};
            width: 100%;
        }
    }

    .greet {
        font-style: normal;
        line-height: 19px;
        letter-spacing: 0.02em;
        color: #212121;
    }

    .avatar_name {
        line-height: 28px;
        letter-spacing: 0.02em;
        color: #212121;
    }

    .greetings {
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-left: 15px;
        margin-top: 5px;
    }
`;
