import React from 'react';
import {Link} from "react-router-dom";

const AuthorizationForm = () => {
    return (
        <form>
            <input type="text"/>
            <input type="password"/>
            <button>Auth</button>
            <button><Link to={'/sign-up'}>I have not an account</Link></button>
        </form>
    );
};

export default AuthorizationForm;