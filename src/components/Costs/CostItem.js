import React from 'react';
import { Card } from '../UI/Card';
import { CostDate } from './CostDate';
import './CostItam.css';

export const CostItem = (props) => {
  return (
    <li>
      <Card className="cost-item">
        <CostDate date={props.date} />
        <div className="cost-item__description">
          <h2>{props.description}</h2>

          <div className="cost-item__price ">Rub {props.amount}</div>
        </div>
      </Card>
    </li>
  );
};
