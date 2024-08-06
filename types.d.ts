export interface Message{
    title: string;
    dateTime: string;
}

export type MessageWhithoutDate = Omit<Message, 'dateTime'>