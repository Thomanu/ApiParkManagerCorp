import React, { Component } from "react";
export default class SignUp extends Component {
    render() {
        return (
            <form>
            <h3>Inscription</h3>
            <div className="form-group">
                <label>Prénom</label>
                <input type="text" className="form-control" placeholder="Prénom" />
            </div>
            <div className="form-group">
                <label>Nom</label>
                <input type="text" className="form-control" placeholder="Nom de famille" />
            </div>
            <div className="form-group">
                <label>Adresse e-mail</label>
                <input type="email" className="form-control" placeholder="E-Mail" />
            </div>
            <div className="form-group">
                <label>Mot de passe</label>
                <input type="password" className="form-control" placeholder="Mot de passe" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Inscription</button>
            <p className="forgot-password text-right">
                Déja inscrit ? <a href="#"> Connectez-vous ! </a>
            </p>
        </form>
        );
    }
}