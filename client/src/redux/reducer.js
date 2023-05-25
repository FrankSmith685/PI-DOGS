import { GET_ALL_DOGS, GET_ALL_DOGS_BY_NAME, GET_ALL_DOGS_BY_TEMPERAMENT, GET_ALL_DOGS_EXISTENT_AND_CREATED, GET_ALL_TEMPERAMENTS, GET_DETAIL_DOGS, GET_ORDER_BY_DOGS, GET_ORDER_BY_PESO_DOGS, POST_DOG } from "./action";

const initialState={
    dogs:[],
    all_dogs:[],
    dogsexiste:[],
    temperament:[],
    detail_dogs:[]
}

export const rootReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_ALL_DOGS:
            return{
                ...state,
                dogs:action.payload,
                all_dogs:action.payload,
                dogsexiste:action.payload
            }

        case GET_ALL_DOGS_BY_NAME:
            return{
                ...state,
                dogs:action.payload
            }

        case GET_ALL_DOGS_BY_TEMPERAMENT:
            const allDogs = state.all_dogs;
            const nuevoTemperament=[];
            state.all_dogs.map(d=>d.temperaments.forEach(t=>{
                if(t===action.payload || t.name===action.payload){
                    nuevoTemperament.push(d);
                }

            }));
            if(action.payload==="AllTemperament"){
                return{
                    ...state,
                    dogs:allDogs,
                    dogsexiste:allDogs
                }
            }else{
                return{
                    ...state,
                    dogs:nuevoTemperament,
                    dogsexiste:nuevoTemperament
                }
            }

        case GET_ALL_TEMPERAMENTS:
            return {
                ...state,
                temperament:action.payload
            }
        case GET_ALL_DOGS_EXISTENT_AND_CREATED:
            var nuevo=state.all_dogs; //me trae todo
            var dogsexiste=state.dogsexiste //me trae todo pero se modifica siempre
            var a=[];
            var b=[];
            

            for(let i=0;i<nuevo.length;i++){
                    if(typeof nuevo[i].id==="number"){
                        for(let x=0;x<dogsexiste.length;x++){
                            if(nuevo[i]['name']===dogsexiste[x]['name']){
                                a.push(nuevo[i]);
                            }
                        }
                    }else{
                        for(let x=0;x<dogsexiste.length;x++){
                            if(nuevo[i]['name']===dogsexiste[x]['name']){
                                b.push(nuevo[i]);
                            }
                        }
                    }
                }

    
            if(action.payload==="created"){
                    return{
                        ...state,
                        dogs:b
                       }
            }
            else if(action.payload==="existing"){
                console.log(a);
                    return{
                        ...state,
                        dogs:a,
                    }
                }
            else{
                return{
                    ...state,
                    dogs:a.concat(b)
                }
            }
        case GET_ORDER_BY_DOGS:
            var order_by_dog=state.dogs;

            if(action.payload==="ascDogs"){
                const ascDogs=order_by_dog.sort((a,b)=>{
                    if(a.name.toLowerCase()>b.name.toLowerCase()){
                        return 1;
                    }else if(a.name.toLowerCase()<b.name.toLowerCase()){
                        return -1;
                    }else{
                        return 0;
                    }
                })
                return{
                    ...state,
                    dogs:ascDogs,
                    
                }
            }
            else if(action.payload==="descDogs"){
                const descDogs=order_by_dog.sort((a,b)=>{
                    if(a.name.toLowerCase()>b.name.toLowerCase()){
                        return -1;
                    }else if(a.name.toLowerCase()<b.name.toLowerCase()){
                        return 1;
                    }else{
                        return 0;
                    }
                })
                return{
                    ...state,
                    dogs:descDogs
                }
            }
            else{ 
                
                return{
                    ...state,
                    dogs:state.dogs
                }
            }

        case GET_ORDER_BY_PESO_DOGS:
            
            if(action.payload==="ascPeso"){
                const ascPeso=state.dogs.sort((a,b)=>
                a.weight[0]-b.weight[0]);
                return{
                    ...state,
                    dogs:ascPeso
                }
            }else if(action.payload==="descPeso"){
                const descPeso=state.dogs.sort((a,b)=>
                b.weight[0]-a.weight[0]);
                return{
                    ...state,
                    dogs:descPeso
                }
            }else{
                return{
                    ...state,
                    dogs:state.dogs
                }
            }
            
        case GET_DETAIL_DOGS:
            return{
                ...state,
                detail_dogs:action.payload
            }
        
        case POST_DOG:
            return{
                ...state
            }
        
        default:
            return {...state}
    }
}