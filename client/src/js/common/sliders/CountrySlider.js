import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import CountryCard from '../cards/CountryCard'
import "react-alice-carousel/lib/alice-carousel.css";
import Left from '@material-ui/icons/KeyboardArrowLeft';
import Right from '@material-ui/icons/KeyboardArrowRight';

class CountrySlider extends React.Component {
  responsive = {
    0: { items: 1 },
    600: { items: 1 },
    800: { items: 2 },
    1024: { items: 3 }
  }

  render() {
    if(this.props.countrys) {
    const items = this.props.countrys.map((item,i) => {
      return <CountryCard item={item} key={i} />
    })

      return (
        <div className="slider">
          <button className="leftLst wb" onClick={() => this.Carousel._slidePrev()} > <Left /> </button>
          <button className="rightLst wb" onClick={() => this.Carousel._slideNext()} > <Right /> </button>
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

export default CountrySlider