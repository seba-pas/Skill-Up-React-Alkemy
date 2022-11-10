// hooks
import React from 'react';
// components
import CashBalance from './Components/CashBalance/CashBalance';
import AvatarUser from './Components/Avatar/AvatarUser';
import LastestTransactions from './Components/LastestTransactions/LastestTransactions';
import DecorationLayout from '../../../layout/DecorationLayout/DecorationLayout';
// styles
import { ContentHome } from './Home.styles';
import { useGetAccountQuery } from '../../../services/dataApi';

export default function Home() {
    const { data, isLoading } = useGetAccountQuery();

    if (isLoading) {
        return <p>Loading</p>;
    }

    console.log(data);

    return (
        <DecorationLayout>
            <ContentHome>
                <AvatarUser />
                <CashBalance />
                <LastestTransactions />
            </ContentHome>
        </DecorationLayout>
    );
}
