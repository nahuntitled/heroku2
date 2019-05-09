import React from 'react'
import Star from '@material-ui/icons/Star';

class CountryCard extends React.Component {
  state = {
    tours: 14,
    sitys: 7,
    hotels: 53
  }

  render() {
  const { item } = this.props
    return(
      <div className="item22">
        <div className="pad22" style={{ backgroundImage: `url('..${ item.imgPath }')` }}>
          <div className="darken">
            <div className="rating"><Star /><Star /><Star /><Star /><Star /></div>
              <p>{ item.name }</p>
              <div className="country__info">
              <h6><span>{ this.state.tours }</span>турів</h6>
              <div className="white__strip"></div>
              <h6><span>{ this.state.sitys }</span>міст</h6>
              <div className="white__strip"></div>
              <h6><span>{ this.state.hotels }</span>готелів</h6>
            </div>
            <div className="country__desc">
              {item.description.substr(0, 70) + "..."}
            </div>
            <a className="grid__button" href={`/tours?country=${item.name}`} >більше</a>
          </div>
        </div>
      </div>
    )
  }
}

export default CountryCard