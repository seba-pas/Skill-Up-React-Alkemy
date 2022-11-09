import React from 'react';
import { useGetTransactionsQuery } from '../../../services/dataApi';
import { ContentTransactions } from './transacctions.style';

export default function Transacciones() {
    const { data, isLoading, isError, error } = useGetTransactionsQuery();

    console.log(data, isLoading, isError, error);

    const dataA = [
        {
            id: 1,
            detail: 'Shopping',
            date: '20/10/2022',
            price: 85
        },
        {
            id: 2,
            detail: 'Ticket',
            date: '20/10/2022',
            price: 85
        },
        {
            id: 3,
            detail: 'Algo',
            date: '20/10/2022',
            price: 85
        }
    ];
    return (
        <ContentTransactions className="transcontainer">
            <h2>Transactions</h2>
            {dataA.map((e) => {
                return (
                    <div className="transcard" key={e.id}>
                        <span className="detail">{e.detail}</span>
                        <span className="date">{e.date}</span>
                        <span className="price">${e.price}</span>
                    </div>
                );
            })}
        </ContentTransactions>
    );
}
