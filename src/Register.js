import React, { useEffect } from "react"
import {useRef, useState, UseEffect} from "react";
import { faCheck, faTimes, falnfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Register =() =>{
    const userRef =useRef();
    const errRef =useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocused, setUserFocused] = useState(false);

    const [pwd,setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocused, setPwdFocused] = useState(false);

    const [matchpwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchPwd, setMatchpwd] = useState(false);


const [errMsg, setErrorMsg] = useState('');
const [success, setSuccess] = useState(false);

useEffect(() => {
    const result = user.test(username);
    console.log(result);
    console.log(user);
    setValidName(result);
}, [user])

useEffect(() =>{
    const result =PWD.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match =pwd === matchPwd;
    setValidMatch(match);
}, [pwd, matchPwd])

useEffect(() =>{
    setErrorMsg('');
}, [user, pwd, matchPwd])

const handlesubmit = async (e) => {
    e.preventDefault();

    return;
}
    console.log(user, pwd);
    setSuccess(true);
}

         return (
        <>
        {success ? (
            <section>
                <h1>success</h1>
                <p>
                    <a href ="#">sign in</a>
                </p>
            </section>
        ) : (
        <section> 
            <p ref={errRef} className={errMsg ? "errmsg" :
            "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Reistter</h1>
            <form onSubmit={handlesubmit}>
                <label htmlfor="username">
                    Username:
                   <span className={validName ? "valid" : "hide"}>
                      <FontAwesomeIcon icon={faCheck} />
                    </span> 
                    <span className={validName || !user ? "hide" :
                        "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                        </span>

                    

                    

                </label>
                <input
                type="text"
                id="username"
                ref={userRef}
                autocomplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUser(true)}
                onBlur={() => setUser(false)}
                />
                <p id="uidnote" className={userFocus && user &&
                !validName ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 character. <br />
                    Mustbegin with a letter. <br />
                    Letters, numbers, underscores, hyphens allowed. <br />
                </p> 
                
                <label htmlFor="password">
                    password:
                    <span className={validPwd ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validPwd || !pwd ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdBlur(false)}
                />
                <p id="pwdnote" className={pwdFocus && !validpwd ? "instructions" :
                "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                8 tp 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a space special 
                character.<br />
                </p>

               <label htmlFor="confirm_pwd">
                confirm pwd:
                <span className={validMatch && matchPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validMatch || !matchPwd ? "valid" : "invalid"}>
                    </span>
                </label> 

                <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatch(e.target.value)}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={()=> setMatchFocus(true)}
                onBlur={()=> setMatchFocus(false)}
            />
            <p id="confirmnote" className={matchFoccus && !validMatch ? "instructions" : 
            "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
            </p>

            <button disabled={!validName || !validPwd || !validMatch ? true :
            false}>sign up</button>
       </form>
       <p>
          Already registered?<br />
          <span className="line">
            {/*put router link here*/}
            <a href="#">sign in</a>
          </span>
       </p>
        </section>

            )}
         </>
     )
    
     {

    }
            


export default Register;