import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllDogs, getAllTemperament, postDog } from "../redux/action";
import './styles/CreateDogs.css';

export const CreateDogs=()=>{
    const dispatch=useDispatch();
    const temperaments=useSelector(state=>state.temperament)
    const dogs=useSelector(state=>state.dogs);
    useEffect(()=>{
        dispatch(getAllTemperament());
        dispatch(getAllDogs());
    },[dispatch])

    const [state,setState]=useState({
        name:"",
        min_height:"",
        max_height:"",
        min_weight:"",
        max_weight:"",
        life_span:"",
        temperaments:[]
    });
    //Estado de Errores
    const [error,setError]=useState({
        name:false,
        min_height:false,
        max_height:false,
        min_weight:false,
        max_weight:false,
        life_span:false,
        temperaments:false

    })
    //Estado de Validate
    const [validate,setValidate]=useState({
        name:false,
        min_height:false,
        max_height:false,
        min_weight:false,
        max_weight:false,
        life_span:false,
    })
    //Estado para el temeperamento
    const [temperamento,setTemperamento]=useState({
        name:""
    })


    //validar los campos
    //Expresiones
    const expresiones={
        name: /^[a-zA-Z]{1,40}$/,
        height_weight: /^[0-9]{1,2}$/,
        life_span: /^[a-zA-Z0-9ñÑ ]{1,40}$/,
    }
    function validarExpresiones(ev){
        switch (ev.target.name) {
            case "name":
                if(ev.target.value===""){
                    setError({...error,name:true});
                    setValidate({...validate,name:false});
                }else{
                    if(expresiones.name.test(ev.target.value)){
                        setValidate({...validate,name:false});
                    }else{
                        setValidate({...validate,name:true});
                    }
                }
                break;
            case "min_height":
                if(ev.target.value===""){
                    setError({...error,min_height:true});
                    setValidate({...validate,min_height:false});
                }else{
                    if(expresiones.height_weight.test(ev.target.value)){
                        setValidate({...validate,min_height:false});
                    }else{
                        setValidate({...validate,min_height:true});
                    }
                }
                break;
            case "max_height":
                if(ev.target.value===""){
                    setError({...error,max_height:true});
                    setValidate({...validate,max_height:false});
                }else{
                    if(expresiones.height_weight.test(ev.target.value)){
                        setValidate({...validate,max_height:false});
                    }else{
                        setValidate({...validate,max_height:true});
                    }
                }
                break;
            case "min_weight":
                if(ev.target.value===""){
                    setError({...error,min_weight:true});
                    setValidate({...validate,min_weight:false});
                }else{
                    if(expresiones.height_weight.test(ev.target.value)){
                        setValidate({...validate,min_weight:false});
                    }else{
                        setValidate({...validate,min_weight:true});
                    }
                }
                break;
            case "max_weight":
                if(ev.target.value===""){
                    setError({...error,max_weight:true});
                    setValidate({...validate,max_weight:false});
                }else{
                    if(expresiones.height_weight.test(ev.target.value)){
                        setValidate({...validate,max_weight:false});
                    }else{
                        setValidate({...validate,max_weight:true});
                    }
                }
                break;
            case "life_span":
                if(ev.target.value===""){
                    setError({...error,life_span:true});
                    setValidate({...validate,life_span:false});
                }else{
                    if(expresiones.life_span.test(ev.target.value)){
                        setValidate({...validate,life_span:false});
                    }else{
                        setValidate({...validate,life_span:true});
                    }
                }
                break;
            default:
                break;
        }
    }

    

    //Validamos los componentes
    //=>NAME
    function onChangeName(ev){
        setState({...state,name:ev.target.value});
        setError({...error,name:false});
    }
    function onBlurName(ev){
        validarExpresiones(ev);
    }
    function onKeyName(ev){
        validarExpresiones(ev);
    }
    
    //=>MIN HEIGHT
    function onChangeMinHeight(ev){
        setState({...state,min_height:ev.target.value});
        setError({...error,min_height:false});
    }
    function onBlurMinHeight(ev){
        validarExpresiones(ev);
    }
    function onKeyMinHeight(ev){
        validarExpresiones(ev);
    }

    //=>MAX HEIGHT
    function onChangeMaxHeight(ev){
        setState({...state,max_height:ev.target.value});
        setError({...error,max_height:false});
    }
    function onBlurMaxHeight(ev){
        validarExpresiones(ev);
    }
    function onKeyMaxHeight(ev){
        validarExpresiones(ev);
    }

    //=>MIN WEIGHT
    function onChangeMinWeight(ev){
        setState({...state,min_weight:ev.target.value});
        setError({...error,min_weight:false});
    }
    function onBlurMinWeight(ev){
        validarExpresiones(ev);
    }
    function onKeyMinWeight(ev){
        validarExpresiones(ev);
    }

    //=>MAX WEIGHT
    function onChangeMaxWeight(ev){
        setState({...state,max_weight:ev.target.value});
        setError({...error,max_weight:false});
    }
    function onBlurMaxWeight(ev){
        validarExpresiones(ev);
    }
    function onKeyMaxWeight(ev){
        validarExpresiones(ev);
    }

    //Life Span
    function onChangeLifeSpan(ev){
        setState({...state,life_span:ev.target.value});
        setError({...error,life_span:false});
    }
    function onBlurLifeSpan(ev){
        validarExpresiones(ev);
    }
    function onKeyLifeSpan(ev){
        validarExpresiones(ev);
    }


    
    function onChangeSelectTemperament(ev){
        if(!state.temperaments.includes(ev.target.value)){
            setState({...state,temperaments:[...state.temperaments,ev.target.value]});
            setError({...error,temperaments:false})
            setTemperamento({...temperamento,name:ev.target.value});
        }
    }


    function onClickDeleteTemperament(t){
        setState({...state,temperaments:[...state.temperaments].filter(tem=>tem!==t)});
    }
    

    function onClickSubmit(){
        if(state.name==="" && state.min_height==="" && state.max_height==="" && state.min_weight==="" && state.max_weight==="" && state.life_span==="" && temperamento.name===""){
            setError({...error,name:true,min_height:true,max_height:true,min_weight:true,max_weight:true,life_span:true,temperaments:true});
        }else if(state.name!=="" && state.min_height==="" && state.max_height==="" && state.min_weight==="" && state.max_weight==="" && state.life_span==="" && temperamento.name===""){
            setError({...error,name:false,min_height:true,max_height:true,min_weight:true,max_weight:true,life_span:true ,temperaments:true});
        }else if(state.name!=="" && state.min_height!=="" && state.max_height==="" && state.min_weight==="" && state.max_weight==="" && state.life_span==="" && temperamento.name===""){
            setError({...error,name:false,min_height:false,max_height:true,min_weight:true,max_weight:true,life_span:true ,temperaments:true});
        }else if(state.name!=="" && state.min_height!=="" && state.max_height!=="" && state.min_weight==="" && state.max_weight==="" && state.life_span==="" && temperamento.name===""){
            setError({...error,name:false,min_height:false,max_height:false,min_weight:true,max_weight:true,life_span:true ,temperaments:true});
        }else if(state.name!=="" && state.min_height!=="" && state.max_height!=="" && state.min_weight!=="" && state.max_weight==="" && state.life_span==="" && temperamento.name===""){
            setError({...error,name:false,min_height:false,max_height:false,min_weight:false,max_weight:true,life_span:true ,temperaments:true});
        }else if(state.name!=="" && state.min_height!=="" && state.max_height!=="" && state.min_weight!=="" && state.max_weight!=="" && state.life_span==="" && temperamento.name===""){
            setError({...error,name:false,min_height:false,max_height:false,min_weight:false,max_weight:false,life_span:true ,temperaments:true});
        }else if(state.name!=="" && state.min_height!=="" && state.max_height!=="" && state.min_weight!=="" && state.max_weight!=="" && state.life_span!=="" && temperamento.name===""){
            setError({...error,name:false,min_height:false,max_height:false,min_weight:false,max_weight:false,life_span:false,temperaments:true});
        }else{
            if(dogs?.some(d=>d.name===state.name)){
                alert("Error: El Dog name ya existe");
            }else if(state.name==="" ){
                setError({...error,name:true,min_height:true,max_height:true,min_weight:true,max_weight:true,life_span:true,temperaments:true});
            }else if(state.min_height>=state.max_height){
                alert("height min must be less than height max");
            }else if(state.min_weight>=state.max_weight){
                alert("weight min must be less than weight max");
            }else{
                dispatch(postDog(state));
                setState({...state,name:"",min_height:"",max_height:"",min_weight:"",max_weight:"",life_span:"",temperaments:[]});
                setTemperamento({...temperamento,name:"All"})
                alert("Se ha creado correctamente");
            }

        }
    
    }
    
    return(
        <div className="containerDogs">
            <div className="dogsmenu">
                <Link to="/Home"><button>Go Home</button></Link>
            </div>
            <div className="SubContainerDogs">
                <div className="creatingDogs">
                <h2>Create Dogs</h2>
                
                    <div className="nameDogs">
                        <label>Name: </label>
                        <input type="text" onChange={(ev)=>onChangeName(ev)} value={state.name} name="name" onBlur={(ev)=>onBlurName(ev)} onKeyUp={(ev)=>onKeyName(ev)} placeholder="Enter the dog's name" />
                        {
                            (error.name && !validate.name )&& (
                                <p>No dejar los espacios en blanco</p>
                            )
                        }
                        {
                            validate.name && (
                                <p>Debe contener caracteres correctamente</p>
                            )
                        }
                    </div>

                    <div className="minHeightDogs">
                        <label>Min Height: </label>
                        <input type="text" onChange={(ev)=>onChangeMinHeight(ev)} value={state.min_height} name="min_height" onBlur={(ev)=>onBlurMinHeight(ev)} onKeyUp={(ev)=>onKeyMinHeight(ev)} placeholder="Enter the dog's min height." />
                        {
                            (error.min_height && !validate.min_height )&& (
                                <p>No dejar los espacios en blanco</p>
                            )
                        }
                        {
                            validate.min_height && (
                                <p>Debe contener caracteres correctamente</p>
                            )
                        }
                    </div>
                    <div className="maxHeightDogs">
                        <label>Max Height: </label>
                        <input type="text" onChange={(ev)=>onChangeMaxHeight(ev)} value={state.max_height} name="max_height" onBlur={(ev)=>onBlurMaxHeight(ev)} onKeyUp={(ev)=>onKeyMaxHeight(ev)} placeholder="Enter the dog's max height." />
                        {
                            (error.max_height && !validate.max_height )&& (
                                <p>No dejar los espacios en blanco</p>
                            )
                        }
                        {
                            validate.max_height && (
                                <p>Debe contener caracteres correctamente</p>
                            )
                        }
                    </div>

                    <div className="minWeightDogs">
                        <label>Min Weight: </label>
                        <input type="text" onChange={(ev)=>onChangeMinWeight(ev)} value={state.min_weight} name="min_weight" onBlur={(ev)=>onBlurMinWeight(ev)} onKeyUp={(ev)=>onKeyMinWeight(ev)} placeholder="Enter the dog's min weight."/>
                        {
                            (error.min_weight && !validate.min_weight )&& (
                                <p>No dejar los espacios en blanco</p>
                            )
                        }
                        {
                            validate.min_weight && (
                                <p>Debe contener caracteres correctamente</p>
                            )
                        }
                    </div>
                    <div className="maxHeightDogs">
                        <label>Max Weight: </label>
                        <input type="text" onChange={(ev)=>onChangeMaxWeight(ev)} value={state.max_weight} name="max_weight" onBlur={(ev)=>onBlurMaxWeight(ev)} onKeyUp={(ev)=>onKeyMaxWeight(ev)} placeholder="Enter the dog's max weight." />
                        {
                            (error.max_weight && !validate.max_weight )&& (
                                <p>No dejar los espacios en blanco</p>
                            )
                        }
                        {
                            validate.max_weight && (
                                <p>Debe contener caracteres correctamente</p>
                            )
                        }
                    </div>
                    

                    <div className="LifeSpanDogs">
                        <label>Life Span: </label>
                        <input type="text" onChange={(ev)=>onChangeLifeSpan(ev)} value={state.life_span} name="life_span" onBlur={(ev)=>onBlurLifeSpan(ev)} onKeyUp={(ev)=>onKeyLifeSpan(ev)} placeholder="Enter the dog's Life Span."/>
                        {
                            (error.life_span && !validate.life_span )&& (
                                <p>No dejar los espacios en blanco</p>
                            )
                        }
                        {
                            validate.life_span && (
                                <p>Debe contener caracteres correctamente</p>
                            )
                        }
                    </div>
                    <div className="TemperamentsDogs">
                        <label>Temperaments: </label>
                        <select onChange={(ev)=>onChangeSelectTemperament(ev)} value={temperamento.name} name="temperamento">
                            <option value="All">Select Dogs: </option>
                            {
                                temperaments?.map(t=>{
                                    return(
                                        <option key={t.id} value={t.name}>{t.name}</option>
                                    )
                                })
                            }
                        </select>
                        {
                            error.temperaments && (
                                <p>Debe seleccionar algun temperamento</p>
                            )
                        }
                        
                    </div>
                    <div className="temp">
                            {
                                state.temperaments?.map(t=>{
                                    return(
                                        <div key={t}>
                                            <p>{t}</p>
                                            <button onClick={()=>onClickDeleteTemperament(t)}>X</button>
                                        </div>
                                    )
                                })
                            }
                    </div>
                    <div>
                        <button onClick={()=>onClickSubmit()}>submit</button>
                    </div>
                
                </div>
            </div>
        </div>
    )
}
