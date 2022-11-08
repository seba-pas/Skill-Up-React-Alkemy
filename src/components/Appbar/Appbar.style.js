import styled from 'styled-components';

export const ContentAppBarMobile = styled.div.attrs({
    className: 'd-flex center'
})`
    position: fixed;
    gap: 40px;
    width: 100vw;
    height: 50px;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.c_text.white};
    /* nav-shadow- */
    box-shadow: ${({ theme }) => theme.shadow.nav};

    .centerNavButton .wrapper {
        position: relative;
        width: 60px;
        height: 60px;
        top: -25px;
        background: ${({ theme }) => theme.c_text.white};
        display: flex;
        justify-content: center;
        padding: 10px;
        /* nav-shadow- */
        box-shadow: ${({ theme }) => theme.shadow.nav};
        border-radius: ${({ theme }) => theme.rounded[50]};
    }
    @media ${({ theme }) => theme.breakpoints.tablet} {
        display: none;
    }
`;

export const ContentAppBar = styled.div`
    display: none;
    .navBarDesktop {
        z-index: 100;
    }
    @media ${({ theme }) => theme.breakpoints.tablet} {
        display: block;
    }
`;

export function TransferSvg() {
    return (
        <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.3186 0.161914L0.568646 9.23223C-0.239948 9.68926 -0.169636 10.8846 0.674114 11.2361L5.63115 13.2752V16.8611C5.63115 17.951 6.93193 18.408 7.5999 17.5994L9.74443 14.9979L14.1741 16.826C14.8421 17.1072 15.6155 16.6854 15.721 15.9471L17.971 1.28691C18.1116 0.372852 17.1272 -0.330273 16.3186 0.161914ZM6.75615 16.8611V13.7674L8.65458 14.5408L6.75615 16.8611ZM14.6311 15.8064L7.3538 12.783L14.3851 4.52129C14.5608 4.31035 14.2796 4.0291 14.0686 4.20488L5.1038 11.8689L1.13115 10.2166L16.8811 1.11113L14.6311 15.8064Z"
                fill="#818181"
            />
        </svg>
    );
}

export function CenterNavButtonSvg() {
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.1032 27.8342C31.4946 20.5437 29.862 14.2645 27.6799 9.81239C25.2409 4.83596 22.6325 3.06686 20.6851 3.06686C18.7377 3.06686 16.1292 4.83596 13.6902 9.81239C11.5082 14.2646 9.87547 20.5437 9.26687 27.8342C12.7762 26.2683 16.6374 25.4028 20.6851 25.4028C24.7328 25.4028 28.594 26.2683 32.1032 27.8342ZM32.0561 31.1794C33.4758 31.8962 35.2454 30.8647 35.1437 29.219C34.1223 12.6954 28.038 0 20.6851 0C13.3322 0 7.24789 12.6954 6.22642 29.219C6.12469 30.8648 7.89426 31.8962 9.31404 31.1794C12.7532 29.4429 16.6105 28.4696 20.6851 28.4696C24.7597 28.4696 28.617 29.4429 32.0561 31.1794Z"
                fill="#212121"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.10717 35.3567C4.10986 35.3921 4.14707 35.8317 5.48448 36.3796C6.53842 36.8115 7.04568 36.7437 7.23495 36.666C7.35454 36.6168 7.53229 36.4878 7.63252 35.983C7.73629 35.4604 7.70897 34.7094 7.51946 33.7944C7.42154 33.3217 7.2847 32.8261 7.11525 32.3245C7.05614 32.365 6.99799 32.4049 6.94209 32.4435C6.23553 32.9323 5.45413 33.5095 4.86931 34.1108C4.22833 34.7698 4.09401 35.1835 4.10717 35.3567ZM6.71843 29.7538C6.67467 29.7867 6.61516 29.8297 6.53645 29.8847C6.40829 29.9744 6.28013 30.0613 6.13391 30.1604C5.98753 30.2597 5.82307 30.3712 5.62239 30.51C4.89992 31.0097 3.95796 31.6945 3.20412 32.4696C2.50645 33.1868 1.68685 34.2637 1.7835 35.5356C1.89063 36.9454 3.02699 37.9056 4.60595 38.5525C5.88512 39.0766 7.09613 39.2566 8.11523 38.8381C9.20399 38.391 9.72467 37.4154 9.9178 36.4428C10.1074 35.4879 10.0231 34.3884 9.80082 33.3156C9.57523 32.2264 9.19018 31.0825 8.70723 30.003L7.77304 27.915L6.71843 29.7538Z"
                fill="#212121"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M36.438 35.3567C36.4353 35.3921 36.3981 35.8317 35.0606 36.3796C34.0067 36.8115 33.4994 36.7437 33.3102 36.666C33.1906 36.6168 33.0129 36.4878 32.9126 35.983C32.8089 35.4604 32.8362 34.7094 33.0257 33.7944C33.1236 33.3217 33.2604 32.8261 33.4299 32.3245C33.489 32.365 33.5471 32.4049 33.603 32.4435C34.3096 32.9323 35.091 33.5095 35.6758 34.1108C36.3168 34.7698 36.4511 35.1835 36.438 35.3567ZM33.8267 29.7538C33.8704 29.7867 33.93 29.8297 34.0087 29.8847C34.1369 29.9744 34.265 30.0613 34.4112 30.1604C34.5576 30.2597 34.7221 30.3712 34.9227 30.51C35.6452 31.0097 36.5872 31.6945 37.341 32.4696C38.0387 33.1868 38.8583 34.2637 38.7616 35.5356C38.6545 36.9454 37.5181 37.9056 35.9392 38.5525C34.66 39.0766 33.449 39.2566 32.4299 38.8381C31.3412 38.391 30.8205 37.4154 30.6273 36.4428C30.4378 35.4879 30.5221 34.3884 30.7443 33.3156C30.9699 32.2264 31.3549 31.0825 31.8379 30.003L32.7721 27.915L33.8267 29.7538Z"
                fill="#212121"
            />
        </svg>
    );
}

