const axios=require('axios');
const {Dog, Temperament}=require("../db.js");

const apiUrl="https://api.thedogapi.com/v1/breeds";
//Recibimos los datos de la API
const getApiData=async()=>{
    const getApi=await axios.get(apiUrl);
    const getApiInfo=await getApi.data.map(el=>{
        let heightArray=[];
        let weightArray=[];
        let temperament=[];
        if(el.height.metric){
            heightArray=el.height.metric.split(" - "); //va a dividir el objeto de tipo string
        }
        if(el.weight.metric){
            weightArray=el.weight.metric.split(" - "); //va a dividir el objeto de tipo string
        }
        if(el.temperament){
            temperament=el.temperament.split(", "); //va a dividir el objeto de tipo string
        }
        return{
            id:el.id,
            name:el.name,
            height:heightArray,
            weight:weightArray,
            temperaments:temperament,
            life_span:el.life_span,
            image:el.image.url
        }
    });
    return getApiInfo;
}

//Recibimos los datos de la base de datos creadas
const getDBData=async()=>{
    return await Dog.findAll({
        include:{
            model:Temperament,
            attributes: ['name'], //atributos que quiero traer del modelo Temperament, el id lo trae automatico
            through: {
                attributes: [],//traer mediante los atributos del modelo
            },
        }
    });
}

//Convinamos los datos de la API y DB y retronamos todos los DOGS
//Recibimos todos los DOGS
const getAllDogs=async()=>{
    const DataFromAPI=await getApiData();
    const DataFromDB=await getDBData();
    // return [...DataFromAPI,...DataFromDB];
    return DataFromAPI.concat(DataFromDB);
}

//Recibimos todos los DOGS por name
const getAllDogsByName=async(name)=>{
    const AllDogs=await getAllDogs();
    const DogsByName=AllDogs.filter(d=>{
        if(d.name.toLowerCase().includes(name.toLowerCase())){
            return d;
        }
    });
    if(DogsByName<=0){
        throw new Error("Error: No existe DOGS");
    }else{
        return DogsByName;
    }
}

//Recibimos el detalle de DOGS por id
const getDogsByID=async(id)=>{
    const AllDogs=await getAllDogs();
    const DogsById=AllDogs.find(d=>{
        if(d.id==id){
            return d;
        }
    });
    if(!DogsById){
        throw new Error("Error: No existe detalle de DOGS");
    }else{
        return DogsById;
    }
}

//Creacion de un nuevo DOG
const postDogs=async(name,min_height,max_height,min_weight,max_weight,life_span,temperaments,image)=>{
    const AllDogs=await getAllDogs();
    //validamos
    if(AllDogs.some(d=>d.name===name)){
        throw new Error("Ya existe Dogs");
    }else if(!name || !min_height || !max_height || !min_weight || !max_weight || !life_span || !temperaments){
        throw new Error("Error: Debe completar los campos");
    }else if(min_height>max_height){
        throw new Error(`Error : ${min_height} debe ser menor que ${max_height}`);
    }else if(min_weight>max_weight){
        throw new Error(`Error : ${min_weight} debe ser menor que ${max_weight}`);
    }else{
        //Guardar los datos de height en un arreglo vacio
        const fixedHeight = []
        const minHeight = min_height;
        const maxHeight = max_height;
        fixedHeight.push(minHeight, maxHeight);
        //Guardar los datos de weight en un arreglo vacio
        const fixedWeight = []
        const minWeight = min_weight;
        const maxWeight = max_weight;
        fixedWeight.push(minWeight, maxWeight);

        const dog=await Dog.create({
            name:name,
            height:fixedHeight,
            weight:fixedWeight,
            life_span:life_span,
            image:image?image:"https://png.pngtree.com/png-vector/20210703/ourlarge/pngtree-kawaii-dog-cartoon-vector-illustration-png-image_3541059.jpg"
        });

        //Filtramos todos los temperaments de la DB "Name"
        const temperament=await Temperament.findAll({
            where:{
                name:temperaments
            }
        });

        dog.addTemperament(temperament);
        return "Se agregó correctamente";
    }


}



module.exports={
    getAllDogs,
    getAllDogsByName,
    getDogsByID,
    postDogs
}