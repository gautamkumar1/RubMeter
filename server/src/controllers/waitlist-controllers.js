import { prisma } from "../database/db.config.js";

const createWaitlist = async (req, res) => {
    try {
        const {email} = req.body;
        const isAlreadyInWaitlist = await prisma.waitlist.findUnique({
            where:{email: email}
        })
        if (isAlreadyInWaitlist){
            return res.status(400).json({message: "You are already in the waitlist"})
        }
        await prisma.waitlist.create({
            data: {
                email: email
            }
        })
        return res.status(201).json({message: "You have been added to the waitlist"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Waitlist creation failed"})
        
    }
}

export {createWaitlist}