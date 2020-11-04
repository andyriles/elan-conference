import React from 'react'
import Logo from '../Images/ElanLogo.png'

function Login(props) {
    const {email,setEmail,password,setPassword,handleLogin,handleSignUp,hasAccoumt,setHasAccount,emailError,passwordError}= props

    const handleSubmit= (e)=>{
        e.preventDefault();
        hasAccoumt? handleLogin():handleSignUp()
    }
    return (
        <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img src={Logo} id="icon" alt="User Icon" />
          </div>
      
         
          <form onSubmit={handleSubmit}>
            <input type="text" id="login" className="fadeIn second" name="login" 
            value={email}
            onChange= {(e)=>setEmail(e.target.value)}
            placeholder="email"/>
            <p className="errorMsg">{emailError}</p>

            <input type="password" id="password" className="fadeIn third" name="login" value={password} onChange={(e=>setPassword(e.target.value))} 
            placeholder="password"/>
            <p className="errorMsg">{passwordError}</p>

            {hasAccoumt? (
                <>
                 <button className="fadeIn fourth" >Sign in</button>
                
                </>
            ):(
                <>
                 <button  className="fadeIn fourth" >Sign up</button>
                </>
            )}
            
          </form>
      
          <div id="formFooter">
              {hasAccoumt? (
                   <p className="footer-p">Don't have an account? <span style={{cursor:"pointer"}} onClick={()=>setHasAccount(!hasAccoumt)}>Sign up</span></p>
              ): (
                <p className="footer-p">Have an account? <span style={{cursor:"pointer"}} onClick={()=>setHasAccount(!hasAccoumt)}>Sign in</span></p>
              )}
           {/*  <a className="underlineHover" href="#">Forgot Password?</a> */}
          </div>
      
        </div> 
      </div>
    )
}

export default Login
