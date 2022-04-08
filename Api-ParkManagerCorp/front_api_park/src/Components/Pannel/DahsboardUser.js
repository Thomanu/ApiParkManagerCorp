import React, { Component } from "react";
export default class DashboardUser extends Component {
    render() {
        return (

<div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://www.blacksmith.studio/assets/static/blacksmith.2665e34.43dc34d740d3ba5de8f299f8464468a8.jpg"></img><span class="font-weight-bold">John Doe</span><span class="text-black-50">test@gmail.com</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Edition de profil</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Prénom</label><input type="text" class="form-control" placeholder="John" value=""/></div>
                    <div class="col-md-6"><label class="labels">Nom</label><input type="text" class="form-control" placeholder="Doe" value="" /></div>
                </div>
                <div class="row mt-3">
                 
                </div>
               
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Sauvergarder</button></div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3 py-5">

               
                
            
            </div>
        </div>
    </div>
</div>



            );
        }
    }

   