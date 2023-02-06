import React, { useState } from "react";
import response from "../response.json";
import { Link } from "react-router-dom";

export default function Table() {
  const [data, setData] = useState(response);

  const sortData = (col) => {
    const sortedData = [...data].sort((a, b) => {
      return a[col] > b[col] ? 1 : -1;
    });
    setData(sortedData);
  };

  return (
    <div>
      <table>
        <thead>
          <th>
            <Link to="rank">
              <button onClick={() => sortData("rank")}>Rank</button>
            </Link>
          </th>
          <th>
            <Link to="name">
              <button onClick={() => sortData("name")}>Name</button>
            </Link>
          </th>

          <th>
            <Link to="age">
              <button onClick={() => sortData("age")}>Age</button>
            </Link>
          </th>

          <th>
            <Link to="email">
              <button onClick={() => sortData("email")}>Email</button>
            </Link>
          </th>
        </thead>
        <tbody>
          {data.map((hacker, i) => {
            return (
              <tr key={i}>
                <td>{hacker.rank}</td>
                <td>{hacker.name}</td>
                <td>{hacker.age}</td>
                <td>{hacker.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
