import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { ContentTransactions } from './transacctions.style';

function Transacciones() {
    const token = localStorage.getItem('token');
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => {
                setData(res.data.data);
                console.log(data);
            })
            .catch((err) => {
                Swal.fire('', err, 'error');
            });
    }, []);
    // function isBill(value) {
    //     if (value < 0) {
    //         return 'red';
    //     }
    //     return 'black';
    // }
    return (
        <ContentTransactions className="transcontainer">
            <h2>Transactions</h2>
            {data.map((tr) => {
                return (
                    <div className="transcard" key={tr.id}>
                        <span className="detail">{tr.concept}</span>
                        <span className="date">{tr.date} </span>
                        <span className="price">${tr.amount} </span>
                    </div>
                );
            })}
        </ContentTransactions>
    );
}

export default Transacciones;
