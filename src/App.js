import './App.css';
import Header from './login/header';
import LoginForm from './login/loginForm';

function App() {
    return (
        <div>
            <Header />
            <div className="contentForm">
                <LoginForm />
            </div>
        </div>
    );
}

export default App;
