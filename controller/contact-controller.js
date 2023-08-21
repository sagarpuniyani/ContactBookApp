import { contactModel } from "../model/contact-modle.js";

export const contactcontroller = {
    async addcontact( req , res ){
        const contantInfo = req.body;

        // creating the doc  in the data base 
        try{
        const doc = await contactModel.create(contantInfo);
        res.json({message : "contact Added " , record : doc})
        }
        catch(err){
            console.log("Error in the Creation Contact " , err)
        }
    },
    readcontact( req , res ){
        const contactName = req.params.name;
        res.json({message : contactName +" contact Readed "})
    },
    updatecontact( req , res ){
        const contactName = req.params.name;
        res.json({message : contactName + " contact updated "})
    },
    removecontact( req , res ){
        const contactName = req.params.name;
        res.json({message : contactName +" contact Removed "})
    }
}