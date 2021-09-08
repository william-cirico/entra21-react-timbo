import "./styles.css"; 
import { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { Loading } from "../../components/Loading";

export function Login() {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPasswod] = useState("");
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const { signIn } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            setIsLoading(true);
            await signIn(email, password);            
            history.replace("/dashboard");
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }        
    }    
    
    return (
        <div className="login-container">            
            { isLoading && <Loading /> }
            <h1>Login</h1>
            {error && <p className="error">{error}</p>}
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="required">
                    Email:
                    <input 
                        onChange={e => setEmail(e.target.value)}
                        placeholder="usuario@email.com"
                        required
                        type="email" 
                        value={email}
                    />                
                </label>
                <label className="required">
                    Senha:
                    <input 
                        onChange={e => setPasswod(e.target.value)}
                        required    
                        type="password" 
                        value={password}                        
                    />
                </label>
                <button>Acessar</button>
            </form>
        </div>    
    );
}