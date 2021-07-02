import React from 'react';
import { getCoords } from './API';
import { TableCoords } from './components/TableCoords';
import './App.css';

// React.useEffect(f, deps)
// Dropdown вызывает сетАйди и изменяет айди.

function SelectObject(props) {
  let onChange = (event) => {
    if (event.target.value === '') {
      props.onSelectObjectId(null);
    } else {
      props.onSelectObjectId(event.target.value);
    }
  };

  return (
    <select value={props.id == null ? '' : props.id} onChange={onChange}>
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
  let [data, setData] = React.useState(null);
  let [id, setId] = React.useState(null);

  // Start fetching data
  React.useEffect(() => {
    console.log('start fetching...');

    if (id !== null) {
      getCoords(id).then((coords) => {
        console.log(coords);
        setData(coords);
      });
    } else {
      setData(null);
    }
  }, [id]);

  return (
    <div className='App'>
      <main className='container'>
        <div className='container__select'>
          <SelectObject id={id} onSelectObjectId={setId} />
        </div>

        <div className='container__table'>
          {data != null ? <TableCoords data={data} /> : <span>Вы пока ничего не выбрали...</span>}
        </div>
      </main>
    </div>
  );
}

export default App;
