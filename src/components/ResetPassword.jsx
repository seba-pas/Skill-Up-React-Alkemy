import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function ResetPassword() {
    const idUser = localStorage.getItem('idUser');
    console.log(idUser);
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        // eslint-disable-next-line no-unused-vars
        const password = e.target.password.value.trim();
        axios
            .patch(
                // eslint-disable-next-line no-undef
                'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/users/resetPassword/',
                // eslint-disable-next-line no-undef
                {
                    id: idUser
                }
            )
            .then(() => {
                Swal.fire({
                    title: 'Exito!',
                    text: 'Su contraseña fue modificada'
                });
                navigate('/');
            })
            .catch(() => {
                Swal.fire({
                    // eslint-disable-next-line prettier/prettier
                    title: 'Error!',
                });
            });
    };
    return (
        <>
            <div className="contenedor-imagen">
                <h2 className="text-center">Cambiar Contraseña</h2>
                <img alt="Logo-principal" className="imagen" />
            </div>
            <section className="vh-50">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={submitHandler}>
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        placeholder="Nueva Contraseña"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        name="password"
                                        required
                                        minLength="4"
                                        maxLength="12"
                                        className="form-control form-control-lg"
                                    />
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg">
                                        {' '}
                                        Modificar{' '}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ResetPassword;
