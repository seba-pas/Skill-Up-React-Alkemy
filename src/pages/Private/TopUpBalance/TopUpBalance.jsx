import React from 'react';
import { ContentTopUpBalance } from './TopUpBalance.style';

function TopUpBalance() {
    return (
        <ContentTopUpBalance>
            <span>
                <h3>Saldo Actual: </h3>$0
            </span>
            <span>
                <h3>Cargar Saldo:</h3>
            </span>
            <form action="">
                <input type="number" />
            </form>
        </ContentTopUpBalance>
    );
}

export default TopUpBalance;
