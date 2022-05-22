const express = require('express');
// const path = require('path');
// let { people } = require('./data');
// const { products } = require('./data')
// const logger = require('./logger');
// const authorize = require('./authorize');
const app = express();
const peopleRouter = require("./routes/people");
const loginRouter = require("./routes/auth");
// const morgan = require('morgan');

/* API START */

// //static assets
// app.use(express.static("./methods-public"));
// //parse form data
// app.use(express.urlencoded({ extended: false }));
// //parse json
// app.use(express.json());

// app.get('/api/people', (req, res) => {
//     res.status(200).json({success: true, data: people});
// })

// app.post('/api/people', (req, res) => {
//     const { name } = req.body;
//     if (!name) {
//         return res.status(400).json({success: false, msg:"Please enter name"})
//     }
//     res.status(201).json({success: true, person: name});
// })

// app.post('/api/postman/people', (req, res) => {
//     const { name } = req.body;
//     if (!name) {
//         return res.status(400).json({success: false, msg:"Please enter name"})
//     }
//     res.status(201).json({success: true, data: [...people, name]});
// })

// app.post("/login", (req, res) => {
//     console.log(req.body);
//     const { name } = req.body;
//     if (name) {
//         return res.status(200).send(`Welcome ${name}`);
//     } 
//     res.status(401).send("Please enter your name");
// })

// app.put("/api/people/:id", (req, res) => {
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


// app.delete("/api/people/:id", (req, res) => {
//     const { id } = req.params
//     const person = people.find((person) => person.id === Number(id))
//     if (!person) {
//         return res.status(404)
//                 .json({ success: false, msg: `no person found with ${id}`});
//     }
//     const newPeople = people.filter((person) => person.id !== Number(id));

//     res.status(200).json({success: true, data: newPeople})
// })

/* API END */

/** Routes Start */

//static assets
app.use(express.static("./methods-public"));
//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

app.use("/login", loginRouter);
app.use("/api/people", peopleRouter);

/** Routes End */



//setup static and middleware
// app.use(express.static("./public"))

/* Middleware Start*/
//req => middleware => res

// app.use([logger,authorize])
// app.use(express.static("./public"));

// app.use(morgan('tiny'));

// app.get("/", (req, res) => {
//     res.status(200).send('<h1>Home Page</h1>');
// })

// app.get("/about",(req, res) => {
//     res.status(200).send("About Page Express");
// })

// // app.get("/api/products", logger, (req, res) => {
// //     res.status(200).send('<h1>Home Page</h1>');
// // })

// app.get("/api/items", [logger, authorize], (req, res) => {
//     console.log(req.user);
//     res.status(200).send("About Page Express");
// })
/* Middleware End */


/* Query Start*/
// app.get("/api/v1/query", (req, res) => {
//     console.log(req.query);
//     const{search, limit} = req.query
//     let sortedProducts = [...products];
//     if (search) {
//         sortedProducts = sortedProducts.filter((product) => {
//             return product.name.startsWith(search)
//         })
//     }
//     if (limit) {
//         sortedProducts = sortedProducts.slice(0, Number(limit));
//     }
//     if (sortedProducts.length < 1) {
//         // res.status(200).send('No products matched');
//         return res.status(200).json({success: true, message: 'No products matched'})
//     }
//     res.status(200).json(sortedProducts);
// })

// app.get("/api/products", (req, res) => {
//     const newProduct = products.map((product) => {
//         const { id, name, image } = product;
//         return { id, name, image}
//     })
//     res.status(200).json(newProduct);
// })

// app.get("/api/products/:productID", (req, res) => {
//     // console.log(req);
//     // console.log(req.params.productID);
//     // const { productID } = req.params;
//     const singleProduct = products.find((product) => product.id === Number(req.params.productID))
//     if (!singleProduct) {
//         res.status(404).send("Product not found");
//     }
//     res.status(200).json(singleProduct);
// })

// app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
//     res.send("hello world");
// })

// app.get("/about", (req, res) => {
//     res.status(200).send("About Page Express");
// })

// app.all("*", (req, res) => {
//     res.status(404).send("<h1>resources not found</h1>")
// })
/* Query End*/

app.listen(5001, () => {
    console.log('server is listening on port 5001...');
})
