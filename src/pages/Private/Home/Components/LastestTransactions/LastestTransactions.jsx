// hooks
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updatePage } from '../../../../../store/states/page';
// utils
import { PRIVATE } from '../../../../../router/PathUrl';
import { formatDate } from '../../../../../utilities/formatDate';
// services
import { useGetTransactionsQuery } from '../../../../../services/dataApi';

import { ContentLastestTransactions } from './LastestTransactions.styles';

function LastestTransactions() {
    const { data, isLoading } = useGetTransactionsQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLoading) {
            dispatch(updatePage({ isLoading: true }));
        } else {
            dispatch(updatePage({ isLoading: false }));
        }
    }, [isLoading]);

    const isBill = (type) => {
        let className;
        if (type.toLowerCase() === 'payment') {
            className = 'c-danger';
        }
        if (type.toLowerCase() === 'topup') {
            className = 'c-default';
        }
        return className;
    };

    return (
        <ContentLastestTransactions>
            <div className="top d-flex between">
                <h5 className="label">Lastest transactions</h5>
                <Link to={`${PRIVATE.root}/${PRIVATE.transactions}`}>
                    <h5 className="label">SEE ALL {'>'}</h5>
                </Link>
            </div>
            {data ? (
                data.data.map((transaction) => (
                    <div className="list-cards" key={transaction.id}>
                        <div className="card d-flex between">
                            <div className="article">
                                <h4 className="text">{transaction.concept} </h4>
                                <span className="date t-light">{formatDate(transaction.date)}</span>
                            </div>
                            <div className="amount">
                                <h4 className={`text ${isBill(transaction.type)} `}>
                                    $ {transaction.amount}
                                </h4>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <span className="t-light d-block t-center">No transactions</span>
            )}
        </ContentLastestTransactions>
    );
}

export default LastestTransactions;
