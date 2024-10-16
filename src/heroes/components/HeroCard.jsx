import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImg = `/heroes/${id}.jpg`;
  const caractersByHero = characters?.split(",").filter((ch) => ch.trim() !== alter_ego.trim());
  
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImg} alt={superhero} className="card-img" />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title"> {superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {caractersByHero
                .map((ch, index) => (
                  <p key={index} className="card-text">
                    {ch}
                  </p>
                ))}
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>Más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
