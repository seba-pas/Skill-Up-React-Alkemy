import React from 'react';

function Signin() {
    return (
        <div>
            <form action="">
                <div className="custom-input">
                    <label htmlFor="name">
                        <span className="label">Name</span>
                        <input
                            type="text"
                            className="input"
                            name="name"
                            id="name"
                            placeholder="Name"
                        />
                    </label>
                </div>
            </form>
        </div>
    );
}

export default Signin;
