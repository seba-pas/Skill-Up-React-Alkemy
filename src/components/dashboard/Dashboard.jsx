import React, { useState } from 'react';
import './dashboard.css';
import Buttons from '../buttons/Buttons';
import ButtonAppBar from '../appbar/Appbar';
import OutlinedCard from '../saldo/Saldo';

{
    /* Carga de saldo
3. Gastos
4. Balance
5. Movimientos
6. Envío de dinero */
}

export default function Dashboard() {
    const [saldo, setSaldo] = useState(0);

    return (
        <div className="general_container" style={{ background: '#edf7f6', height: '100vh' }}>
            <ButtonAppBar />

            {/* <div className="saldo_container">
                <span className="saldo">${saldo}</span>
            </div> */}
            <h1>Bienvenido Usuario</h1>
            <div>
                <OutlinedCard />
            </div>

            <div>
                <Buttons />
            </div>
        </div>
    );
}
