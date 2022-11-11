import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ContentLastestTransactions } from './LastestTransactions.styles';
import { PRIVATE } from '../../../../../router/PathUrl';

function LastestTransactions() {
    const token = localStorage.getItem('token');
    const [data, setData] = useState();
    useEffect(() => {
        axios
            .get('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => {
                setData(res.data.data);
            })
            .catch((err) => {
                Swal.fire('', err, 'error');
            });
    }, []);
    function isBill(value) {
        if (value < 0) {
            return 'red';
        }
        return 'black';
    }

    return (
        <ContentLastestTransactions>
            <div className="top d-flex between">
                <h5 className="label">Lastest transactions</h5>
                <Link to={`${PRIVATE.root}/${PRIVATE.transactions}`}>
                    <h5 className="label">SEE ALL {'>'}</h5>
                </Link>
            </div>
            {data
                ? data.map((oneTransaction, index) => {
                      if (index < 5) {
                          return (
                              <div className="list-cards" key={oneTransaction.id}>
                                  <div className="card d-flex between">
                                      <div className="article">
                                          <h4 className="text">{oneTransaction.concept} </h4>
                                          <span className="date t-light">
                                              {oneTransaction.date}{' '}
                                          </span>
                                      </div>
                                      <div className="amount">
                                          <h4
                                              className="text"
                                              style={{ color: isBill(oneTransaction.amount) }}>
                                              {oneTransaction.amount}{' '}
                                          </h4>
                                      </div>
                                  </div>
                              </div>
                          );
                      }
                      return '';
                  })
                : ''}
        </ContentLastestTransactions>
    );
}

export default LastestTransactions;
