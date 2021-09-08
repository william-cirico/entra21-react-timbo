import { AuthProvider } from './contexts/AuthContext';
import { Routes } from "./routes";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
