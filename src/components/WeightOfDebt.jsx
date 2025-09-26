import React from "react";
import keyChar from "../data/keyChar";

const WeightOfDebt = () => {
  return (
    <>
      <div className="container py-4 my-4 px-2">
        <h2 className="text-center mb-4">
          The Weight of Debt: How It Shows Up in Life
        </h2>
        <div className="key-char-grid">
          {keyChar.map((item, index) => {
            return (
              <div className="key-char-card" key={index} data-aos="zoom-in">
                <img src={item.img} alt="" className="icon" />
                <div>
                  <p className="red-text">{item.title}</p>
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WeightOfDebt;
