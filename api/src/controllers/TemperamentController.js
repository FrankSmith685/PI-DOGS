const axios=require("axios");
const { Temperament } = require("../db");

const apiUrl="https://api.thedogapi.com/v1/breeds";
//Recibimos los datos de la API y retornamos los temperemants
const getApiTemperament=async()=>{
    try{
    const getApi=await axios.get(apiUrl);
    const getApiInfo=await getApi.data.map(el=>el.temperament);
    const newGetApiInfo=[];
    const newTemperaments=[];
   
    for(let i=0;i<getApiInfo.length;i++){
        if(getApiInfo[i]!==undefined){ //Verificamos si tiene undefined en el arreglo
            newGetApiInfo.push(getApiInfo[i].split(", ")); //Divide el objeto en tipo string en un array
            for(let x=0;x<newGetApiInfo.length;x++){
                for(let y=0;y<newGetApiInfo[x].length;y++){
                    newTemperaments.push(newGetApiInfo[x][y]);
                }
            }
        }
    }
    
    const newArregloTemperaments=[];
    newTemperaments.forEach(t=>{
        const nuevoTemperamento=t.trim(); //Elimina los espacios en blanco de cada elemento
        if(!newArregloTemperaments.includes(nuevoTemperamento)){ //si no incluye me tendra que pushear al nuevo arreglo
            newArregloTemperaments.push(nuevoTemperamento);
        }
    })
    //Convertir los datos en un objeto
    const temperaments=newArregloTemperaments.map(el=>{
        return {
            name:el
        }
    })
    //Ordenar los temperamentos del [A-Z] nuevo arreglo
    const orderByTemperaments=temperaments.sort((a,b)=>{
        if(a.name.toLowerCase()>b.name.toLowerCase()){
            return 1;
        }else if(a.name.toLowerCase()<b.name.toLowerCase()){
            return -1;
        }else{
            return 0;
        }
    })

    //Ingresamos los datos a la tabla de Temperaments
    await Temperament.bulkCreate(orderByTemperaments);
    console.log("OK");
    }catch(error){
        console.log("Error :"+error.message);
    }
}

//Recibimos los temperaments
const getAllTemperaments=async()=>{
    return await Temperament.findAll({});
}


module.exports={
    getApiTemperament,
    getAllTemperaments
}