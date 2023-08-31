import React from "react";
import { Link } from "react-router-dom";
 // Assurez-vous d'importer le fichier de styles approprié

const AddUser = () => {
    return (
        <div>
            <h1>New Here?</h1>
            <Link to="/Singup/index">
                <button type="button">
                    Sign Up
                </button>
            </Link>
        </div>
    );
};

export default AddUser;
