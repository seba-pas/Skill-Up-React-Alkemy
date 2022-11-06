import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Welcome() {
    const navigate = useNavigate();
    const nameUser = localStorage.getItem('nameUser');
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token == null) {
            navigate('/');
        }
    }, []);

    return (
        <div>
            <Header nameUser={nameUser} />
            <h1>Welcome</h1>
        </div>
    );
}

export default Welcome;
