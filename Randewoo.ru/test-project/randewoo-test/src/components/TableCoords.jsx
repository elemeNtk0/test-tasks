import React from 'react';

function TBody({ data }) {
  return (
    <tbody>
      {data.coords.map((item) => {
        return (
          <tr key={item.t}>
            <td>{item.x}</td>
            <td>{item.y}</td>
            <td>{item.t}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

function THead() {
  return (
    <thead>
      <tr>
        <th colSpan='2'>Coordinates</th>
        <th>Time</th>
      </tr>
      <tr>
        <th>X</th>
        <th>Y</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
  );
}

export function TableCoords(props) {
  return (
    <table className='main-table'>
      <THead />
      <TBody data={props.data} />
    </table>
  );
}
