/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */

import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
function Header(props) {
    const navigate = useNavigate();
    const clearStorage = () => {
        localStorage.clear();
        navigate('/');
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Barra de Navegación...
                </a>
                <div classNaame="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                {props.nameUser}
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li>
                                    <a className="dropdown-item" href="/ResetPassword">
                                        Change password
                                    </a>
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={clearStorage}>
                                        Sign off
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Header;
