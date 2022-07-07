
import {Link} from 'react-router-dom';
import {useState} from 'react';

import '../styles/login.css';



function Login() {
    const [showSignup, setShowSignup] = useState(false);
console.log(showSignup);

    const  toggleSignup =() => {
        setShowSignup(!showSignup);
    } 




    return(
        <div id="loginPage">
        <div id="header">
        <div className='bg-light py-3'>
            <div className='row'>
                <div className='head-wrapper d-flex justify-content-center align-items-center'>

         <div>      
               <h4> <Link to={"/"} className="text-decoration-none text-dark">Ecommerce</Link> </h4>
            </div>
                        </div>
                    </div>
                </div>
        <div className='container py-5'>
            <div className="row">
                <div className='col'>
                    <h2 className='text-center'>Welcome to Ecommerce</h2>
                </div>
                <div>
                {
                    !showSignup ? (
                        <div className='login-wrapper'>
                        <h4 className='text-center'>Login
                        </h4>
                        <div className='input-group'>
                            <input type="text" name="" id="username" placeholder='username' className='form-control' />
                        </div>
                        <div className='input-group'>
                            <input type="password" name="" id="password" placeholder='password' className='form-control' />
                        </div>
                        <div className='input-group'>
                        <Link to ="/home" className='btn btn-primary form-control'>Log in as User</Link>

                            {/*<input type="submit" value="Log in as User" className='btn btn-primary form-control' 
                                onClick={loginFn}/>*/}

                        </div>
                        <div className='text-center text-info' onClick={toggleSignup}>Don't have an account? Signup </div>
                
                </div>
                    

                    ) : (
                        <div className='login-wrapper'>
                        <h4 className='text-center'>Signup
                        </h4>
                        <div className='input-group'>
                            <input type="text" name="" id="username" placeholder='username' className='form-control' />
                        </div>
                        <div className='input-group'>
                            <input type="password" name="" id="password" placeholder='password' className='form-control' />
                        </div>
                        
                            <input type="email" name="" id="email" placeholder='email' className='form-control my-1' />
                        
                        <div className='input-group'>
                            <input type="submit" value="SignUp in as User" className='btn btn-primary form-control'/>

                        </div>
                        <div className='text-center text-info' onClick={toggleSignup}>Already have an account? LogIn</div>
                        
                </div>

                    )
                }
                    </div>
                 </div>
                </div>
            </div>
        </div>
    )
}
export default Login;