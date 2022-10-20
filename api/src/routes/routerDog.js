const {Router}=require('express');
const {getAllDogs, getAllDogsByName, getDogsByID, postDogs}=require('../controllers/DogController.js');

const router=Router();

//GET /dogs and GET /dogs?name=...
router.get("/",async (req,res)=>{
    const {name}=req.query;
    try{
        if(!name){
            return res.status(200).json(await getAllDogs());
        }else{
            return res.status(200).json(await getAllDogsByName(name));
        }
    }catch(error){
        return res.status(404).send(error.message);
    }
        
})

//GET /dogs/:id
router.get("/:id",async(req,res)=>{
    const {id}=req.params;
    try{
        return res.status(200).json(await getDogsByID(id));
    }catch(error){
        return res.status(404).send(error.message);
    }
})

//POST /dogs
router.post("/",async(req,res)=>{
    const {name,min_height,max_height,min_weight,max_weight,life_span,temperaments,image}=req.body;
    try{
        return res.status(202).json(await postDogs(name,min_height,max_height,min_weight,max_weight,life_span,temperaments,image));
    }catch(error){
        return res.status(400).send(error.message);
    }
})



module.exports=router;