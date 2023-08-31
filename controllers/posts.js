import express from 'express';
import Message from '../models/messages.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const messages = await Message.find();
                
        res.status(200).json(messages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createPost = async (req, res) => {
    const { message, creator } = req.body;

    const newMessage = new Message({ message, creator })

    try {
        await newMessage.save();

        res.status(201).json(newMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;