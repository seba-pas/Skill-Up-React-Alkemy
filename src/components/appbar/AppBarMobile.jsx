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
            <Link className="NavButton" to={PRIVATE.cargarSaldo}>
                <CardSvg />
            </Link>
            <Link className="NavButton" to={PRIVATE.cargarSaldo}>
                <TransferSvg />
            </Link>
            <Link className="centerNavButton" to={PRIVATE.cargarSaldo}>
                <div className="wrapper">
                    <CenterNavButtonSvg />
                </div>
            </Link>
            <Link className="NavButton" to={PRIVATE.cargarSaldo}>
                <ChartSvg />
            </Link>
            <Link className="NavButton" to={PRIVATE.cargarSaldo}>
                <ProfileSvg />
            </Link>
        </ContentAppBarMobile>
    );
}

export default AppBarMobile;
