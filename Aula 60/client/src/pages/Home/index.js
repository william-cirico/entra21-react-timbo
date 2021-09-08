import "./styles.css";

import { Link } from "react-router-dom";

export function Home() {
    return (
        <div className="container-home">
            <h1>Bem-vindo ao Sistema Gerenciador de Turmas</h1>
            <Link to="/login">Login</Link>            
        </div>
    );
}