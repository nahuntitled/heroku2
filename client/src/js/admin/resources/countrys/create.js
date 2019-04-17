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
import { getCountrys, addCountry } from '../../../actions/itemActions';
import store from '../../../../store';
import { connect } from 'react-redux';

class CountryCreate extends React.Component {
  state = {
    modal: false,
    name: '',
    description: '',
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
    
    const pic = new FormData();
    pic.append('file', document.getElementById('file').files[0]);

    const newItem = {
      name: this.state.name,
      description: this.state.description,
      imgPath: ""
    };

    fetch('/api/upload', {
      method: 'POST',
      mode: 'cors',
      body: pic
    }).then(res => res.json()).then(i => {
      newItem.imgPath = i;

      // Add or Edit item action
      this.props.edit ?
      fetch('/api/countrys/' + this.props.tour._id, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(newItem)
      }) :
      this.props.addCountry(newItem)
    });

    setTimeout(() => {
      store.dispatch(getCountrys());
    }, 400);

    // Close modal
    this.toggle();
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.edit && this.state.modal !== prevState.modal) {
      document.getElementById('name').value = this.props.tour.name;
      document.getElementById('description').value = this.props.tour.description;

      this.setState({
        name: this.props.tour.name,
        description: this.props.tour.description
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
        <ModalHeader toggle={this.toggle}>Добавить страну</ModalHeader>
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
  country: state.country,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getCountrys, addCountry }
)(CountryCreate);