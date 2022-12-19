import express from 'express';
import { allteam, deleteTeam, newteam, singleTeam, updatedTeam } from '../controller/teamCotrollers.js';

const teamRouter = express.Router();

teamRouter.post('/team',newteam);
teamRouter.get('/team', allteam);
teamRouter.patch('/team/:id',updatedTeam);
teamRouter.get('/team/:id',singleTeam);
teamRouter.delete('/team/:id',deleteTeam);
export default teamRouter;