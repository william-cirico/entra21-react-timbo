import "./styles.css";

export function LoginForm(props) {
    return (
        <div className="login-container">
            <h1>{props.title}</h1>
            <form className="login-form" onSubmit={props.handleSubmit}>
                <label className="required">
                    Email:
                    <input 
                        type="email" 
                        placeholder="usuario@email.com"
                        required
                    />                
                </label>
                <label className="required">
                    Senha:
                    <input 
                        type="password" 
                        required    
                    />
                </label>
                <button>Acessar</button>
            </form>
        </div>        
    );
}