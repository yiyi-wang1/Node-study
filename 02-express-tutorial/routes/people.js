const express = require('express');
const router = express.Router();
// let { people } = require('../data');
const {
    getPeople,
    createPerson,
    updatePerson,
    deletePerson
} = require('../controller/people');

// router.get('/', (req, res) => {
//     res.status(200).json({success: true, data: people});
// })

router.get('/',getPeople)

// router.post('/', (req, res) => {
//     const { name } = req.body;
//     if (!name) {
//         return res.status(400).json({success: false, msg:"Please enter name"})
//     }
//     res.status(201).json({success: true, person: name});
// })

router.post('/',createPerson)

// router.put("/:id", (req, res) => {
//     const { id } = req.params
//     const { name } = req.body;
//     const person = people.find((person) => person.id === Number(id))

//     if (!person) {
//         return res.status(404).json({success: false, msg:`no person found with ${id}`});
//     }
//     const newPeople = people.map(person => {
//         if (person.id === Number(id)) {
//             person.name = name
//         }
//         return person
//     })
//     res.status(200).json({success: true, data: newPeople})
// })

router.put("/:id", updatePerson)

// router.delete("/:id", (req, res) => {
//     const { id } = req.params
//     const person = people.find((person) => person.id === Number(id))
//     if (!person) {
//         return res.status(404)
//                 .json({ success: false, msg: `no person found with ${id}`});
//     }
//     const newPeople = people.filter((person) => person.id !== Number(id));

//     res.status(200).json({success: true, data: newPeople})
// })

router.delete("./:id",deletePerson);

// router.post('/postman', (req, res) => {
//     const { name } = req.body;
//     if (!name) {
//         return res.status(400).json({success: false, msg:"Please enter name"})
//     }
//     res.status(201).json({success: true, data: [...people, name]});
// })

//Also can use the following way:

// router.route("/").get(getPeople).post(createPerson);
// router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
