import { promises as fs } from 'fs';
import { Message, MessageWhithoutDate } from './types';
let data:Message[] = []

const path = './messages';

const fileDb = {
    async init(){
        try{
            const files = await fs.readdir(path);

            files.forEach(file => {
                const fileRead = async ()=>{
                    const message = await fs.readFile(path + '/' + file);
                    const answer:Message = JSON.parse(message.toString())
                    data.push(answer);
                }
                void fileRead()
            });

        }catch(e){
            data = [];
        }
    },
    async getItems(){
        return data;
    },
    async addItem(item: MessageWhithoutDate){
        const message:Message = {
            ...item,
            dateTime: new Date().toISOString(),
        }
        const date = message.dateTime;
        let trueDate = '';
        for (let i = 0; i < date.length; i++) {
            if (date[i] === ":"){
                trueDate = trueDate + "c";
            }else if (date[i] === "."){
                trueDate = trueDate + "d";
            }else {
                trueDate = trueDate + date[i];
            }
        }
        data.push(message);
        await fs.writeFile(`${path}/${trueDate}`, JSON.stringify(message));
        return message;
    }
}

export default fileDb;