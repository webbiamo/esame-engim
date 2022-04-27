export interface Message {
    id: number,
    userId: string,
    type: 'incoming' | 'outcoming',
    message: string
}
