import { Pagination, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import Swal from 'sweetalert2';
import { useGetTransactionsQuery } from '../../../services/dataApi';
import { updatePage } from '../../../store/states/page';
import { ContentTransactions } from './transacctions.style';

export default function Transacciones() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const { data, isLoading, isError, error, isSuccess } = useGetTransactionsQuery(page);
    let content;

    if (isLoading) {
        dispatch(updatePage({ isLoading }));
        content = <p>No transactions</p>;
    }
    dispatch(updatePage({ isLoading }));

    if (isError) {
        return <p>{error}</p>;
    }

    function isBill(value) {
        if (value < 0) {
            return 'red';
        }
        return 'black';
    }
    function textShortener(value) {
        if (value !== null) {
            if (value.length > 15) {
                return `${value.slice(0, 15)} ...`;
            }
            return value;
        }
        return '';
    }
    function handlePage(e, value) {
        setPage(value);
    }
    if (isSuccess) {
        content = data.data.map((tr) => {
            return (
                <div className="transcard" key={tr.id}>
                    <span className="detail">{textShortener(tr.concept)}</span>
                    <span className="date">{new Date(tr.date).toLocaleString('es', 'AR')}</span>
                    <span className="price" style={{ color: isBill(tr.amount) }}>
                        ${tr.amount}
                    </span>
                </div>
            );
        });
    }

    return (
        <ContentTransactions className="transcontainer">
            <h2>Transactions</h2>
            {content}
            <Stack>
                {data && (
                    <Pagination
                        count={data.nextPage ? page + 1 : page}
                        page={page}
                        size="large"
                        onChange={(e, value) => handlePage(e, value)}
                        hideNextButton={data.nextPage === null}
                        hidePrevButton={data.previousPage === null}
                    />
                )}
            </Stack>
        </ContentTransactions>
    );
}
