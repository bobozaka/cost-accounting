import React, { useState } from 'react';
import './CostForm.css';

export const CostForm = (props) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   name: event.target.value,
    // });
  };
  const numberChangeHandler = (event) => {
    setNumber(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   number: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const costData = {
      description: name,
      amount: number,
      date: new Date(date),
    };
    props.onSaveCostData(costData);
    setName('');
    setNumber('');
    setDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" value={name} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            value={number}
            min="0.01"
            step="0.01"
            onChange={numberChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
          <button type="button" onClick={props.onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </form>
  );
};
