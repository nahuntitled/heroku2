import React from "react"
import {
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

class CallbackForm extends React.Component {
  state = {
    done: false,
    name: '',
    surname: '',
    email: '',
    phone: '',
    date: '',
    days: '',
    tour: '',
    comment: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if(this.state.name === '' || this.state.phone === '') {
      document.getElementById('error').textContent = 'Заполните все поля'
    } else {
    const newItem = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      phone: this.state.phone,
      date: this.state.date,
      days: this.state.days,
      tour: this.state.tour,
      comment: this.state.comment
    };

    console.log(newItem);
    
    fetch('/api/client', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(newItem)
    }).then(this.setState({ done: true }))
  }

  };

  componentDidMount() {
    if(this.props.item) {
      this.setState({
        tour: this.props.item.name,
        days: this.props.item.days
      })

      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();
      if(dd<10){
              dd='0'+dd
          } 
          if(mm<10){
              mm='0'+mm
          } 
  
      today = yyyy+'-'+mm+'-'+dd;
      document.getElementById("date").setAttribute("min", today);
      document.getElementById("days").value = this.props.item.days;
    }
  }

  render() {
    if(!this.state.done) {
      if(this.props.fromTour) {
      return(
        <div>
          <Form onSubmit={this.onSubmit} className="tour__search">
            <h4 className="search__tour">Бронювання</h4>
            <div className="flex">
              <FormGroup>
                <Label for="date">Ім'я</Label>
                <Input type="text" name="name" id="name" placeholder="Ім'я" onChange={this.onChange} />
              </FormGroup>
              <FormGroup>
                <Label for="date">Прізвище</Label>
                <Input type="text" name="surname" id="surname" placeholder="Прізвище" onChange={this.onChange} />
              </FormGroup>
            </div>
            <div className="flex">
              <FormGroup>
                <Label for="date">Email</Label>
                <Input type="email" name="email" id="email" placeholder="email" onChange={this.onChange} />
              </FormGroup>
              <FormGroup>
                <Label for="date">Телефон</Label>
                <Input type="text" name="phone" id="phone" placeholder="Телефон" onChange={this.onChange} />
              </FormGroup>
            </div>
            <div className="flex">
              <FormGroup>
                <Label for="date">Дата заезда</Label>
                <Input type="date" name="date" id="date" onChange={this.onChange} />
              </FormGroup>
              <FormGroup>
                <Label for="date">Днів</Label>
                <Input type="text" name="days" id="days" placeholder="Днів" onChange={this.onChange} readOnly />
              </FormGroup>
            </div>
            <FormGroup>
              <Label for="date">Коментар</Label>
              <Input type="textarea" name="comment" id="comment" placeholder="Залиште коментар для нас" onChange={this.onChange} />
            </FormGroup>
            <p id="error"></p>
            <FormGroup>
              <input className="grid__button" type="submit" value="Підтвердити" />
            </FormGroup>
          </Form>
        </div>
      )
      } else {
        return(
        <div>
          <Form onSubmit={this.onSubmit} className="tour__search form__add" style={{ backgroundImage: 'url("../uploads/form.jpg")' }} >
            <div className="darken4">
            <FormGroup>
              <Label for="date">Ім'я</Label>
              <Input type="text" name="name" id="name" placeholder="Ім'я" onChange={this.onChange} />
            </FormGroup>
            <FormGroup>
              <Label for="date">Телефон</Label>
              <Input type="text" name="phone" id="phone" placeholder="Телефон" onChange={this.onChange} />
            </FormGroup>
            <FormGroup>
              <Label for="date">Коментар</Label>
              <Input type="textarea" name="comment" id="comment" placeholder="Залиште коментар для нас" onChange={this.onChange} />
            </FormGroup>
            <p id="error"></p>
            <FormGroup>
              <input className="grid__button" type="submit" value="Підтвердити" />
            </FormGroup>
            </div>
          </Form>
        </div>
        )
      }
    } else {
      return(
        <Form className="tour__search form__add" style={{ backgroundImage: 'url("../uploads/form.jpg")' }} >
          <div className="form__thanks">
            Дякуемо, скоро з Вами зв'яжется наш менеджер
          </div>
        </Form>
      )
    }
  }
}

export default CallbackForm