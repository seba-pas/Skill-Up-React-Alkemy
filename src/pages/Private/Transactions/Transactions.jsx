import { FormControl } from '@mui/material';
import React from 'react';
import { ContentTransactions } from './transacctions.style';

function Transacciones() {
    const data = [
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
            <div className="newTransactionForm">
                <h3>New Transaction:</h3>
                <FormControl>
                    <label htmlFor="userList">Seleccionar un usuario:</label>
                    <select name="userList" id="" />
                    <label htmlFor="amount">Ingrese un monto:</label>
                    <input type="number" name="amount" />
                </FormControl>
            </div>

            {data.map((e) => {
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

export default Transacciones;
