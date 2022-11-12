import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ContentCashBalance } from './CashBalanace.styles';

import { PRIVATE } from '../../../../../router/PathUrl';

function CashBalance() {
    const token = localStorage.getItem('token');
    const [data, setData] = useState();
    useEffect(() => {
        axios
            .get('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/accounts/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => {
                setData(res.data[0].money);
            })
            .catch((err) => {
                Swal.fire('', err, 'error');
            });
    }, []);
    console.log(data);
    return (
        <ContentCashBalance>
            <div className="textos d-flex between f-14 fw-4 t-white">
                <span className="t-white">Saldo Actual</span>
                <Link to={`${PRIVATE.root}/${PRIVATE.balance}`}>+ balance</Link>
            </div>
            <span className="saldo f-28 fw-7 t-white">$ {data} </span>
        </ContentCashBalance>
    );
}

export default CashBalance;
