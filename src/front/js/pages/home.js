import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CardPeople from "../component/cardPeople.jsx";
import CardVehicle from "../component/cardVehicle.jsx";
import CardPlanets from "../component/cardPlanets.jsx";
import UsersPeople from "../component/usersPeople.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {store.userLogin ? (
        <>
          <div className="d-flex">
            <h1 className="text-danger ms-5">Characters</h1>
            <Link to="/add-people">
              <button type="button" className="btn btn-primary ms-3">
                Add New Character
              </button>
            </Link>
          </div>
          <UsersPeople />
        </>
      ) : (
        <>
          <h1 className="text-danger ms-5">Characters</h1>
          <CardPeople />
          <h1 className="text-danger ms-5">Vechicles</h1>
          <CardVehicle />
          <h1 className="text-danger ms-5">Planets</h1>
          <CardPlanets />
        </>
      )}
    </>
  );
};
