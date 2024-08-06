import express from 'express';
import fileDb from '../fileDb';
import { MessageWhithoutDate } from '../types';

const messageRouter = express.Router();

messageRouter.get('/', async(reg, res)=>{
    const messages = await fileDb.getItems();

    res.send(messages)
})

messageRouter.post('/', async(reg, res)=>{
    const product:MessageWhithoutDate = {
        title: reg.body.title
    }

    const savedMessage = await fileDb.addItem(product)

    res.send(savedMessage)
})

export default messageRouter;