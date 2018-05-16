import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom'
import {withRouter} from 'react-router-dom'


import './task-form.css';


import { Redirect } from 'react-router-dom'

export class TaskForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(...arguments);

    this.state = {title: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
    super(props)

    this.goHome = this.goHome.bind(this)
  }

  goHome() {
  this.props.history.push('./task-form2')
  
  }

  clearInput() {
    this.setState({title: ''});
  }

  handleChange(event) {
    this.setState({title: event.target.value});
  }

  handleKeyUp(event) {
    if (event.keyCode === 27) this.clearInput();
  }

  handleSubmit(event) {
    event.preventDefault();
    const title = this.state.title.trim();
    if (title.length) this.props.handleSubmit(title);
    this.clearInput();
  }

  render() {
    return (
      <form className="task-form" onSubmit={this.handleSubmit} noValidate>
        <p> Private List </p>
        <input
          autoComplete="off"
          autoFocus
          className="task-form__input"
          maxLength="64"
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          placeholder="What needs to be done?"
          ref={e => this.titleInput = e}
          type="text"
          value={this.state.title}
        />
      </form>
    );
      <div className="foo">
        <button onClick={this.goHome} />
      </div>
    }
  }



export default TaskForm;
