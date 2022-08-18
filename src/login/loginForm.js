import Note from "./note";
import NHSLogo from "../images/nhsLogo.png";
import infoIcon from '../images/info.png';

function LoginForm() {
    return (
        <div>
            <div className="loginForm">
                <h3>Login to Charac</h3>
                <h6>Don't have an account? <span className="signupClass">Sign up</span> to Charac</h6>
                <div className="noteClass"><img src={infoIcon} className="infoLogoClass" />
                    <p className="noteParaClass">To book NHS and Private consultations with you pharmacist please login here.</p>
                </div>
                <form>
                    <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                        <span className="credentialsClass">Username / Email address</span>
                        <div className="inputClass">
                            <input type="text" placeholder="Username / Email address" className="inputTypeClass" />
                        </div>
                    </div>
                    <div>
                        <span className="credentialsClass">Password</span>
                        <div className="inputClass">
                            <input type="password" placeholder="Password" className="inputTypeClass" />
                        </div>
                    </div>
                    <div>
                        <input type="submit" className="loginButtonClass" value="Login" />
                        <p className="forgotPasswordClass">Forgot your password?</p>
                    </div>
                </form>
                <div className="nhsClass" style={{ clear: "both", marginBottom: "1rem", marginTop: "4rem" }}><img src={NHSLogo} className="nhsLogoClass" /><p style={{ marginTop: "2rem", display: "inline" }}>Continue with NHS Login</p></div>
                <div className="noteClass"><img src={infoIcon} className="infoLogoClass" />
                    <p className="noteParaClass1">To order NHS repeat prescription please login via NHS login</p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;