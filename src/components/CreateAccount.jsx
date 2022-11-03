/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

function CreateAccount() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        pswrepeat: ''
    });

    const inputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value.trim().toLowerCase()
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const password1 = data.password.trim();
        const password2 = data.pswrepeat.trim();

        if (password1 !== password2) {
            Swal.fire({
                title: 'Error!',
                text: 'La contraseña no coincide',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        } else {
            Swal.fire({
                title: 'Éxito!',
                text: 'Cuenta Creada!',
                icon: 'success'
            });
            navigate('/Login');
        }
        setData({});
    };

    return (
        <>
            <div className="contenedor-imagen">
                <h1 className="text-center">BIENVENIDO</h1>
                <br />
                <h3>Ingrese sus datos</h3>
                <br />
                <img alt="Logo-principal" className="imagen" />
            </div>
            <section className="vh-50">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={submitHandler}>
                                <div className="form-outline mb-4">
                                    <input
                                        type="text"
                                        placeholder="Nombre"
                                        name="name"
                                        value={data.name}
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
                                        required
                                        minLength="1"
                                        maxLength="25"
                                        className="form-control form-control-lg"
                                    />
                                </div>

                                <div className="form-outline mb-3">
                                    <input
                                        type="password"
                                        placeholder="Contraseña"
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
                                        placeholder="Repetir Contraseña"
                                        name="pswrepeat"
                                        value={data.pswrepeat}
                                        required
                                        minLength="8"
                                        maxLength="15"
                                        className="form-control form-control-lg"
                                        onChange={inputChange}
                                    />
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input
                                            className="form-check-input me-2"
                                            type="checkbox"
                                            value=""
                                            id="form2Example3"
                                        />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Recordar
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">
                                        ¿Olvidaste tu contraseña?
                                    </a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg">
                                        Crear Cuenta
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                        ¿Ya tienes una cuenta?{' '}
                                        <a href="/Login" className="link-danger">
                                            Inicia Sesión!
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CreateAccount;
