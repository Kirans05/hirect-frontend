import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
    const nav = useNavigate()
    const [responseMsg,setresponseMsg] = useState(null)


    
  const ResponseSuccess = async (response) => {
    let option = {
      url: "http://localhost:8000/login/signin",
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: {
        tocken: response.tokenId,
      },
    };
    const axiosResult = await axios(option);
    if(axiosResult.data.message == "SignUp successfull"){
        localStorage.setItem("SigninTocken",axiosResult.data.SigninTocken)
        const routeValue = "sigin"
        nav(`/dashboard/${routeValue}`)
    }else if(axiosResult.data.message == "Login Successfull") {
        const routeValue = "login"
        localStorage.setItem("LoginTocken",axiosResult.data.logintocken)
        nav(`/dashboard/${routeValue}`)
    }else{
        setresponseMsg("Internal Server Problem Try Again Later")
    }
  };

  const ResponseFailure = (response) => {
    console.log("error", response);
  };
  return (
    <div className="singUpDiv">
      <h1>Login with google</h1>
      <div className="googleLogin">
      <GoogleLogin
        clientId="638173720564-7ql1iidb2p96tqmud5ojjan50c66khg5.apps.googleusercontent.com"
        buttonText="SignIn with Google"
        onSuccess={ResponseSuccess}
        onFailure={ResponseFailure}
        className="googleSigninBtn"
      />

      </div>
      <br />
      <br />
      {
          responseMsg ? <h1>{responseMsg}</h1>:null
      }
    </div>
  );
};

export default SignInPage;