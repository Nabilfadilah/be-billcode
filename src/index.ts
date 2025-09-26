    // src/index.ts
    import express, { Express, Request, Response } from 'express';

    const app: Express = express();
    const port: number = 3500;

    app.get('/', (req: Request, res: Response) => {
      res.send('Halo Dunia dari Server Express dengan TypeScript!');
    });

    app.listen(port, () => {
      console.log(`Server berjalan di http://localhost:${port}`);
    });