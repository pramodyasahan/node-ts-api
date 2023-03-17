import express, {Request, Response} from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    const myName: string = SendMyName()
    console.log(`My Name has sent as the response`)
    res.send(`Hello, World! ${myName}`);
});

export function SendMyName() {
    return `I am Sahan`

}

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
