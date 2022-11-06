/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
import Swal from 'sweetalert2';

function CreateAccount() {
    const navigate = useNavigate();
    // eslint-disable-next-line import/no-extraneous-dependencies, global-require, no-shadow

    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        pswrepeat: ''
    });

    const inputChange = (e) => {
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
                .then((resp) => {
                    Swal.fire({
                        title: 'Exito!',
                        text: 'Cuenta creada con exito'
                    });
                    // eslint-disable-next-line no-unused-vars
                    console.log(resp);
                    navigate('/');
                })
                .catch(() => {
                    Swal.fire({
                        title: 'Error!',
                        text: 'El email ingresado ya existe'
                    });
                });
        }
    };
    return (
        <>
            <div className="contenedor-imagen">
                <h1 className="text-center">Welcome to transfer cash</h1>
            </div>

            <form onSubmit={submitHandler}>
                <div className="form-outline mb-4">
                    <input
                        type="text"
                        placeholder="First name"
                        name="first_name"
                        value={data.first_name}
                        onChange={inputChange}
                        required
                        minLength="3"
                        maxLength="12"
                        className="form-control form-control-lg"
                    />
                </div>
                <div className="form-outline mb-4">
                    <input
                        type="text"
                        placeholder="Last name"
                        name="last_name"
                        value={data.last_name}
                        onChange={inputChange}
                        required
                        minLength="3"
                        maxLength="12"
                        className="form-control form-control-lg"
                    />
                </div>

                <div className="form-outline mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={data.email}
                        onChange={inputChange}
                        className="form-control form-control-lg"
                    />
                </div>

                <div className="form-outline mb-3">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={data.password}
                        required
                        minLength="8"
                        maxLength="15"
                        className="form-control form-control-lg"
                        onChange={inputChange}
                    />
                </div>

                <div className="form-outline mb-3">
                    <input
                        type="password"
                        placeholder="Repeat password"
                        name="pswrepeat"
                        value={data.pswrepeat}
                        required
                        minLength="8"
                        maxLength="15"
                        className="form-control form-control-lg"
                        onChange={inputChange}
                    />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary btn-lg">
                        Create account
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                        ¿You have an account?{' '}
                        <a href="/" className="link-danger">
                            Sig in here!
                        </a>
                    </p>
                </div>
            </form>
        </>
    );
}

export default CreateAccount;
