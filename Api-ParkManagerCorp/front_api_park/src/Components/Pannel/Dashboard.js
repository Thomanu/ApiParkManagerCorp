import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import { Button,Modal } from 'react-bootstrap';
 
function Home() {
 
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
 
       <div class="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div class="row ">
           
           <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form class="form-inline">
                 <input class="form-control mr-sm-2" type="search" placeholder="Chercher place" aria-label="Search"/>
                
                </form>
              </div>    
              </div>  
              <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Parking</b></h2></div>
              <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary" onClick={handleShow}>
               Ajouter une place
              </Button>
             </div>
           </div>  
            <div class="row">
                <div class="table-responsive " >
                 <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Utilisateur </th>
                            <th>Place</th>
                            <th>Etage </th>
                            <th>Debut </th>
                            <th>Fin prévue</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                            <td>
                               <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                                 
                            </td>
                        </tr>
                       
                         
 
                        
 
                       
 
                       
                    </tbody>
                </table>
            </div>   
        </div>  
 
        {/* <!--- Model Box ---> */}
        <div className="model_box">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ajouter</Modal.Title>
        </Modal.Header>
            <Modal.Body>
            <form>
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Test"/>
                </div>
                <div class="form-group mt-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="test"/>
                </div>
                <div class="form-group mt-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="test"/>
                </div>
                <div class="form-group mt-3">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Test"/>
                </div>
                
                  <button type="submit" class="btn btn-success mt-4">Ajouter</button>
                </form>
            </Modal.Body>
 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          
        </Modal.Footer>
      </Modal>
  
       {/* Model Box Finsihs */}
       </div>  
      </div>    
      </div>  
  );
}
 
export default Home;