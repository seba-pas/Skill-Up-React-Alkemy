import { Container, FormControl, Input, InputLabel } from '@mui/system';

export default function Transfers() {
    return (
        <Container>
            <div className="newTransactionForm">
                <h3>New Transaction:</h3>
                <FormControl>
                    <InputLabel htmlFor="userList">Ingresar el usuario a quien envía:</InputLabel>{' '}
                    <br />
                    <Input /> <br />
                    <InputLabel htmlFor="amount">Ingrese un monto:</InputLabel> <br />
                </FormControl>
            </div>
        </Container>
    );
}
