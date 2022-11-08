// hooks
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useSnackbar } from 'notistack';
// components
import CustomInput from '../../components/CustomInput/CustomInput';
// layouts
import DecorationLayout from '../../layout/DecorationLayout/DecorationLayout';
// utils
import { PUBLIC } from '../../router/PathUrl';

import { ContentSignUp } from './SignUp.styles';

function SignUp() {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        pswrepeat: ''
    });

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value.trim()
        });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        const password1 = data.password.trim();
        const password2 = data.pswrepeat.trim();
        if (password1 !== password2) {
            Swal.fire({
                title: 'Error!',
                text: 'Las contraseñas no coinciden'
            });
        } else {
            axios
                .post('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users', {
                    firts_name: data.first_name,
                    email: data.email,
                    last_name: data.last_name,
                    password: data.password
                })
                .then(() => {
                    Swal.fire({
                        title: 'Exito!',
                        text: 'Cuenta creada con exito'
                    });
                    navigate('/');
                })
                .catch(() => {
                    enqueueSnackbar('El email igresado ya existe', { variant: 'error' });
                    // Swal.fire({
                    //     title: 'Error!',
                    //     text: 'El email ingresado ya existe'
                    // });
                });
        }
    };
    return (
        <DecorationLayout>
            <ContentSignUp>
                <div className="contenedor-imagen">
                    <h1 className="text-center f-24">
                        Welcome to <br /> transfer cash
                    </h1>
                </div>

                <form onSubmit={submitHandler} className="form">
                    <CustomInput
                        name="first_name"
                        placeholder="First name"
                        label="First Name"
                        onChange={handleInputChange}
                        value={data.first_name}
                    />
                    <CustomInput
                        name="last_name"
                        placeholder="Last name"
                        label="Last Name"
                        onChange={handleInputChange}
                        value={data.last_name}
                    />
                    <CustomInput
                        name="email"
                        placeholder="Email"
                        label="Email"
                        onChange={handleInputChange}
                        value={data.email}
                    />
                    <CustomInput
                        name="password"
                        placeholder="Password"
                        label="Password"
                        onChange={handleInputChange}
                        value={data.password}
                    />
                    <CustomInput
                        name="pswrepeat"
                        placeholder="Repeat password"
                        label="Repeat password"
                        onChange={handleInputChange}
                        value={data.pswrepeat}
                    />
                    <button type="submit" className="btn primary">
                        Create account
                    </button>
                </form>
                <p className="f-12 fw-3 t-center">
                    ¿You have an account?{' '}
                    <Link to={PUBLIC.signin} className="c-primary fw-4">
                        Sig in here!
                    </Link>
                </p>
            </ContentSignUp>
        </DecorationLayout>
    );
}

export default SignUp;
