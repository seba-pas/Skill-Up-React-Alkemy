import { Pagination, Stack } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { ContentTransactions } from './transacctions.style';

function Transacciones() {
    const token = localStorage.getItem('token');
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [disableNB, setDisableNB] = useState();
    const [disablePB, setDisablePB] = useState();
    const baseUrl = `http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions/?page=${page}`;
    useEffect(() => {
        axios
            .get(baseUrl, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => {
                setData(res.data.data);
                if (res.data.nextPage === null) {
                    setDisableNB(true);
                } else {
                    setDisableNB(false);
                }
                if (res.data.previousPage === null) {
                    setDisablePB(true);
                } else {
                    setDisablePB(false);
                }

                console.log(res.data);
            })
            .catch((err) => {
                Swal.fire('', err.message, 'error');
            });
        console.log(page);
    }, [page]);

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
    return (
        <ContentTransactions className="transcontainer">
            <h2>Transactions</h2>
            {data.map((tr) => {
                return (
                    <div className="transcard" key={tr.id}>
                        <span className="detail">{textShortener(tr.concept)}</span>
                        <span className="date">{new Date(tr.date).toLocaleString('es', 'AR')}</span>
                        <span className="price" style={{ color: isBill(tr.amount) }}>
                            ${tr.amount}
                        </span>
                    </div>
                );
            })}
            <Stack>
                <Pagination
                    count={page + 1}
                    page={page}
                    size="large"
                    onChange={(e, value) => handlePage(e, value)}
                    hideNextButton={disableNB}
                    hidePrevButton={disablePB}
                />
            </Stack>
        </ContentTransactions>
    );
}

export default Transacciones;
