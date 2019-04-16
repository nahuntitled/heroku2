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
import { addItem , editItem, getItems } from '../../../actions/itemActions';
import { connect } from 'react-redux';
import store from '../../../../store'

class HotelCreate extends React.Component {
  state = {
    modal: false,
    name: '',
    price: '',
    stars: '',
    food: '',
    people: '',
    kids: '',
    description: '',
    countryId: '',
    times: 0
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    
    const newItem = {
      name: this.state.name,
      price: this.state.price,
      stars: this.state.stars,
      food: this.state.food,
      people: this.state.people,
      kids: this.state.kids,
      description: this.state.description,
      countryId: this.state.countryId,
    };

    // Add or Edit item action
    this.props.edit ?
    this.props.editItem(this.props.tour._id,  newItem):
    this.props.addItem(newItem)

    store.dispatch(getItems());

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
      document.getElementById('countryId').value = this.props.tour.countryId;

      this.setState({
        name: this.props.tour.name,
        price: this.props.tour.price,
        stars: this.props.tour.stars,
        food: this.props.tour.food,
        people: this.props.tour.people,
        kids: this.props.tour.kids,
        description: this.props.tour.description,
        countryId: this.props.tour.countryId,
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
        { this.props.edit ? "Изменить" : "Добавить" }
      </Button>
    <Modal isOpen={this.state.modal} toggle={this.toggle} style={{zIndex:"100"}}>
        <ModalHeader toggle={this.toggle}>Додати новый тур</ModalHeader>
          <ModalBody>
          <Form onSubmit={this.onSubmit}>
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
            <Label for='email'>Харчування</Label>
            <Input
              type='text'
              name='food'
              id='food'
              placeholder='food'
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
             <Label for='email'>Країна</Label>
            <Input
              type='text'
              name='countryId'
              id='countryId'
              placeholder='countryId'
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
  { addItem , editItem , getItems }
)(HotelCreate);