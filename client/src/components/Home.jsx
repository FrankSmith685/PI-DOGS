import React from "react";
import { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import { getAllDogs, getAllDogsByName, getAllDogsByTemperament, getAllDogsexistandCreated, getAllTemperament, getOrderByDogs, getOrderByPesoDogs } from "../redux/action";
import './styles/Home.css';

import {Cards} from './Cards.jsx';
import { SearchBar } from "./SearchBar.jsx";
import {Pagination} from './Pagination.jsx';

export const Home=()=>{
    //Definimos el dispatch
    const dispatch=useDispatch();
    //traemos los state de Reducer
    const dogs=useSelector(state=>state.dogs);
    const temperament=useSelector(state=>state.temperament);
    //creamos un estado global
    const [state,setState]=useState({
        value:"",
        dogs:"",
        orderDogs:"",
        orderPeso:"",
        currentPage:1,
        nroPaginado:8
    });
    
    //Validar la paginacion 
    const ultimoPage=state.nroPaginado*state.currentPage;
    const primerPage=ultimoPage-state.nroPaginado;
    const mainDogs=dogs?.slice(primerPage,ultimoPage);

    //utilizamos el useEffect
    useEffect(()=>{
        dispatch(getAllDogs());
        dispatch(getAllTemperament());
    },[dispatch])

    //Paginacion
    function onClickPagination(numero){
        setState({...state,currentPage:numero});
    }

    //Metodos
    function onChangeSearchBarDog(ev){
        setState({...state,value:ev.target.value})
    }
    function onClickDog(){
        dispatch(getAllDogsByName(state.value));
        setState({...state,value:"",currentPage:1});
    }
    function onClickRefress(){
        onClickPagination(1);
        dispatch(getAllDogs());
    }

    function onChangeTemperament(ev){
        dispatch(getAllDogsByTemperament(ev.target.value));
        setState({...state,dogs:"All",currentPage:1});
    }

    function onChangeDogs(ev){
        dispatch(getAllDogsexistandCreated(ev.target.value));
        setState({...state,dogs:ev.target.value,currentPage:1});
    }

    function onChangeOrderDogs(ev){
        dispatch(getOrderByDogs(ev.target.value));
        setState({...state,orderDogs:ev.target.value,currentPage:1});
    }

    function onChangeOrderPesoDogs(ev){
        dispatch(getOrderByPesoDogs(ev.target.value));
        setState({...state,orderPeso:ev.target.value,currentPage:1})
    }

    



    return(
        <div className="container">
            <header className="header">
                <SearchBar 
                onChangeSearchBarDog={onChangeSearchBarDog}
                onClickDog={onClickDog}
                value={state.value}
                onClickRefress={onClickRefress}
                />
                <div className="subcontainer">
                <select onChange={(ev)=>onChangeTemperament(ev)}  >
                    
                    <option value="AllTemperament">All</option>
                    {
                        temperament?.map(t=>{
                            return(
                                <option key={t.id} value={t.name}>{t.name}</option>
                            )
                        })
                    }
                </select>

                <select onChange={(ev)=>onChangeDogs(ev)} value={state.dogs}>
                    <option value="All" >All </option>
                    <option value="created" >created</option>
                    <option value="existing">existing</option>
                </select>

                <select onChange={(ev)=>onChangeOrderDogs(ev)}>
                    <option value="OrderBy">Order By Dogs</option>
                    <option value="ascDogs">[A-Z]</option>
                    <option value="descDogs">[Z-A]</option>
                </select>

                <select onChange={(ev)=>onChangeOrderPesoDogs(ev)}>
                    <option value="OrderByPeso">Order By Peso</option>
                    <option value="ascPeso">asc</option>
                    <option value="descPeso">desc</option>
                </select>        
                </div>
            </header>
            <div className="card">
                {
                    mainDogs?.map(d=>{
                        if(d.weight[1]===undefined){
                            var weight_max="";
                        }
                        
                       var name=[]
                        d.temperaments.forEach(t=>{
                            if(t.name){
                                name.push(t.name);
                            }else{
                                name.push(t);
                            }
                        })
                        return(
                            <div key={d.id}>
                                <Link to={`/home/${d.id}`}><Cards
                                name={d.name}
                                image={d.image}
                                temperament={name.join(" ")}
                                weight_min={"Weight min: "+d.weight[0]+"Kg"}
                                weight_max={d.weight[1]?"Weight max: "+d.weight[1]+"Kg":weight_max}
                                heigh_min={"Height min:"}
                                heigh_max={"Height_max:"}
                                /></Link>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <Pagination 
                totalPagination={dogs?.length}    
                nroPaginado={state.nroPaginado}
                onClickPagination={onClickPagination}
                />
            </div>
        </div>
    );
}