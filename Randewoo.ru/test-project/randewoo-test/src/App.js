import React from 'react';
// import { getCoords } from './API';
import { TableCoords } from './components/TableCoords';
import './App.css';

function SelectObject({ setData }) {
  const onChange = async (event) => {
    const id = event.target.value;
    if (id !== '') {
      const coords = await fetch(`http://localhost:3003/GETCOORDS/${id}`).then((response) => response.json());
      setData(coords);
    } else {
      setData(null);
    }
  };

  return (
    <select onChange={onChange}>
      <option value=''>Выберите объект перемещения</option>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
      <option value='4'>4</option>
    </select>
  );
}

function App() {
  // Store currently data or null (if nothing is fetched)
  const [data, setData] = React.useState(null);

  return (
    <div className='App'>
      <main className='container'>
        <div className='container__select'>
          <SelectObject setData={setData} />
        </div>

        <div className='container__table'>
          {data ? <TableCoords data={data} /> : <span>Вы пока ничего не выбрали...</span>}
        </div>
      </main>
    </div>
  );
}

export default App;
