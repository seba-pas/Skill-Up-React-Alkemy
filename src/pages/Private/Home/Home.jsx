// hooks
import React from 'react';
// components
import Buttons from '../../../components/buttons/Buttons';
// import ButtonAppBar from '../../../components/appbar/Appbar';Reubicados
import Saldo2 from '../../../components/saldo/Saldo2';
import AvatarUser from '../../../components/user/AvatarUser';
import Adornos from '../../../layout/PrivateLayout/Adornos/Adornos';
// styles
import { ContentHome } from './Home.styles';
// import Footer from '../../../components/footer/Footer'; Reubicados

export default function Home() {
    // const [saldo, setSaldo] = useState(0);

    return (
        <ContentHome>
            <Adornos>
                <div style={{ marginTop: '100px', padding: '2rem' }}>
                    <AvatarUser />

                    <Saldo2 />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
                    <Buttons />
                </div>
                {/* <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <Transacciones />
            </div> */}
            </Adornos>
        </ContentHome>
    );
}
