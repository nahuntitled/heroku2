import React from 'react'
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import DateRange from '@material-ui/icons/DateRange';

function BestCard(props) {
  const { item } = props
  return(
    <div className="grid__item" style={{backgroundImage: `url(..${item.filePath})`}}>
      <div className="grid__hover">
        <h5 className="grid__head">{ item.country }</h5>
        <p className="grid__price"><span className="grid__light">Від </span>{ item.price } грн</p>
        <div className="grid__bottom"> 
        <div className="grid__info">
          <p><SupervisorAccount className="white mr-2 mtop" />Дорослих:<span className="white">{ item.people }</span>Дітей:<span className="white">{ item.kids }</span></p>
          <p><DateRange className="white mr-2 mtop" />Днів:<span className="white">{ item.days }</span></p>
        </div>
          <a className="grid__button" href={`/tours/${item._id}`} >Більше</a>
        </div>
      </div>
    </div>
  )
}

export default BestCard