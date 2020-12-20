import React, { useState } from "react";
import "./styles.css";

const recommenDB = {
  Drama: [
    { name: "BTIMFL", rating: "⭐⭐⭐⭐" },
    { name: "Reply 1988", rating: "⭐⭐⭐⭐" },
    { name: "Reply 1994", rating: "⭐⭐⭐⭐" },
    { name: "Reply 1997", rating: "⭐⭐⭐⭐" },
    { name: "It's Okay That's Love", rating: "⭐⭐⭐⭐⭐" },
    { name: "It's Okay To Not Be Okay", rating: "⭐⭐⭐⭐" }
  ],

  Artists: [
    { name: "TVXQ", rating: "⭐⭐⭐⭐⭐" },
    { name: "Super Junior", rating: "⭐⭐⭐⭐" },
    { name: "Lee Minki", rating: "⭐⭐⭐⭐" },
    { name: "Hyun Bin", rating: "⭐⭐⭐⭐" },
    { name: "Seo Yeji", rating: "⭐⭐⭐⭐⭐" },
    { name: "Gong Yoo", rating: "⭐⭐⭐⭐" }
  ],

  Movie: [
    { name: "Pandora", rating: "⭐⭐⭐⭐" },
    { name: "Haeundae", rating: "⭐⭐⭐⭐⭐" },
    { name: "Shoot Me In The Heart", rating: "⭐⭐⭐⭐⭐" },
    { name: "Monster", rating: "⭐⭐⭐⭐" },
    { name: "Spellbound", rating: "⭐⭐⭐⭐⭐" },
    { name: "Very Ordinary Couple", rating: "⭐⭐⭐⭐" }
  ],

  Food: [
    { name: "Jjajjangmyun", rating: "⭐⭐⭐⭐" },
    { name: "Tteokbokki", rating: "⭐⭐⭐⭐⭐" },
    { name: "Ice Cream", rating: "⭐⭐⭐⭐⭐" },
    { name: "Shikhye", rating: "⭐⭐⭐⭐" },
    { name: "Pajeon", rating: "⭐⭐⭐⭐⭐" },
    { name: "Pakimchi", rating: "⭐⭐⭐⭐" }
  ]
};

export default function App() {
  const [buttonValue, setValue] = useState("Artists");
  function buttonValHandler(val) {
    setValue(val);
  }
  function clickHandler(item) {}
  return (
    <div className="App">
      <h1> Neha's Recommendation! </h1>
      <p>Check out Neha's favourite Korean everything!</p>

      <div>
        {Object.keys(recommenDB).map((val) => (
          <button onClick={() => buttonValHandler(val)}>{val}</button>
        ))}
      </div>
      <hr />
      <div className="lists">
        <ul>
          {recommenDB[buttonValue].map((item) => (
            <li key={item.name}>
              <div style={{ fontSize: "larger" }}> {item.name} </div>
              <div style={{ fontSize: "smaller" }}> {item.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
