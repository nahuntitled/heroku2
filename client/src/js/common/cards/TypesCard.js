import React from 'react'

function TypesCard(props) {
  return(
    <div className="item">
      <div className="pad15" style={{backgroundImage: "url('../uploads/gori.jpg')"}}>
        <p>Отдых на море</p>
        <button className="grid__button">узнать больше</button>
      </div>
    </div>
  )
}

export default TypesCard