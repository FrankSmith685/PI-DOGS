import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, getAllDogsByTemperament, getAllDogsexistandCreated, getAllTemperament, getOrderByDogs, getOrderByPesoDogs } from "../redux/action";
import Card from "./Cards";
import { Pagination } from "./Pagination";
import { AppContext } from "../context";
import { Link } from "react-router-dom";

const Home=()=>{
    const dispatch=useDispatch();
    const dogs=useSelector(state=>state.dogs);
    const temperament=useSelector(state=>state.temperament);

    const { stateValue, setStateValue } = useContext(AppContext);

    const [state,setState]=useState({
        value:"",
        dogs:"",
        orderDogs:"",
        orderPeso:"",
        currentPage:1,
        nroPaginado:8
    });

    //Validar la paginacion 
    const ultimoPage=state.nroPaginado*stateValue.currentPage;
    const primerPage=ultimoPage-state.nroPaginado;
    const mainDogs=dogs?.slice(primerPage,ultimoPage);

    //Paginacion
    function onClickPagination(numero){
        setStateValue({...stateValue,currentPage:numero});
    }

    useEffect(()=>{
        dispatch(getAllDogs());
        dispatch(getAllTemperament());
    },[dispatch])
    
    const handleChangeTemperament=(ev)=>{
        ev.preventDefault();
        dispatch(getAllDogsByTemperament(ev.target.value));
        
        setState({...state,dogs:"All"});
        setStateValue({...stateValue,currentPage:1,value:""});
    }

    const onChangeDogs=(ev)=>{
        ev.preventDefault();
        dispatch(getAllDogsexistandCreated(ev.target.value));
        setState({...state,dogs:ev.target.value});
        setStateValue({...stateValue,currentPage:1,value:""});
    }

    const onChangeOrderDogs=(ev)=>{
        ev.preventDefault();
        dispatch(getOrderByDogs(ev.target.value));
        setState({...state,orderDogs:ev.target.value});
        setStateValue({...stateValue,currentPage:1,value:""});
    }

    const onChangeOrderPesoDogs=(ev)=>{
        dispatch(getOrderByPesoDogs(ev.target.value));
        setState({...state,orderPeso:ev.target.value})
        setStateValue({...stateValue,currentPage:1,value:""});
    }


    

    return(
        <div>
            <div className=" w-full p-8 h-full">
                <div className="border-black text-white bg-gray-800 border-2 h-full w-full flex items-center p-5 ">
                    <div className="flex flex-nowrap w-full space-x-4">
                        <div className="w-full border-r-2 ">
                            <div className="flex items-center justify-center">
                                <div className="w-auto">
                                    <span>Filter by Temperament</span>
                                    <div className="text-black w-full pt-2">
                                        <select onChange={(ev)=>handleChangeTemperament(ev)} className="w-52 py-1 px-2 outline-none rounded-lg">
                                            <option value="AllTemperament">All</option>
                                            {
                                                temperament?.map(t=>{
                                                    return(
                                                        <option key={t.id} value={t.name}>{t.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="w-full border-r-2">
                            <div className="flex items-center justify-center">
                                <div className="w-auto">
                                    <span>Filter by existing or created dog breed</span>
                                    <div className="text-black w-full pt-2">
                                        <select onChange={(ev)=>onChangeDogs(ev)} value={state.dogs} className="w-52 py-1 px-2 outline-none rounded-lg">
                                            <option value="All" >All </option>
                                            <option value="created" >created</option>
                                            <option value="existing">existing</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full border-r-2">
                            <div className="flex items-center justify-center">
                                <div className="w-auto">
                                    <span>Order by Dogs</span>
                                    <div className="text-black w-full pt-2">
                                        <select onChange={(ev)=>onChangeOrderDogs(ev)} className="w-52 py-1 px-2 outline-none rounded-lg">
                                            <option value="OrderBy">Order By Dogs</option>
                                            <option value="ascDogs">[A-Z]</option>
                                            <option value="descDogs">[Z-A]</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex items-center justify-center">
                                <div className="w-auto">
                                    <span>Order by Weight</span>
                                    <div className="text-black w-full pt-2">
                                    <select onChange={(ev)=>onChangeOrderPesoDogs(ev)} className="w-52 py-1 px-2 outline-none rounded-lg">
                                        <option value="OrderByPeso">Order By Peso</option>
                                        <option value="ascPeso">asc</option>
                                        <option value="descPeso">desc</option>
                                    </select>  
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <Pagination 
                totalPagination={dogs?.length}    
                nroPaginado={state.nroPaginado}
                onClickPagination={onClickPagination}
                />
            </div>

            <div className="flex flex-wrap ">
                {
                    mainDogs.map(c=>{

                        return(
                            <div key={c.id} className="w-1/4 ">
                                <Link to={`/home/${c.id}`}>
                                <Card
                                nombre={c.name}
                                imagen={c.image}
                                temperament={
                                    c.temperaments?.map(temp => (
                                        <span className="inline-block mx-1 bg-red-500 text-sm text-white px-2 space-y-2 my-1 rounded-full " key={temp.name?temp.name:temp}>
                                        {temp.name?temp.name:temp}
                                    </span>
                                    ))
                                }
                                weight_min={c.weight[0]}
                                weight_max={c.weight[1]}
                                />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;