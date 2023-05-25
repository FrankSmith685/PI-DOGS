import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllDogs, getAllTemperament, postDog } from "../redux/action";

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
        <div className="bg-gray-100 py-8 px-4">
  <div className="max-w-md mx-auto bg-gray-800 text-white rounded-lg overflow-hidden shadow-md">
    <div className="p-4">
      <Link to="/home">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Home
        </button>
      </Link>
    </div>
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Create Dogs</h2>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Name:</label>
        <input
          type="text"
          onChange={(ev) => onChangeName(ev)}
          value={state.name}
          name="name"
          onBlur={(ev) => onBlurName(ev)}
          onKeyUp={(ev) => onKeyName(ev)}
          placeholder="Enter the dog's name"
          className={`border rounded text-black w-full py-2 px-3 ${
            error.name && !validate.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {(error.name && !validate.name) && (
          <p className="text-red-500 text-sm mt-1">No dejar los espacios en blanco</p>
        )}
        {validate.name && (
          <p className="text-red-500 text-sm mt-1">Debe contener caracteres correctamente</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Min Height:</label>
        <input
          type="text"
          onChange={(ev) => onChangeMinHeight(ev)}
          value={state.min_height}
          name="min_height"
          onBlur={(ev) => onBlurMinHeight(ev)}
          onKeyUp={(ev) => onKeyMinHeight(ev)}
          placeholder="Enter the dog's min height."
          className={`border rounded text-black w-full py-2 px-3 ${
            error.min_height && !validate.min_height ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {(error.min_height && !validate.min_height) && (
          <p className="text-red-500 text-sm mt-1">No dejar los espacios en blanco</p>
        )}
        {validate.min_height && (
          <p className="text-red-500 text-sm mt-1">Debe contener caracteres correctamente</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Max Height:</label>
        <input
          type="text"
          onChange={(ev) => onChangeMaxHeight(ev)}
          value={state.max_height}
          name="max_height"
          onBlur={(ev) => onBlurMaxHeight(ev)}
          onKeyUp={(ev) => onKeyMaxHeight(ev)}
          placeholder="Enter the dog's max height."
          className={`border rounded text-black w-full py-2 px-3 ${
            error.max_height && !validate.max_height ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {(error.max_height && !validate.max_height) && (
          <p className="text-red-500 text-sm mt-1">No dejar los espacios en blanco</p>
        )}
        {validate.max_height && (
          <p className="text-red-500 text-sm mt-1">Debe contener caracteres correctamente</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Min Weight:</label>
        <input
          type="text"
          onChange={(ev) => onChangeMinWeight(ev)}
          value={state.min_weight}
          name="min_weight"
          onBlur={(ev) => onBlurMinWeight(ev)}
          onKeyUp={(ev) => onKeyMinWeight(ev)}
          placeholder="Enter the dog's min weight."
          className={`border rounded text-black w-full py-2 px-3 ${
            error.min_weight && !validate.min_weight ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {(error.min_weight && !validate.min_weight) && (
          <p className="text-red-500 text-sm mt-1">No dejar los espacios en blanco</p>
        )}
        {validate.min_weight && (
          <p className="text-red-500 text-sm mt-1">Debe contener caracteres correctamente</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Max Weight:</label>
        <input
          type="text"
          onChange={(ev) => onChangeMaxWeight(ev)}
          value={state.max_weight}
          name="max_weight"
          onBlur={(ev) => onBlurMaxWeight(ev)}
          onKeyUp={(ev) => onKeyMaxWeight(ev)}
          placeholder="Enter the dog's max weight."
          className={`border rounded text-black w-full py-2 px-3 ${
            error.max_weight && !validate.max_weight ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {(error.max_weight && !validate.max_weight) && (
          <p className="text-red-500 text-sm mt-1">No dejar los espacios en blanco</p>
        )}
        {validate.max_weight && (
          <p className="text-red-500 text-sm mt-1">Debe contener caracteres correctamente</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Life Span:</label>
        <input
          type="text"
          onChange={(ev) => onChangeLifeSpan(ev)}
          value={state.life_span}
          name="life_span"
          onBlur={(ev) => onBlurLifeSpan(ev)}
          onKeyUp={(ev) => onKeyLifeSpan(ev)}
          placeholder="Enter the dog's Life Span."
          className={`border rounded text-black w-full py-2 px-3 ${
            error.life_span && !validate.life_span ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {(error.life_span && !validate.life_span) && (
          <p className="text-red-500 text-sm mt-1">No dejar los espacios en blanco</p>
        )}
        {validate.life_span && (
          <p className="text-red-500 text-sm mt-1">Debe contener caracteres correctamente</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Temperaments:</label>
        <select
          onChange={(ev) => onChangeSelectTemperament(ev)}
          value={temperamento.name}
          name="temperamento"
          className={`border rounded text-black w-full py-2 px-3 text-black ${
            error.temperaments ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="All">Select Dogs:</option>
          {temperaments?.map((t) => {
            return (
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            );
          })}
        </select>
        {error.temperaments && (
          <p className="text-red-500 text-sm mt-1">Debe seleccionar algún temperamento</p>
        )}
      </div>

      <div className="mb-4">
        {state.temperaments?.map((t) => {
          return (
            <div key={t}>
              <p>{t}</p>
              <button
                onClick={() => onClickDeleteTemperament(t)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                X
              </button>
            </div>
          );
        })}
      </div>

      <div>
        <button
          onClick={() => onClickSubmit()}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</div>

    )
}
