import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import TypesCard from '../cards/TypesCard'
import "react-alice-carousel/lib/alice-carousel.css";
import Left from '@material-ui/icons/KeyboardArrowLeft';
import Right from '@material-ui/icons/KeyboardArrowRight';

class TypeSlider extends React.Component {
  responsive = {
    0: { items: 1 },
    750: { items: 2 },
    1024: { items: 3 }
  }

  Items() {
    return [{name: 'Відпочинок на морі', img: '../uploads/sea.jpg', path:'/tours?type=Відпочинок на морі'},
    {name: 'Вихідні тури', img: '../uploads/vixodnoi.jpg', path:'/tours?type=Вихідні тури'},
    {name: 'Екскурсії', img: '../uploads/piramidi.jpg', path:'/tours?type=Екскурсії'},
    {name: 'Лікувальні тури', img: '../uploads/massage.jpg', path:'/tours?type=Лікувальні тури'},
    {name: 'Активний відпочинок', img: '../uploads/extream.jpg', path:'/tours?type=Активний відпочинок'},
    {name: 'Круїзи', img: '../uploads/cruis.jpg', path:'/tours?type=Круїзи'},
    {name: 'Сафарі', img: '../uploads/safari.jpg', path:'/tours?type=Сафарі'},
    {name: 'Гірські курорти', img: '../uploads/gori.jpg', path:'/tours?type=Гірські курорти'}].map((item, i) => (
      <TypesCard key={i} item={item} />
    ))
  }

  render() {
    if(this.Items()) {
    const items = this.Items()

      return (
        <div className="slider">
          <button className="leftLst" onClick={() => this.Carousel._slidePrev()} > <Left /> </button>
          <button className="rightLst" onClick={() => this.Carousel._slideNext()} > <Right /> </button>
            <AliceCarousel
              items={items}
              duration={400}
              startIndex={1}
              fadeOutAnimation={true}
              mouseDragEnabled={true}
              autoPlayInterval={2000}
              autoPlayDirection='rtl'
              responsive={this.responsive}
              disableAutoPlayOnAction={true}
              dotsDisabled={true}
              buttonsDisabled={true}
              ref={el => (this.Carousel = el)}
            />
          </div>
      ) 
    } else {
      return(
        <div>
          {null}
        </div>
      )
    }
  }
}

export default TypeSlider