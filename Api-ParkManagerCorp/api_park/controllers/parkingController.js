const db = require("../models/index.js");
const Parking = db['parking_slots'];
const Users = db['Users'];



// Créer un utilisateur

const createUser = async (req, res) => {
    const body = req.body
    console.log(body)
    try {
const query = await Users.create(body);
res.status(200).send(query);
} catch (e) {
    res.status(400).send({
        'error': e.message
    })
}
};


// Supprimer un utilisateur avec son id 


const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await Users.destroy({
            where: {
                id: id
            }
        })
      

    } catch (e) {
        console.log(e)
        
    }

};


//  Mettre à jour un utilisateur


const updateUser = async (req, res) => {
    const body = req.body
    console.log(body)
    try {
const query = await Users.upsert(body);
res.status(200).send(query);
} catch (e) {
    res.status(400).send({
        'error': e.message
    })
}
};

// Lire tout les utilisateurs

const readAllUsers = async (req, res) => {
    try {
        const query = await Users.findAll();
        res.status(200).send(query);
    } catch (e) {
        res.status(400).send({
            'error': e.message
        })
    }
};



//  Lire un utilisateur




const readUser = async (req, res) => {
    const id = req.params.id;
    try {
        const query = await Users.findAll({
            attributes: ['first_name', 'last_name' , 'email'],
            where: {
                id: id
            },
            includes:['Roles']
        });
        res.status(200).send(query);
    } catch (e) {
        res.status(400).send({
            'error': e.message
        })
    }
};



// Récupérez tous les parkings de la base de données.

const findAll = async (req, res) => {
    try {
        const query = await Parking.findAll();
        res.status(200).send(query);
    } catch (e) {
        res.status(400).send({
            'error': e.message
        })
    }
};


// Trouver un seul parking avec un identifiant


const findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const query = await Parking.findAll({
            attributes: ['slot'],
            where: {
                id: id
            }
        });
        res.status(200).send(query);
    } catch (e) {
        res.status(400).send({
            'error': e.message
        })
    }
};


// Trouver une place libre par étage 



const findFreeSlot = async (req, res) => {
    const id = req.params.id;
    try {
        const query = await Parking.findAll({
            attributes: ['disponibility'],
            where: {
                id: id
            }
        });
        res.status(200).send(query);
    } catch (e) {
        res.status(400).send({
            'error': e.message
        })
    }
};


// Trouver la place de parking par utilisateur 


const findUserSlot = async (req, res) => {
    const id = req.params.id;
    try {
        const query = await Parking.findAll({
            attributes: ['id_users'],
            where: {
                id: id
            }
        });
        res.status(200).send(query);
    } catch (e) {
        res.status(400).send({
            'error': e.message
        })
    }
};


// Exportation de toutes les fonctions du CRUD
module.exports = {
    findAll,
    findOne,
    createUser,
    deleteUser,
    updateUser,
    readUser,
    readAllUsers,
    findFreeSlot,
    findUserSlot

}