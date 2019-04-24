import React from 'react'
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TourCard from '../../common/cards/TourCard'

class Tours extends React.Component {
  state = {
    country: '',
    type: '',
    date: '',
    days: 0,
    people: '',
    kids: '',
    item: null,
    isLoad: false
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.setState({
      item: this.props.item.items
    })
    console.log(this.props.item.items);

    var url = new URL(window.location.href);
    var country = url.searchParams.get("country");
    var type = url.searchParams.get("type");
    var people = url.searchParams.get("people");
    var kids = url.searchParams.get("kids");
    var days = url.searchParams.get("days");

    const sort = {
      country: country || this.state.country,
      type: type || this.state.type,
      days: days || this.state.days,
      people: people || this.state.people,
      kids: kids || this.state.kids
    };

    console.log(sort);
    

    fetch('/api/tours/sort', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(sort)
    }).then(res => res.json()).then(item => this.setState({ item, isLoad: true }))
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      isLoad: false
    })

    const sort = {
      country: this.state.country,
      type: this.state.type,
      days: this.state.days,
      people: this.state.people,
      kids: this.state.kids
    };

    fetch('/api/tours/sort', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(sort)
    }).then(res => res.json()).then(item => { this.setState({ item }); setTimeout(() => {
      this.setState({
        isLoad: true
      })
    }, 500); console.log(item)})
  }

  render() {
    const item = this.props.item
    return(
      <div className="gray__bg">
        <Container>
          <div className="row">
            <div className="col-md-3">
              <Form onSubmit={this.onSubmit} className="tour__search">
                <h4 className="search__tour">Пошук</h4>
                <FormGroup>
                  <Label for="country">Країна</Label>
                  <Input type="select" name="country" id="country" defaultValue="" onChange={this.onChange} >
                    <option value="">Любая</option>
                    {item.countrys ? item.countrys.map(co => {
                      return <option value={ co.name } key={ co._id } >{ co.name }</option>
                    }) : null}
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="type">Тип тура</Label>
                  <Input type="select" name="type" id="type" defaultValue="" onChange={this.onChange} >
                    <option value="">Любой</option>
                    <option value="Отдых на море">Отдых на море</option>
                    <option value="Выходные туры" >Выходные туры</option>
                    <option value="Лечебные туры" >Лечебные туры</option>
                    <option value="Экскурсии" >Экскурсии</option>
                    <option value="Активный отдых" >Активный отдых</option>
                    <option value="Круизы" >Круизы</option>
                    <option value="Сафари" >Сафари</option>
                    <option value="Горные курорты" >Горные курорты</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="date">Дней</Label>
                  <Input type="text" name="days" id="days" placeholder="Кількість днів" onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="people">Дорослих</Label>
                  <Input type="select" name="people" id="coupeoplentry" defaultValue="1" onChange={this.onChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="kids">Дітей</Label>
                  <Input type="select" name="kids" id="kids" defaultValue="0" onChange={this.onChange}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <input className="grid__button" type="submit" value="Знайти" />
                </FormGroup>
              </Form>
            </div>
            <div className="col-md-9 tours">
              {this.state.isLoad ? this.state.item.map((item,i) => {
                return <TourCard item={item} key={i} />
              }) : 'Поиск результатов'}
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

Tours.propTypes = {
  item: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  null
)(Tours)