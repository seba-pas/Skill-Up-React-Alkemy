import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "../HojasDeEstilo/Login.css"
import Swal from 'sweetalert2'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Login() {

    let navigate = useNavigate();
    let navigateCreateAcount = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value.trim()
        const password = e.target.password.value.trim()


        if (email !== 'ingresarapi@hotmail.com' || password !== 'pokemones') {
            Swal.fire({
                title: 'Error!',
                text: 'Datos inválidos',
                icon: 'error',
                confirmButtonText: 'Ok'

            })
        }



        if (email === 'ingresarapi@hotmail.com' && password === 'pokemones') {
            Swal.fire({
                title: 'Exito!',
                text: 'Ingresando...',
                icon: 'exit',
                confirmButtonText: 'OK'

            })
            navigate('/')
        }


    }

    const HandleSubmit = () => {
        navigateCreateAcount('/CreateAccount')
    }


    return (
        <Fragment>
            <div class="contenedor-imagen">
                <h2 className="text-center">Bienvenido</h2>
                <img alt="Logo-principal" class="imagen" />
            </div>
            <section class="vh-50">
                <div class="container-fluid h-custom">
                    <div class="row d-flex justify-content-center align-items-center h-100">

                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={submitHandler}>
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="form3Example3">Usuario</label>
                                    <input type="email" placeholder="Correo Electroníco" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"
                                        required minlength="1" maxlength="25" class="form-control form-control-lg" />

                                </div>


                                <div class="form-outline mb-3">
                                    <label class="form-label" for="form3Example4">Contraseña</label>
                                    <input type="password" placeholder="Contraseña" id="exampleInputPassword1" name="password" required minlength="4" maxlength="12" class="form-control form-control-lg" />
                                </div>

                                <div class="d-flex justify-content-between align-items-center">

                                    <div class="form-check mb-0">
                                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label class="form-check-label" for="form2Example3">
                                            Recordar
                                        </label>
                                    </div>
                                    <a href="#!" class="text-body">¿Olvidaste tu contraseña?</a>
                                </div>

                                <div class="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" class="btn btn-primary btn-lg"
                                    >Iniciar sesión </button>
                                    <p class="small fw-bold mt-2 pt-1 mb-0">¿No tienes una cuenta? <a href="/CreateAccount"
                                        class="link-danger">Registrate!</a></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </section>


        </Fragment>


    )
}

export default Login;