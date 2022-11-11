import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ContentLogout } from './Logout.styles';

export default function LogoutButton() {
    const navigate = useNavigate();
    function handleClick() {
        localStorage.clear();
        navigate('/');
    }
    return (
        <ContentLogout>
            <Button onClick={() => handleClick()}>Cerrar Sesión</Button>
        </ContentLogout>
    );
}
