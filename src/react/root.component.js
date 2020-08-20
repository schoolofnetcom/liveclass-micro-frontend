import React, { useState } from 'react';

const List = props => (
  <ul className="list-group text-left">
    {
      props.items.map((item, index) => <li className="list-group-item" key={index}> {item} </li>)
    }
  </ul>
);

const App = () => {

  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');

  return (
    <div className="container text-center">
      <h1 className="display-4">React Todo</h1>
      <form>
        <input type="text" value={title} className="form-control" onChange={event => setTitle(event.target.value)} />
        <button type="button" className="btn btn-success" onClick={() => setItems([...items, title])}>Create</button>
      </form>
      <List items={items} />
    </div>
  );
};

export default App;