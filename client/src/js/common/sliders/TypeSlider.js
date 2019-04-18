import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import TypesCard from '../cards/TypesCard'
import "react-alice-carousel/lib/alice-carousel.css";
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';

class TypeSlider extends React.Component {
  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 }
  }

  Items() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
      <TypesCard key={i} />
    ))
  }

  render() {
    if(this.Items()) {
    const items = this.Items()

      return (
        <div className="slider">
          <button className="leftLst" onClick={() => this.Carousel._slidePrev()} > <ArrowBack /> </button>
          <button className="rightLst" onClick={() => this.Carousel._slideNext()} > <ArrowForward /> </button>
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