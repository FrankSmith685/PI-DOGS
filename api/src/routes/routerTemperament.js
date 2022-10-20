const {Router}=require("express");
const { getAllTemperaments } = require("../controllers/TemperamentController");

const router=Router();

//GET /temperaments
router.get("/",async(req,res)=>{
    try{
        return res.status(200).json(await getAllTemperaments());
    }catch(error){
        return res.status(404).send(error.message);
    }
    
})

module.exports=router;