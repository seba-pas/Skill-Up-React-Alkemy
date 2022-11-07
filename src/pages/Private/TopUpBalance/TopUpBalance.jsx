import { FormControl, Input } from '@mui/material';
import React from 'react';
import BackButton from '../../../components/buttons/BackButton';
import { ContentTopUpBalance } from './TopUpBalance.style';

function TopUpBalance() {
    return (
        <ContentTopUpBalance>
            <div className="backButtonContainer">
                <BackButton />
            </div>
            <span>
                <h3>Cargar Saldo:</h3>
            </span>
            <FormControl>
                <Input />
            </FormControl>
        </ContentTopUpBalance>
    );
}

export default TopUpBalance;
