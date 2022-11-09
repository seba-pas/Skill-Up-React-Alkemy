// hooks
import React from 'react';
// components
import Buttons from '../../../components/buttons/Buttons';
import ButtonAppBar from '../../../components/appbar/Appbar';
import Saldo2 from '../../../components/saldo/Saldo2';
import AvatarUser from '../../../components/user/AvatarUser';
// styles
import { ContentHome } from './Home.styles.';
import { useGetMeQuery } from '../../../store/services/dataApi';

export default function Home() {
    // const [saldo, setSaldo] = useState(0);

    const { data, isLoading } = useGetMeQuery();

    if (isLoading) {
        return <p>Loading</p>;
    }

    const accountId = parseInt(
        data.first_name.slice(data.first_name.indexOf('/') + 1, data.first_name.length),
        10
    );
    console.log(data);
    console.log(accountId);

    return (
        <ContentHome style={{ background: 'transparent', height: '100vh' }}>
            <div className="circle" />
            <ButtonAppBar />

            <div style={{ marginTop: '100px' }}>
                <AvatarUser />

                <Saldo2 />
            </div>
            <div className="circle2" />

            <div>
                <Buttons />
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <Transacciones />
            </div> */}
        </ContentHome>
    );
}
