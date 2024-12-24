import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState("rent");

  return (
    <div className="search-bar">
      <div className="tabs">
        <button
          className={activeTab === "rent" ? "active" : ""}
          onClick={() => setActiveTab("rent")}
        >
          For Rent
        </button>
        <button
          className={activeTab === "sale" ? "active" : ""}
          onClick={() => setActiveTab("sale")}
        >
          For Sale
        </button>
      </div>
      <div className="form">
        <select>
          <option>All Types</option>
        </select>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Address" />
        <select>
          <option>Any Bedrooms</option>
        </select>
        <select>
          <option>Any Bathrooms</option>
        </select>
        <select>
          <option>Min Price</option>
        </select>
        <select>
          <option>Max Price</option>
        </select>
        <button className="submit" >Submit</button>
      </div>
    </div>
  );
};

export default SearchBar;
