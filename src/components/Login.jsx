/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/no-duplicates
import axios from "axios";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import Swal from 'sweetalert2';
// eslint-disable-next-line import/no-unresolved


function Login() {
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value.trim();
        const password = e.target.password.value.trim();
        // eslint-disable-next-line no-unused-vars
        // eslint-disable-next-line no-undef
        axios
            .post('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/login', { email, password })
            .then(resp => {
                <small>Ingresando</small>;
                // eslint-disable-next-line no-unused-vars
                console.log(resp.data)
                const tokenReceived = resp.data.accessToken
                localStorage.setItem('token', tokenReceived)
                navigate('/Welcome')
                axios.get('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/auth/me', {
                    headers: {
                        Authorization: `Bearer ${tokenReceived}`
                    }
                }).then(response => {
                    const nameUser = response.data.first_name;
                    const idUser = response.data.id;
                    localStorage.setItem('nameUser', nameUser)
                    localStorage.setItem('idUser', idUser)
                    console.log(response.data)
                })

            })
            .catch(() => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Datos Inválidos'
                });
            });



    };


    return (
        <>
            <div className="contenedor-imagen">
                <h2 className="text-center">Bienvenido</h2>
                <img alt="Logo-principal" className="imagen" />
            </div>
            <section className="vh-50">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">

                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={submitHandler}>
                                <div className="form-outline mb-4">

                                    <input type="email" placeholder="Correo Electroníco" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"
                                        required minLength="1" maxLength="25" className="form-control form-control-lg" />

                                </div>


                                <div className="form-outline mb-3">

                                    <input type="password" placeholder="Contraseña" id="exampleInputPassword1" name="password" required minLength="4" maxLength="12" className="form-control form-control-lg" />
                                </div>

                                <div className="d-flex justify-content-between align-items-center">

                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" >
                                            Recordar
                                        </label>
                                    </div>
                                    <a href="/ResetPassword" className="text-body">¿Olvidaste tu contraseña?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg"
                                    >Iniciar sesión </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">¿No tienes una cuenta? <a href="/CreateAccount"
                                        className="link-danger">Registrate!</a></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </section>


        </>


    )
}

export default Login;