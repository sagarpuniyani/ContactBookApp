import express from "express";
import { contactcontroller } from "../controller/contact-controller.js";

export const contactdetailsRoutes = express.Router();

// Crud operations 

// 1. create 
contactdetailsRoutes.post('/addcontact'  , contactcontroller.addcontact);


// 2. read 
contactdetailsRoutes.get('/getcontact/:name' , contactcontroller.readcontact);

//3. update 
contactdetailsRoutes.put('/updatecontact/:name' , contactcontroller.updatecontact);

//4. delete 
contactdetailsRoutes.delete('/removeContact/:name' , contactcontroller.removecontact);