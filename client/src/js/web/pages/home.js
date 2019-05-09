import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BestCard from '../../common/cards/BestCard'
import TypeSlider from '../../common/sliders/TypeSlider'
import CountrySlider from '../../common/sliders/CountrySlider'
import CallbackForm from '../../common/CallbackForm'

class Home extends Component {
  state = {
    country: '',
    type: '',
    date: '',
    days: '',
    people: '',
    kids: '',
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    window.location.href += `tours?country=${this.state.country}&type=${this.state.type}&days=${this.state.days}&people=${this.state.people}&kids=${this.state.kids}`
  };

  render() {
    const item = this.props.item;
    
    return (
      <div>
        <div className="header" style={{ backgroundImage: `url('..${item.config.header_img}')` }}>
            <h1 className="header__head">{item.config.header_title}</h1>
            <p className="header__subtitle">Так відпочивали Боги. Відпочинок, який ви запам'ятаєте надовго. Бронюйте Online.</p>
		      	<a className="header__button" href="/tours" >Переглянути наші тури</a>
            <div className="header__search d-none d-sm-block">
            <form onSubmit={this.onSubmit}>
              <div className="search__header">
                <div>
                  <p className="input__desc">Країна</p>
                  <select className="header__input" id="country" name="country" defaultValue="" onChange={this.onChange}>
                    <option value="">Любая</option>
                    {item.countrys ? item.countrys.map(co => {
                      return <option value={ co.name } key={ co._id } >{ co.name }</option>
                    }) : null}
                  </select>
                </div>
                <div className="d-sm-none d-md-block">
                  <p className="input__desc">Тип тура</p>
                  <select className="header__input" id="type" name="type" defaultValue="" onChange={this.onChange}>
                    <option value="">Любой</option>
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
                  <p className="input__desc">Кількість днів</p>
                  <input type="text" className="header__input" placeholder="Кількість днів" id="days" name="days" onChange={this.onChange}/>
                </div>
                <div>
                  <p className="input__desc">Дорослих</p>
                  <select className="header__input" id="people" name="people" onChange={this.onChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div>
                  <p className="input__desc">Дітей</p>
                  <select className="header__input" id="kids" name="kids" onChange={this.onChange}>
                    <option>0</option>
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
        </div>
        <section className="best__tours">
          <div className="container">
            <h2 className="title">Найкращі пропозиції</h2>
            <p className="subtitle">Популярні напрямки які користуются пропозицією.</p>
            <div className="grid">
              { item ? item.items.slice(0, 6).map((item,i) => {
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
        <section className="countrys">
          <div className="container">
            <h2 className="title">Країни</h2>
            <p className="subtitle">Не знаєте що хочете, но знаєте де? Просто виберіть країну і дізнайтесь.</p>
            <CountrySlider countrys={item.countrys} />
          </div>
        </section>
        <section className="formcall">
          <div className="container">
            <h2 className="title">Зв'яжітся з нами</h2>
            <p className="subtitle">Не можете визначитися? Залиште дані для зв'язку і ми Вам допоможем.</p>
            <CallbackForm />
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
