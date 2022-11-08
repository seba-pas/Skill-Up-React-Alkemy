import React from 'react';
import { Link } from 'react-router-dom';
import { ContentCashBalance } from './CashBalanace.styles';

import { PRIVATE } from '../../../../../router/PathUrl';

function CashBalance() {
    return (
        <ContentCashBalance>
            <div className="textos d-flex between f-14 fw-4 t-white">
                <span className="t-white">Saldo Actual</span>
                <Link to={`${PRIVATE.root}/${PRIVATE.balance}`}>+ balance</Link>
            </div>
            <span className="saldo f-28 fw-7 t-white">$ 125.245</span>
        </ContentCashBalance>
    );
}

export default CashBalance;
