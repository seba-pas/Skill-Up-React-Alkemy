import { Pagination, Stack } from '@mui/material';
// import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import Swal from 'sweetalert2';
import { useGetAccountQuery } from '../../../services/dataApi';
import { updatePage } from '../../../store/states/page';
import { ContentTransactions } from './transacctions.style';

export default function Transacciones() {
    const dispatch = useDispatch();
    // const token = localStorage.getItem('token');
    // const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    // const [disableNB, setDisableNB] = useState();
    // const [disablePB, setDisablePB] = useState();
    // const [isLoading, setIsLoading] = useState(true);
    const { data, isLoading, isError, error } = useGetAccountQuery();
    let content;

    if (isLoading) {
        dispatch(updatePage({ isLoading }));
        content = <p>No transactions</p>;
    }
    dispatch(updatePage({ isLoading }));

    if (isError) {
        return <p>{error}F</p>;
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

    content = data.map((tr) => {
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

    return (
        <ContentTransactions className="transcontainer">
            <h2>Transactions</h2>
            {content}
            <Stack>
                <Pagination
                    count={page + 1}
                    page={page}
                    size="large"
                    onChange={(e, value) => handlePage(e, value)}
                    hideNextButton={data.nextPage === null}
                    hidePrevButton={data.previousPage === null}
                />
            </Stack>
        </ContentTransactions>
    );
}
