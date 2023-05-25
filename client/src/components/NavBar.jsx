import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { AppContext } from "../context";
import { getAllDogsByName } from "../redux/action";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const { stateValue, setStateValue } = useContext(AppContext);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleSearchInputChange = (event) => {
    setStateValue({ ...stateValue, value: event.target.value });
  };

  const onClickDog = () => {
    dispatch(getAllDogsByName(stateValue.value));
    setStateValue({ ...stateValue, currentPage: 1 });
  };

  const showSearchInput = location.pathname !== "/About";

  return (
    <div className="border-b-2 flex justify-between py-4 px-4 bg-gray-800">
      <div className="w-full">
        <span className="text-orange-300 font-bold text-xl">Henry-Dogs!!</span>
      </div>
      <div className="w-full">
        {showSearchInput && (
          <div className="flex items-center">
            <input
              type="text"
              value={stateValue.value}
              onChange={handleSearchInputChange}
              className="w-60 rounded-tl-lg rounded-bl-lg py-1 px-2 outline-none"
              placeholder="Search..."
            />
            <div
              className="p-2 border-white bg-gray-300 text-base rounded-tr-lg rounded-br-lg"
              onClick={onClickDog}
            >
              <FaSearch />
            </div>
          </div>
        )}
      </div>
      <div className="w-full">
        <ul className="flex flex-nowrap space-x-4 text-white items-center h-full">
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/CreateDogs"}>Add Dog</Link>
          </li>
          <li>
            <Link to={"/About"}>About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
