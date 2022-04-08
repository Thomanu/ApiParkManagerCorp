const parking = require("../controllers/parkingController.js");
var router = require("express").Router();

// Creer un user
router.post("/", parking.createUser);

// Mettre un user à jour 
router.put("/:id", parking.updateUser);

// lire user 
router.get("/users/:id", parking.readUser);

// lire user 
router.get("/users", parking.readAllUsers);



// Supprimer un user
router.delete("/:id", parking.deleteUser);



// Trouver toutes les places de parking
router.get("/", parking.findAll);


// Trouver une place de parking
router.get("/:id", parking.findOne);

// Trouver une place de parking libre
router.get("/disponibility/:id", parking.findFreeSlot);

// Trouver la place d'un utilisateur
router.get("/id_users/:id", parking.findUserSlot);









// app.use(router);

module.exports = router