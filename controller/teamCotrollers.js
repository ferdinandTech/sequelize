import { where } from "sequelize";
import teamModel from "../model/teamModel.js";

export const newteam = async (req,res)=>{
    try{
        const team = await teamModel.create(req.body);
        res.status(201).json({
            data:team
        })
    }catch (error){
        res.status(400).json({
            message: error.message
        })
    }
}
// get all team
export const allteam = async (req,res) => {
    try{
        const team = await teamModel.findAll();
        if (team.length === 0){
            res.status(404).json({
                message: error.message            
            })
        }else{
           res.status(200).json({
            data : team
           })
        }
     
    }catch (error){
        console.log(error)
    }
}
export const updatedTeam = async(req,res)=>{
    try{
        const id = req.params.id;
        const updatedTeam= await teamModel.update(req.body,{where: {id: id}});
        if(updatedTeam[0] == 0){
            res.status(404).json({
                message: `No such teamid: ${id}`
            });
            console.log(updatedTeam[0])
        }else{
            res.status(200).json({
                message: 'updated successfully',
                data: updatedTeam
            })
        }
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}
export const singleTeam = async(req,res)=>{
    try{
        const id = req.params.id;
      const team = await teamModel.findAll({
        where : {id: id}
      });
      if(team.length === 0){
        res.status(404).json({
            message: `No such id: ${id}`
        });
        console.log(ClubInfoTable[0].id)
      }else{
        res.status(200).json({
            data: team[0]
        })
      }
    }catch(error){
        res.status(404).json({
            message: error.message
        })
    }
}
export const deleteTeam = async(req,res)=>{
    try{
        const id = req.params.id;
        const deleteTeam = await teamModel.destroy({where: {id: id}});
        if(deleteTeam == [0]){
            res.status(404).json({
                message: `No such id: ${id}`
            })
            console.log(err.message)
        }else{
            res.status(200).json({
                message: 'successfully deleted Unuseful team',
            })
        }
    }catch{
        console.log(err.message)
    }
}