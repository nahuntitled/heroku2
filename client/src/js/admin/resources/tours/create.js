import React from "react"
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';
import { addItem , editItem, getItems, getCountrys } from '../../../actions/itemActions';
import { connect } from 'react-redux';
import store from '../../../../store'

class HotelCreate extends React.Component {
  state = {
    modal: false,
    name: '',
    filePath: '',
    price: '',
    stars: '',
    days: '',
    location: '',
    hotel: '',
    food: 'Все включено',
    people: '',
    kids: '',
    description: '',
    country: 'Египет',
    type: 'Отдых на море',
    fileEnabled: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeFile = e => {
    this.setState({ [e.target.name]: e.target.value, fileEnabled: true });
  }

  onSubmit = e => {
    e.preventDefault();
    
    const pic = new FormData();
    pic.append('file', document.getElementById('file').files[0]);

    const newItem = {
      name: this.state.name,
      price: this.state.price,
      stars: this.state.stars,
      days: this.state.days,
      location: this.state.location,
      hotel: this.state.hotel,
      food: this.state.food,
      people: this.state.people,
      kids: this.state.kids,
      description: this.state.description,
      country: this.state.country,
      type: this.state.type,
      filePath: this.state.filePath
    };

    if(this.props.edit && this.state.fileEnabled) {
      fetch('/api/upload', {
        method: 'POST',
        mode: 'cors',
        body: pic
      }).then(res => res.json()).then(i => {
        newItem.filePath = i;
        this.props.editItem(this.props.tour._id, newItem)
      });
    } else if(this.props.edit) {
      this.props.editItem(this.props.tour._id, newItem)
    } else {
      fetch('/api/upload', {
        method: 'POST',
        mode: 'cors',
        body: pic
      }).then(res => res.json()).then(i => {
        newItem.filePath = i;
        this.props.addItem(newItem)
      });
    }

    setTimeout(() => {
      store.dispatch(getItems());
    }, 300);

    // Close modal
    this.toggle();
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.edit && this.state.modal !== prevState.modal) {
      document.getElementById('name').value = this.props.tour.name;
      document.getElementById('price').value = this.props.tour.price;
      document.getElementById('stars').value = this.props.tour.stars;
      document.getElementById('food').value = this.props.tour.food;
      document.getElementById('people').value = this.props.tour.people;
      document.getElementById('kids').value = this.props.tour.kids;
      document.getElementById('description').value = this.props.tour.description;
      document.getElementById('country').value = this.props.tour.country;
      document.getElementById('type').value = this.props.tour.type;
      document.getElementById('days').value = this.props.tour.days;
      document.getElementById('location').value = this.props.tour.location;
      document.getElementById('hotel').value = this.props.tour.hotel;


      this.setState({
        name: this.props.tour.name,
        filePath: this.props.tour.filePath,
        price: this.props.tour.price,
        stars: this.props.tour.stars,
        days: this.props.tour.days,
        location: this.props.tour.location,
        hotel: this.props.tour.hotel,
        food: this.props.tour.food,
        people: this.props.tour.people,
        kids: this.props.tour.kids,
        description: this.props.tour.description,
        country: this.props.tour.country,
        type: this.props.tour.type,
      })
    }
  }

  render() {
    return(
      <div>
      <Button
        color={ this.props.edit ? "#ffa100" : "primary"}
        style={ this.props.edit ? {color:"#ffa100"} : {color:"#fff"}}
        size="small"
        onClick={this.toggle}
      >
        { this.props.edit ? "Редагувати" : "Додати" }
      </Button>
    <Modal isOpen={this.state.modal} toggle={this.toggle} style={{zIndex:"100"}}>
        <ModalHeader toggle={this.toggle}>Додати новый тур</ModalHeader>
          <ModalBody>
          <Form onSubmit={this.onSubmit} encType="multipart/form-data">
          <FormGroup>
            <Label for='email'>Назва</Label>
            <Input
              type='text'
              name='name'
              id='name'
              placeholder='name'
              className='mb-3'
              onChange={this.onChange}
            />
            <Input
              type='file'
              name='file'
              id='file'
              className='mb-3'
              accept="image/*"
              onChange={this.onChangeFile}
            />
             <FormGroup>
              <Label for="type">Тип туру</Label>
              <Input type="select" name="type" id="type" onChange={this.onChange} defaultValue="Відпочинок на морі">
                <option value="Відпочинок на морі">Відпочинок на морі</option>
                <option value="Вихідні тури" >Вихідні тури</option>
                <option value="Лікувальні тури" >Лікувальні тури</option>
                <option value="Екскурсії" >Екскурсії</option>
                <option value="Активний відпочинок" >Активний відпочинок</option>
                <option value="Круїзи" >Круїзи</option>
                <option value="Сафарі" >Сафарі</option>
                <option value="Гірські курорти" >Гірські курорти</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="country">Країна</Label>
              <Input type="select" name="country" id="country" onChange={this.onChange} defaultValue="Египет">
                {this.props.item.countrys ? this.props.item.countrys.map(co => {
                  return <option value={ co.name } key={ co._id } >{ co.name }</option>
                }) : null}
              </Input>
            </FormGroup>
            <Label for='email'>Готель</Label>
            <Input
              type='text'
              name='hotel'
              id='hotel'
              placeholder='hotel'
              className='mb-3'
              onChange={this.onChange}
            />
            <Label for='email'>Ціна</Label>
            <Input
              type='text'
              name='price'
              id='price'
              placeholder='price'
              className='mb-3'
              onChange={this.onChange}
            />
            <Label for='email'>Звезды</Label>
            <Input
              type='text'
              name='stars'
              id='stars'
              placeholder='stars'
              className='mb-3'
              onChange={this.onChange}
            />
            <FormGroup>
              <Label for="type">Харчування</Label>
              <Input type="select" name="food" id="food" onChange={this.onChange} defaultValue="Все включено">
                <option value="Все включено">Все включено</option>
                <option value="Завтрак" >Завтрак</option>
                <option value="2 приема" >2 приема</option>
                <option value="Не включено" >Не включено</option>
              </Input>
            </FormGroup>
            <Label for='email'>Днів</Label>
            <Input
              type='text'
              name='days'
              id='days'
              placeholder='days'
              className='mb-3'
              onChange={this.onChange}
            />
            <Label for='email'>Розміщення</Label>
            <Input
              type='text'
              name='location'
              id='location'
              placeholder='location'
              className='mb-3'
              onChange={this.onChange}
            />
            <Label for='email'>Дорослих</Label>
            <Input
              type='text'
              name='people'
              id='people'
              placeholder='people'
              className='mb-3'
              onChange={this.onChange}
            />
            <Label for='email'>Дітей</Label>
            <Input
              type='text'
              name='kids'
              id='kids'
              placeholder='kids'
              className='mb-3'
              onChange={this.onChange}
            />
            <Label for='email'>Опис</Label>
            <Input
              type='text'
              name='description'
              id='description'
              placeholder='description'
              className='mb-3'
              onChange={this.onChange}
            />
            <Button color='dark' style={{ marginTop: '2rem' }} block>
              Додати
            </Button>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { addItem , editItem , getItems, getCountrys }
)(HotelCreate);