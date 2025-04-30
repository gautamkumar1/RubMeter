import Waitlist from "../models/waitlist-model.js";

const createWaitlist = async (req, res) => {
    try {
        const {email} = req.body;
        const isAlreadyInWaitlist = await Waitlist.findOne({email: email})
        if (isAlreadyInWaitlist){
            return res.status(400).json({message: "You are already in the waitlist"})
        }
        await Waitlist.create({email: email})
        return res.status(201).json({message: "You have been added to the waitlist"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Waitlist creation failed"})
        
    }
}

export {createWaitlist}