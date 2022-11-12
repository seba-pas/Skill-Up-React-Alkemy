import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useGetTransactionsQuery } from '../../../services/dataApi';
import { ContentTransactions } from './transacctions.style';

export default function Transacciones() {
    const [page, setPage] = useState(1);

    const { data, isLoading, isError, error } = useGetTransactionsQuery(page);

    if (isLoading) {
        return <p>Loading</p>;
    }

    const transactions = data.data;

    console.log(data, isLoading, isError, error);

    return (
        <>
            <ContentTransactions className="transcontainer">
                <h2>Transactions</h2>
                {transactions.map((e) => {
                    const mydate = new Date(e.date);
                    const year = mydate.getFullYear();
                    const month = mydate.getMonth();
                    const date = mydate.getDate();

                    return (
                        <div className="transcard" key={e.id}>
                            <span className="detail">{e.concept}</span>
                            <span className="date">
                                {year} - {month} - {date}
                            </span>
                            <span className="price">${e.amount}</span>
                        </div>
                    );
                })}
            </ContentTransactions>
            <ButtonGroup
                variant="contained"
                aria-label="primary button group"
                sx={{ display: 'flex', justifyContent: 'center', boxShadow: 'none', gap: '5px' }}>
                <Button
                    size="large"
                    sx={{ backgroundColor: '#133fdb', borderColor: 'transparent' }}
                    disabled={!data.previousPage}
                    onClick={() =>
                        setPage((prevState) => (data.previousPage ? prevState - 1 : prevState))
                    }>
                    Prev
                </Button>
                <Button
                    size="large"
                    sx={{
                        backgroundColor: '#133fdb',
                        borderColor: 'transparent'
                    }}
                    disabled={!data.nextPage}
                    onClick={() =>
                        setPage((prevState) => (data.nextPage ? prevState + 1 : prevState))
                    }>
                    Next
                </Button>
            </ButtonGroup>
        </>
    );
}
