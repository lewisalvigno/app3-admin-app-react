import React, { useState } from "react";
import "../../assets/css/login.css";
import { Link } from "react-router-dom";
import authLayout from "../../hoc/authLayout";

async Login() {
    // const history = this.state.history;
    console.log(this.state.username, this.state.password);

    let item = { username: this.state.username, password: this.state.password };
    let result = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        // "Access-Control-Allow-Origin":"*",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    // thishistory.push("/")
    console.log("result", result)

  }


<>
<section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        {/* <img alt="hey" src={require('./../assets/images/login_im_park.png')} className="img-fluid"/> */}
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

<form className="login-form">
  <div className="d-flex align-items-center my-4">
    <h1 className="text-center fw-normal mb-0 me-3">Park-It</h1>
  </div>
  {/* <!-- Email input --> */}
  <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form3Example3">
      Nom d'utilisateur
    </label>
    <input
      onChange={(e) => this.setState({ username: e.target.value })}
      type="text"
      id="form3Example3"
      className="form-control form-control-lg"
      placeholder="Entrer votre nom d'utilisateur"
    />
  </div>

  {/* <!-- Password input --> */}
  <div className="form-outline mb-3">
    <label className="form-label" htmlFor="form3Example4">
      Mot de pass
    </label>
    <input
      type="password"
      id="form3Example4"
      onChange={(e) => this.setState({ password: e.target.value })}
      className="form-control form-control-lg"
      placeholder="Entrer votre mot de pass"
    />
  </div>

  <div className="d-flex justify-content-between align-items-center">
    {/* <!-- Checkbox --> */}
    <div className="form-check mb-0">
      <input
        className="form-check-input me-2"
        type="checkbox"
        value=""
        id="form2Example3"
      />
      <label className="form-check-label" htmlFor="form2Example3">
        Garder mes identifiants
      </label>
    </div>
    <Link to="/reset-password" className="text-body">
      Mot de pass oublié?
    </Link>
  </div>

  <div className="text-center text-lg-start mt-4 pt-2">
    <Link
      to="#"
      onClick={() => this.Login()}
      type="button"
      className="btn btn-dark btn-lg"
    >
      Connexion
    </Link>
    {/* <p className="small fw-bold mt-2 pt-1 mb-0">Vous n'avez pas de compte? 
            <a href="#"
                className="link-danger">S'enregistrer</a>
                </p> */}
  </div>
</form>
<button className="btn btn-info" onClick={() => this.Login()}>
  {" "}
  connecter{" "}
</button>
</div>
                </div>
            </div>
        </section>
</>