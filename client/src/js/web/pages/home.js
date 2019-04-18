import React, { Component } from 'react';
import {
  Container
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BestCard from '../../common/cards/BestCard'
import TypeSlider from '../../common/sliders/TypeSlider'

class Home extends Component {
  state = {
    tours: [],
    countrys: []
  }

  componentWillMount() {
    fetch('/api/home/tours').then(res => res.json()).then(tours => this.setState({ tours }))
    fetch('/api/home/countrys').then(res => res.json()).then(countrys => this.setState({ countrys }))
  }
  

  render() {
    const item = this.props.item;
    return (
      <div>
        <div className="header" style={{ backgroundImage: `url('..${item.config.header_img}')` }}>
          <Container>
            <h1 className="header__head">{item.config.header_title}</h1>
            <p className="header__subtitle">Так відпочивали Боги. Відпочинок, який ви запам'ятаєте надовго. Бронюйте Online.</p>
		      	<button className="header__button">Переглянути наші тури</button>
            <div className="header__search">
            <form>
              <div className="search__header">
                <div>
                  <p className="input__desc">Країна</p>
                  <select className="header__input" id="country" defaultValue="Египет">
                    {item.countrys ? item.countrys.map(co => {
                      return <option className="blacksel" value={ co.name } key={ co._id } >{ co.name }</option>
                    }) : null}
                  </select>
                </div>
                <div>
                  <p className="input__desc">Тип тура</p>
                  <select className="header__input" id="country" defaultValue="Любой">
                    <option value="Любой">Любой</option>
                    <option value="Отдых на море">Отдых на море</option>
                    <option value="Выходные туры" >Выходные туры</option>
                    <option value="Лечебные туры" >Лечебные туры</option>
                    <option value="Экскурсии" >Экскурсии</option>
                    <option value="Активный отдых" >Активный отдых</option>
                    <option value="Круизы" >Круизы</option>
                    <option value="Сафари" >Сафари</option>
                    <option value="Горные курорты" >Горные курорты</option>
                  </select>
                </div>
                <div>
                  <p className="input__desc">Дата заезда</p>
                  <input type="date" className="header__input" placeholder="mm/dd/yy" />
                </div>
                <div>
                  <p className="input__desc">Дата выезда</p>
                  <input type="date" className="header__input" placeholder="mm/dd/yy" />
                </div>
                <div>
                  <p className="input__desc">Дорослих</p>
                  <select className="header__input">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <div>
                  <p className="input__desc">Дітей</p>
                  <select className="header__input">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                <div>
                  <input className="grid__button" type="submit" value="Знайти" />
                </div>
              </div>
              </form>
            </div>
          </Container>
        </div>
        <section className="best__tours">
          <div className="container">
            <h2 className="title">Найкращі пропозиції</h2>
            <p className="subtitle">Популярні напрямки які користуются пропозицією.</p>
            <div className="grid">
              { this.state.tours ? this.state.tours.map((item,i) => {
                return <BestCard item={item} key={i} />
              }) : null }
            </div>
          </div>
        </section>
        <section className="types">
          <div className="container">
            <h2 className="title">Види турів</h2>
            <p className="subtitle">Ми пропонуємо тури на любий смак та бютжет</p>
            <TypeSlider />
          </div>
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  item: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  null
)(Home)
