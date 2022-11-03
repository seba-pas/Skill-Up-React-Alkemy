import React from 'react';
import './saldo2.css';

const Saldo2 = () => {
    return (
        <div className="container">
            <div className="saldo_card">
                <div className="textos">
                    <span>Saldo Actual</span>
                    <span>+Balance</span>
                </div>
                <span className="saldo">$125.245</span>
            </div>
        </div>
    );
};

export default Saldo2;
