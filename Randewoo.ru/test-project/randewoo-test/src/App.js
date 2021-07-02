import React from 'react';
import { getCoords } from './API.js';
import './App.css';

// React.useEffect(f, deps)
// Dropdown вызывает сетАйди и изменяет айди.

function SelectObject(props) {
  return (
    <select value={props.id} onChange={props.onSelectObjectId}>
      <option defaultValue=''>Выберите объект перемещения</option>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
      <option value='4'>4</option>
    </select>
  );
}

function App() {
  // console.log(getCoords('1'));

  // Currently selected object id
  // let id = '42';

  // Store currently data or null (if nothing is fetched)
  let [data, setData] = React.useState(null);
  let [id, setId] = React.useState('');

  // Start fetching data
  React.useEffect(() => {
    console.log('start fetching...');

    getCoords(id).then((coords) => {
      console.log(coords);
      if (id > 0) setData(coords);
    });
  }, [id]);

  function onSelectObjectId(event) {
    setId(event.target.value);
  }

  return (
    <div className='App'>
      <SelectObject defaultValue='' id={id} onSelectObjectId={onSelectObjectId} />
      <main>
        {data != null ? (
          <pre>{JSON.stringify(data)}</pre>
        ) : (
          <span>Вы пока ничего не выбрали...</span>
        )}
      </main>
    </div>
  );
}

export default App;
