import React from 'react'

function TypesCard(props) {
  return(
    <div className="item">
      <div className="pad15" style={{backgroundImage: `url('${props.item.img}')`}}>
        <p>{props.item.name}</p>
        <a className="grid__button" href={props.item.path}>дізнатись більше</a>
      </div>
    </div>
  )
}

export default TypesCard