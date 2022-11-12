import React from 'react';
import { useGetAccountQuery } from '../../../services/dataApi';
import { ContentTopUpBalance } from './TopUpBalance.style';

function TopUpBalance() {
    const { data, isLoading, isError, error } = useGetAccountQuery();

    if (isLoading) {
        return <p>Loading</p>;
    }

    if (isError) {
        return <p>{error}</p>;
    }

    console.log(data);

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
