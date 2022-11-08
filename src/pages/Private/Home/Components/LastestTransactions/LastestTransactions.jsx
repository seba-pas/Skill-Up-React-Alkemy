import React from 'react';
import { Link } from 'react-router-dom';
import { ContentLastestTransactions } from './LastestTransactions.styles';
import { PRIVATE } from '../../../../../router/PathUrl';

function LastestTransactions() {
    return (
        <ContentLastestTransactions>
            <div className="top d-flex between">
                <h5 className="label">Lastest transactions</h5>
                <Link to={`${PRIVATE.root}/${PRIVATE.transactions}`}>
                    <h5 className="label">SEE ALL {'>'}</h5>
                </Link>
            </div>
            <div className="list-cards">
                <div className="card d-flex between">
                    <div className="article">
                        <h4 className="text">Shopping</h4>
                        <span className="date t-light">tue 25-10-2021</span>
                    </div>
                    <div className="amount">
                        <h4 className="text"> $29.90</h4>
                    </div>
                </div>
            </div>
        </ContentLastestTransactions>
    );
}

export default LastestTransactions;
