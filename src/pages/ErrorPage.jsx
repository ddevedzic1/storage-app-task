import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Woops!</h2>
            <Link to="/">Head back to safetly!</Link>
        </div>
    );
}

export default ErrorPage;