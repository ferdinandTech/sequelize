import('./config/teamConfig.js');
import express from 'express';
import teamRouter from './Routes/teamRoutes.js';


const app = express()
const PORT = 5050;
app.use(express.json());
app.use('/api',teamRouter);
app.listen(PORT, ()=>{
    console.log(`server listening to port: ${PORT}`)
});