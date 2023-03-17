import express, {Request, Response} from 'express';

const app = express();

let number: number = 0

app.get('/', (req: Request, res: Response) => {
    const myName: string = SendMyName()
    let response: string = `Hello, World! ${myName},\n and the new number is ${number}`;
    console.log(`My Name has sent as the response`, response)
    res.send(response);
});

app.get('/reset', (req: Request, res: Response) => {
    number = 0
    console.log(`My Name has sent as the response`, `Number has been reset, and the new number is ${number}`)
    let numberResetResponse: string = `Number has been reset, and the new number is ${number}`;
    res.send(numberResetResponse);
});

export function SendMyName() {
    number += 1;
    return `I am Sahan`
}

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
