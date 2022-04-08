import React, { Component } from "react";
export default class Login extends Component {
    render() {
        return (
            <form>
            <h3>Connexion</h3>
            <div className="form-group">
                <label>Adresse e-mail</label>
                <input type="email" className="form-control" placeholder="E-Mail" />
            </div>
            <div className="form-group">
                <label>Mot de passe</label>
                <input type="password" className="form-control" placeholder="Mot de passe" />
            </div>
         
            <button type="submit" className="btn btn-primary btn-block">Connexion</button>
            <p className="forgot-password text-right">
                Mot de passe<a href="#">oublié ?</a>
            </p>
        </form>
        );
    }
}