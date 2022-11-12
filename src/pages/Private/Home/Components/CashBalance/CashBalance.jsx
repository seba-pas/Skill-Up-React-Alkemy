// hooks
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// utils
import { PRIVATE } from '../../../../../router/PathUrl';
import { ContentCashBalance } from './CashBalanace.styles';

function CashBalance() {
    const UserState = useSelector((store) => store.user);

    return (
        <ContentCashBalance>
            <div className="textos d-flex between f-14 fw-4 t-white">
                <span className="t-white">Saldo Actual</span>
                <Link to={`${PRIVATE.root}/${PRIVATE.topUp}`}>+ balance</Link>
            </div>
            <span className="saldo f-28 fw-7 t-white">$ {UserState.money} </span>
        </ContentCashBalance>
    );
}

export default CashBalance;
