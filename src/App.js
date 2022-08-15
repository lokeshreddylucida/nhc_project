import './App.css';
import Header from './login/header';
import LoginForm from './login/loginForm';

function App() {
    return (
        <div>
            <Header />
            <div style={{ width: '100%', marginLeft: '30%', marginRight: '30%' }}>
                <LoginForm />
            </div>
        </div>
    );
}

export default App;
