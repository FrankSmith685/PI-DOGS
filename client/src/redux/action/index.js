import axios from 'axios';

export const GET_ALL_DOGS ="GET_ALL_DOGS";
export const GET_ALL_DOGS_BY_NAME="GET_ALL_DOGS_BY_NAME";
export const GET_ALL_DOGS_BY_TEMPERAMENT="GET_ALL_DOGS_BY_TEMPERAMENT";
export const GET_ALL_TEMPERAMENTS="GET_ALL_TEMPERAMENTS";
export const GET_ALL_DOGS_EXISTENT_AND_CREATED="GET_ALL_DOGS_EXISTENT_AND_CREATED";
export const GET_ORDER_BY_DOGS="GET_ORDER_BY_DOGS";
export const GET_ORDER_BY_PESO_DOGS="GET_ORDER_BY_PESO_DOGS";
export const GET_DETAIL_DOGS="GET_DETAIL_DOGS";
export const POST_DOG="POST_DOG";

//Listar todos los DOGS
export const getAllDogs=()=>{
    return (dispatch)=>{
        return axios.get("http://localhost:3001/dogs")    
        .then(res=>{
            dispatch({
                type:GET_ALL_DOGS,
                payload:res.data
            })
        }).catch(error=>{
            console.log(error);
        })
    }
}

//Listar todos los DOGS por name
export const getAllDogsByName=(name)=>{
    return (dispatch)=>{   
        if(name===""){
            alert("NOT FOUND");
        }else{
            return axios.get(`http://localhost:3001/dogs?name=${name}`)
        .then(res=>{
            dispatch({
                type:GET_ALL_DOGS_BY_NAME,
                payload:res.data
            })
        })
        .catch(()=>{
            alert("DOG NOT FOUND");
        })
        }
    }
}

//Listar todos los DOGS por temperaments
export const getAllDogsByTemperament=(payload)=>{
    return{
        type:GET_ALL_DOGS_BY_TEMPERAMENT,
        payload
    }
}

//Listar todos los TEMPERAMENTS
export const getAllTemperament=()=>{
    try{
        return async dispatch=>{
            const json=await axios.get("http://localhost:3001/temperaments");
            return dispatch({
                type:GET_ALL_TEMPERAMENTS,
                payload:json.data
            })
        }
    }catch(error){
        console.log(error);
    }
}

//Listart todos los DOGS por existentes y creados
export const getAllDogsexistandCreated=(payload)=>{
    return{
        type:GET_ALL_DOGS_EXISTENT_AND_CREATED,
        payload
    }
}

//Ordenar DOGS por name
export const getOrderByDogs=(payload)=>{
    return{
        type:GET_ORDER_BY_DOGS,
        payload
    }
}

//Ordenar DOGS por peso
export const getOrderByPesoDogs=(payload)=>{
    return{
        type:GET_ORDER_BY_PESO_DOGS,
        payload
    }
}

//Mostrar el detalle de cada DOG
export const getDetailDogs=(id)=>{
    try{
        return async(dispatch)=>{
            var json=await axios.get(`http://localhost:3001/dogs/${id}`);
            return dispatch({
                type:GET_DETAIL_DOGS,
                payload:json.data
            })
        }
    }catch(error){
        console.log(error);
    }
}

//Crear un nuevo DOG
export const postDog=(payload)=>{
    return async(dispatch)=>{
        await axios.post("http://localhost:3001/dogs",payload)
        .then(res=>{
            return dispatch({
                type:POST_DOG,
                payload:res
            });
        }).catch(error=>{
            alert("No se ha creado");
        })
    }
}






