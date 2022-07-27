import React from 'react'

const ItemBill = (props) => {
    console.log(props.bill)
  return (
    <div className="bill-item">
        <h4>{props.bill.name}</h4>
    </div>
  )
}

export default ItemBill