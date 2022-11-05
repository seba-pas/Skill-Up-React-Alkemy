import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token == null) {
            navigate('/Login');
        }
    }, []);

    return (
        <div>
            <h2>Bienvenido</h2>
        </div>
    );
}

export default Welcome;