export function ChartSvg() {
    return (
        <svg
            width="21"
            height="18"
            viewBox="0 0 21 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2.8125 12.375H0.5625C0.246094 12.375 0 12.6562 0 12.9375V17.4375C0 17.7539 0.246094 18 0.5625 18H2.8125C3.09375 18 3.375 17.7539 3.375 17.4375V12.9375C3.375 12.6562 3.09375 12.375 2.8125 12.375ZM2.25 16.875H1.125V13.5H2.25V16.875ZM19.6875 6.75H17.4375C17.1211 6.75 16.875 7.03125 16.875 7.3125V17.4375C16.875 17.7539 17.1211 18 17.4375 18H19.6875C19.9688 18 20.25 17.7539 20.25 17.4375V7.3125C20.25 7.03125 19.9688 6.75 19.6875 6.75ZM19.125 16.875H18V7.875H19.125V16.875ZM17.6484 3.12891C17.9297 3.30469 18.2109 3.375 18.5625 3.375C19.4766 3.375 20.25 2.63672 20.25 1.6875C20.25 0.773438 19.4766 0 18.5625 0C17.6133 0 16.875 0.773438 16.875 1.6875C16.875 1.89844 16.9102 2.07422 16.9453 2.25L13.8164 4.78125C13.5352 4.60547 13.2539 4.5 12.9375 4.5C12.5859 4.5 12.3047 4.60547 12.0234 4.78125L8.89453 2.25C8.92969 2.07422 9 1.89844 9 1.6875C9 0.773438 8.22656 0 7.3125 0C6.36328 0 5.625 0.773438 5.625 1.6875C5.625 1.96875 5.66016 2.21484 5.76562 2.42578L2.39062 5.80078C2.17969 5.69531 1.93359 5.625 1.6875 5.625C0.738281 5.625 0 6.39844 0 7.3125C0 8.26172 0.738281 9 1.6875 9C2.60156 9 3.375 8.26172 3.375 7.3125C3.375 7.06641 3.30469 6.82031 3.19922 6.60938L6.57422 3.23438C6.78516 3.33984 7.03125 3.375 7.3125 3.375C7.62891 3.375 7.91016 3.30469 8.19141 3.12891L11.3203 5.66016C11.2852 5.83594 11.25 6.01172 11.25 6.1875C11.25 7.13672 11.9883 7.875 12.9375 7.875C13.8516 7.875 14.625 7.13672 14.625 6.1875C14.625 6.01172 14.5547 5.83594 14.5195 5.66016L17.6484 3.12891ZM18.5625 1.125C18.8438 1.125 19.125 1.40625 19.125 1.6875C19.125 2.00391 18.8438 2.25 18.5625 2.25C18.2461 2.25 18 2.00391 18 1.6875C18 1.40625 18.2461 1.125 18.5625 1.125ZM1.6875 7.875C1.37109 7.875 1.125 7.62891 1.125 7.3125C1.125 7.03125 1.37109 6.75 1.6875 6.75C1.96875 6.75 2.25 7.03125 2.25 7.3125C2.25 7.62891 1.96875 7.875 1.6875 7.875ZM7.3125 2.25C6.99609 2.25 6.75 2.00391 6.75 1.6875C6.75 1.40625 6.99609 1.125 7.3125 1.125C7.59375 1.125 7.875 1.40625 7.875 1.6875C7.875 2.00391 7.59375 2.25 7.3125 2.25ZM12.9375 6.75C12.6211 6.75 12.375 6.50391 12.375 6.1875C12.375 5.90625 12.6211 5.625 12.9375 5.625C13.2188 5.625 13.5 5.90625 13.5 6.1875C13.5 6.50391 13.2188 6.75 12.9375 6.75ZM8.4375 6.75H6.1875C5.87109 6.75 5.625 7.03125 5.625 7.3125V17.4375C5.625 17.7539 5.87109 18 6.1875 18H8.4375C8.71875 18 9 17.7539 9 17.4375V7.3125C9 7.03125 8.71875 6.75 8.4375 6.75ZM7.875 16.875H6.75V7.875H7.875V16.875ZM14.0625 11.25H11.8125C11.4961 11.25 11.25 11.5312 11.25 11.8125V17.4375C11.25 17.7539 11.4961 18 11.8125 18H14.0625C14.3438 18 14.625 17.7539 14.625 17.4375V11.8125C14.625 11.5312 14.3438 11.25 14.0625 11.25ZM13.5 16.875H12.375V12.375H13.5V16.875Z"
                fill="#818181"
            />
        </svg>
    );
}

