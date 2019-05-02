import React from "react"
import {
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import CommentCard from './cards/CommentCard'

class Feedback extends React.Component {
  state = {
    done: false,
    name: '',
    comment: '',
    comments: null
  };

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    fetch('/api/comment/' + this.props.id).then(res => res.json()).then(comments => this.setState({ comments }))
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if(this.state.name === '' || this.state.comment === '') {
      document.getElementById('error').textContent = 'Заповніть всі поля'
    } else {
    const newItem = {
      name: this.state.name,
      comment: this.state.comment,
      id: this.props.id
    };

    console.log(newItem);
    
    fetch('/api/comment', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(newItem)
    }).then(() => {this.setState({ done: true }); setTimeout(() => {
      this.getData()
    }, 300);})
  }

  };

  render() {
    if(!this.state.done) {
      return(
        <div>
          <Form onSubmit={this.onSubmit} className="tour__search">
            <h4 className="search__tour">Залишити відгук</h4>
            <FormGroup>
              <Label for="date">Ім'я</Label>
              <Input type="text" name="name" id="name" placeholder="Ім'я" onChange={this.onChange} />
            </FormGroup>
            <FormGroup>
              <Label for="date">Відгук</Label>
              <Input type="textarea" name="comment" id="comment" placeholder="Ваш відгук" onChange={this.onChange} />
            </FormGroup>
            <p id="error"></p>
            <FormGroup>
              <input className="grid__button" type="submit" value="Відправити" />
            </FormGroup>
          </Form>
          <div className="tour__search">
            <h4 className="search__tour">Відгуки</h4>
            {this.state.comments ? this.state.comments.map((item, i) => {
              return <CommentCard key={i} item={item} />
            }) : "Відгуків немає"}
          </div>
        </div>
      )
      } else {
      return(
        <div>
          <div className="tour__search">
            <div className="form__thanks" style={{ background: 'none', marginBottom: '20px', color: 'black' }}>
              Дякуемо, за Ваш відгук
            </div>
            <h4 className="search__tour">Відгуки</h4>
            {this.state.comments ? this.state.comments.map((item, i) => {
              return <CommentCard key={i} item={item} />
            }) : "Відгуків немає"}
          </div>
        </div>
      )
    }
  }
}

export default Feedback