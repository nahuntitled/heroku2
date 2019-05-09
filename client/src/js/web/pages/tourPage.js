import React from 'react'
import Star from '@material-ui/icons/Star';
import CallbackForm from '../../common/CallbackForm'
import Feedback from '../../common/Feedback'

class TourPage extends React.Component {
  state = {
    item: null,
    isLoad: false
  }

  componentWillMount() {
    fetch('/api/tours/' + this.props.match.params.id).then(res => res.json()).then(item => this.setState({ item, isLoad: true }))
  }

  createStars = () => {
    var row = [];
    for(let i = 0; i < this.state.item.stars; i++) {
      row.push(<Star key={i} />)
    }
    return row
  }

  render() {
    const item = this.state.item
    if(this.state.isLoad) {
      return(
        <div className="tourpage__main">
          <div style={{ backgroundImage: "url(../uploads/tour_bg.jpg)"}} className="background_tour" >
            { item.name }
          </div>
          <div className="container">
            <div className="tourpage__info">
              <div className="row">
                <div className="col-md-12 flex">
                  <div>
                    <p className="header_tit">{ item.location }</p>
                    <h2 className="tourpage__header">
                      { item.hotel }
                    </h2>
                  <div className="rating">
                    { this.createStars() }
                  </div>
                  </div>
                  <div>
                    <p className="tourpage__price">
                      ціна починаєтся від<strong>{ item.price }</strong>грн
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row tourpage__top">
              <div className="col-md-7 col-lg-8">
                <img src={`..${item.filePath}`} alt="ff " width="100%" height="100%" />
              </div>
              <div className="col-md-5 col-lg-4">
                <div className="tourpage__details">
                  <h4 className="tourpage__search">Деталі</h4>
                  <p className="tourpage__p">Готель:<span className="white">{ item.hotel }</span></p>
                  <p className="tourpage__p">Цена:<span className="white">{ item.price }</span></p>
                  <p className="tourpage__p">Зірок:<span className="white">{ item.stars }</span></p>
                  <p className="tourpage__p">Днів:<span className="white">{ item.days }</span></p>
                  <p className="tourpage__p">Дорослих:<span className="white">{ item.people }</span></p>
                  <p className="tourpage__p">Дітей:<span className="white">{ item.kids }</span></p>
                  <p className="tourpage__p">Тип туру:<span className="white">{ item.type }</span></p>
                  <p className="tourpage__p">Дата заїзду:<span className="white">10.12.19</span></p>
                  <p className="tourpage__p">Харчування:<span className="white">{ item.food }</span></p>
                  <p className="tourpage__p">Про тур:<span className="white">{ item.description}</span></p>
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col-md-6 col-sm-12">
             <CallbackForm fromTour={true} item={item} />
            </div>
            <div className="col-md-6 col-sm-12">
              <Feedback id={item._id} />
            </div>
            </div>
          </div>
        </div>
      )
      } else {
        return(
          <div>

          </div>
        ) 
      }
  }
}

export default TourPage