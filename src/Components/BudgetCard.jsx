import React from "react";
import { Link } from "react-router-dom";

const BudgetCard = ({
  budgetName,
  startDate,
  endDate,
  currency,
  approvalStatus,
  className,
  _id: id,
}) => {
  return (
    <Link to={`/budgets/${id}`}>
      <div
        className={`flex justify-between items-center p-2 border-b ${className}`}
      >
        <span style={{ flexBasis: "20%" }}>{`${budgetName}`}</span>
        <span style={{ flexBasis: "20%" }}>{startDate}</span>
        <span style={{ flexBasis: "20%" }}>{endDate}</span>
        <span style={{ flexBasis: "20%" }}>{approvalStatus}</span>
        <span style={{ flexBasis: "20%" }}>{currency}</span>
      </div>
    </Link>
  );
};

export default BudgetCard;
