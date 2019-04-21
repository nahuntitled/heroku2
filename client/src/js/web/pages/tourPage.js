import React from 'react'
import Star from '@material-ui/icons/Star';

class TourPage extends React.Component {
  state = {
    item: null,
    isLoad: false
  }

  componentWillMount() {
    fetch('/api/tours/' + this.props.match.params.id).then(res => res.json()).then(item => this.setState({ item, isLoad: true }))
  }

  render() {
    console.log(this.props.match.params);
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
                    <p className="header_tit">2 Place de la Sans Défense, Puteaux, Paris, France.</p>
                    <h2 className="tourpage__header">
                      PARIS INTERNATIONAL HOTEL
                    </h2>
                    <div className="rating"><Star /><Star /><Star /><Star /><Star /></div>
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
              <div className="col-md-8">
                <img src={`..${item.filePath}`} alt="ff " width="100%" height="100%" />
              </div>
              <div className="col-md-4">
                <div className="tourpage__details">
                  <h4 className="tourpage__search">Деталі</h4>
                  <p className="tourpage__p">Готель:<span className="white">Арбат топ мод</span></p>
                  <p className="tourpage__p">Цена:<span className="white">{ item.price }</span></p>
                  <p className="tourpage__p">Зірок:<span className="white">{ item.stars }</span></p>
                  <p className="tourpage__p">Днів:<span className="white">10</span></p>
                  <p className="tourpage__p">Дорослих:<span className="white">{ item.people }</span></p>
                  <p className="tourpage__p">Дітей:<span className="white">{ item.kids }</span></p>
                  <p className="tourpage__p">Тип туру:<span className="white">{ item.type }</span></p>
                  <p className="tourpage__p">Дата заїзду:<span className="white">10.12.19</span></p>
                  <p className="tourpage__p">Харчування:<span className="white">{ item.food }</span></p>
                  <p className="tourpage__p">Про тур:<span className="white">{ item.description}</span></p>
                </div>
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