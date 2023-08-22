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
    
    // reading of the contact details 

    async readcontact( req , res ){
        const contactInfo = req.body; // Assuming req.body contains the fields you want to search for

            try {
            // Use contactInfo directly in the query without curly braces
            const docs = await contactModel.findOne(contactInfo).exec();

            if (docs) {
                console.log("Doc", docs);
                res.json({ message: "Searched contacts", record: docs });
            } else {
                // If no document is found, you might want to send a different response
                res.json({ message: "Contact not found" });
            }
            } catch (error) {
            // Handle any errors that occur during the database query
            res.json({ error: error.message });
            }

    },

    // reading the all contacts 
    async readallcontacts( req , res ){
        try{
            const docs = await contactModel.find({}).exec();
            res.json({message:'All Records ', records: docs});
            }
            catch(err){
                console.log('Error in Questions ', err);
                res.json({message:'Error in Questions ', records: docs});
            }
    },

    // updating the data of the contact 
    async updatecontact( req , res){
        const contactId = req.params.contactid;
        const updatedContactData = req.body;

    try {
        const result = await contactModel.findOneAndUpdate(
            { _id: contactId },
            { $set: updatedContactData },
            { new: true }
        ).exec();

        if (result) {
            res.json({ message: "Contact updated", updatedContact: result });
        } else {
            res.json({ message: "Contact not found or no changes made" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
    },

    // Removing the contact details from the db 
    async removecontact( req , res ){
        console.log("Enter");
        const contactId = req.params.contactid;
        const updatedContactData = req.body;
        try {
            const result = await contactModel.findOneAndRemove({ _id: contactId }).exec();
    
            if (result) {
                res.json({ message: "Contact removed", removedContact: result });
            } else {
                res.json({ message: "Contact not found" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}