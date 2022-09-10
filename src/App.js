import { Сosts } from './components/Costs/Сosts';
import NewCost from './components/NewCost/NewCost';
import React, { useState } from 'react';

const INITIAL_COSTS = [
  // {
  //   id: 'c1',
  //   date: new Date(2022, 2, 12),
  //   description: 'Холодильник',
  //   amount: 999.99,
  // },
  // {
  //   id: 'c2',
  //   date: new Date(2022, 11, 25),
  //   description: 'MacBook',
  //   amount: 12454.99,
  // },
  // {
  //   id: 'c3',
  //   date: new Date(2022, 4, 16),
  //   description: 'Джинсы',
  //   amount: 999.99,
  // },
];
function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };
  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Сosts costs={costs} />
    </div>
  );
}

export default App;
