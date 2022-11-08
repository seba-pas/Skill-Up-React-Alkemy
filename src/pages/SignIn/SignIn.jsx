// hooks
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
// components
import CustomInput from '../../components/CustomInput/CustomInput';
// layouts
import DecorationLayout from '../../layout/DecorationLayout/DecorationLayout';
// utils
import { PUBLIC } from '../../router/PathUrl';
import { ContentSignIn } from './SignIn.styles';

function Login() {
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value.trim();
        const password = e.target.password.value.trim();
        axios
            .post('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/login', {
                email,
                password
            })
            .then((resp) => {
                const validEmail = !!formState.email;
                if (!validEmail) throw Error();
                const tokenReceived = resp.data.accessToken;
                localStorage.setItem('token', tokenReceived);
                axios
                    .get('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/me', {
                        headers: {
                            Authorization: `Bearer ${tokenReceived}`
                        }
                    })
                    .then((response) => {
                        const nameUser = response.data.first_name;
                        localStorage.setItem('nameUser', nameUser);
                        navigate('/');
                    });
            })
            .catch(() => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Datos Inválidos'
                });
            });
    };

    const handleInputChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value.trim()
        });
    };

    return (
        <DecorationLayout>
            <ContentSignIn>
                <div className="contenedor-imagen">
                    <h2 className="f-24">
                        Welcome to <br /> transfer cash
                    </h2>
                </div>

                <form onSubmit={submitHandler} className="form">
                    <CustomInput
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Email"
                        onChange={handleInputChange}
                        value={formState.email}
                    />
                    <CustomInput
                        type="password"
                        name="password"
                        label="Password"
                        placeholder="Password"
                        onChange={handleInputChange}
                        value={formState.password}
                    />
                    <button type="submit" className="btn primary">
                        Log in
                    </button>
                </form>
                <p className="t-center f-12 fw-3">
                    ¿You dont have an account?{' '}
                    <Link to={PUBLIC.signup} className="c-primary fw-4">
                        Sign up here!
                    </Link>
                </p>
            </ContentSignIn>
        </DecorationLayout>
    );
}

export default Login;
