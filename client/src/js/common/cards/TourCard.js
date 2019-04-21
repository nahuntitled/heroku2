import React from 'react'
import Star from '@material-ui/icons/Star';

function TourCard(props) {
  const { item } = props
  return(
    <div className="tour__item row">
      <div className="col-md-4 col-sm-12 tour__img">
        <img alt={ item.name } src={`..${item.filePath}`} width="100%" height="100%" />
      </div>
      <div className="col-md-8 col-sm-12 flex tour__info">
        <div>
          <p className="tour__date"><strong>21.02 / 10</strong> дней</p>
          <p className="tour__name">{ item.name }</p>
          <div className="rating"><Star /><Star /><Star /><Star /><Star /></div>
          <p className="tour__deck">{ item.description.substr(0, 120) + "..." }</p>
        </div>
        <div className="tour__right">
          <p className="tour__from">Від</p>
          <p className="tour__price">{ item.price }</p>
          <p className="tour__from mb-3">грн</p>
          <a className="grid__button" href={`/tours/${item._id}`}>Більше</a>
        </div>
      </div>
    </div>
  )
}

export default TourCard