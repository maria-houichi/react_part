// Table.js

import React from 'react';

const Table = ({ infos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {infos.map((info, index) => (
          <tr key={index}>
            <td>{info.nom}</td>
            <td>{info.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

