import { Link } from 'react-router-dom';
import {
    CardSvg,
    CenterNavButtonSvg,
    ChartSvg,
    ContentAppBarMobile,
    ProfileSvg,
    TransferSvg
} from './Appbar.style';
import { PRIVATE } from '../../router/PathUrl';

function AppBarMobile() {
    return (
        <ContentAppBarMobile className="mobile-container">
            <Link className="NavButton" to={PRIVATE.topUpBalance}>
                <CardSvg />
            </Link>
            <Link className="NavButton" to={PRIVATE.transactions}>
                <TransferSvg />
            </Link>
            <Link className="centerNavButton" to={PRIVATE.home}>
                <div className="wrapper">
                    <CenterNavButtonSvg />
                </div>
            </Link>
            <Link className="NavButton" to={PRIVATE.balance}>
                <ChartSvg />
            </Link>
            <Link className="NavButton" to={PRIVATE.profile}>
                <ProfileSvg />
            </Link>
        </ContentAppBarMobile>
    );
}

export default AppBarMobile;
