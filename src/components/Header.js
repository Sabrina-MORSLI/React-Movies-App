import '../style/Header.css'
import logo from '../assets/logo.svg'

function Header() {
    
        
    return (
    <>
        <div className='header'>   
            <img src={logo} alt='Particeep' className="logo"/>
                   
            <div className="liens_cv_linkedin">
                <a className="liens_style margin_liens" href="https://drive.google.com/file/d/1OMcyIILBCxJSk5VIQxfvxAKWUIpEovGc/view?usp=sharing" alt="CV sur drive">Mon CV</a>
                <a className="liens_style" href="https://www.linkedin.com/in/morsli-sabrina" alt="url linkedin">Mon LinkedIn</a>
            </div>
        </div>
    </>
    )
    
}

export default Header