export function CardSvg() {
    return (
        <svg
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 14.0625C0 15.0117 0.738281 15.75 1.6875 15.75H18.5625C19.4766 15.75 20.25 15.0117 20.25 14.0625V7.875H0V14.0625ZM6.75 11.6719C6.75 11.4609 6.92578 11.25 7.17188 11.25H11.9531C12.1641 11.25 12.375 11.4609 12.375 11.6719V13.0781C12.375 13.3242 12.1641 13.5 11.9531 13.5H7.17188C6.92578 13.5 6.75 13.3242 6.75 13.0781V11.6719ZM2.25 11.6719C2.25 11.4609 2.42578 11.25 2.67188 11.25H5.20312C5.41406 11.25 5.625 11.4609 5.625 11.6719V13.0781C5.625 13.3242 5.41406 13.5 5.20312 13.5H2.67188C2.42578 13.5 2.25 13.3242 2.25 13.0781V11.6719ZM20.25 1.6875C20.25 0.773438 19.4766 0 18.5625 0H1.6875C0.738281 0 0 0.773438 0 1.6875V3.375H20.25V1.6875Z"
                fill="url(#paint0_linear_54_21)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_54_21"
                    x1="0"
                    y1="0"
                    x2="22.1458"
                    y2="1.72202"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#133FDB" />
                    <stop offset="1" stopColor="#B7004D" stopOpacity="0.7" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function ProfileSvg() {
    return (
        <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9 0C8.01109 0 7.04439 0.293245 6.22215 0.842652C5.3999 1.39206 4.75904 2.17295 4.3806 3.08658C4.00216 4.00021 3.90315 5.00555 4.09607 5.97545C4.289 6.94536 4.7652 7.83627 5.46447 8.53553C6.16373 9.2348 7.05464 9.711 8.02455 9.90393C8.99445 10.0969 9.99979 9.99784 10.9134 9.6194C11.827 9.24096 12.6079 8.6001 13.1573 7.77785C13.7068 6.95561 14 5.98891 14 5C14 3.67392 13.4732 2.40215 12.5355 1.46447C11.5979 0.526784 10.3261 0 9 0ZM9 8C8.40666 8 7.82664 7.82405 7.33329 7.49441C6.83994 7.16476 6.45542 6.69623 6.22836 6.14805C6.0013 5.59987 5.94189 4.99667 6.05764 4.41473C6.1734 3.83279 6.45912 3.29824 6.87868 2.87868C7.29824 2.45912 7.83279 2.1734 8.41473 2.05764C8.99667 1.94189 9.59987 2.0013 10.1481 2.22836C10.6962 2.45542 11.1648 2.83994 11.4944 3.33329C11.8241 3.82664 12 4.40666 12 5C12 5.79565 11.6839 6.55871 11.1213 7.12132C10.5587 7.68393 9.79565 8 9 8ZM18 19V18C18 16.1435 17.2625 14.363 15.9497 13.0503C14.637 11.7375 12.8565 11 11 11H7C5.14348 11 3.36301 11.7375 2.05025 13.0503C0.737498 14.363 0 16.1435 0 18V19H2V18C2 16.6739 2.52678 15.4021 3.46447 14.4645C4.40215 13.5268 5.67392 13 7 13H11C12.3261 13 13.5979 13.5268 14.5355 14.4645C15.4732 15.4021 16 16.6739 16 18V19H18Z"
                fill="#858585"
            />
        </svg>
    );
}
