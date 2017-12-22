import React from 'react';
import { render } from 'react-dom';
import { AddItem } from './components/AddItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: ['Testing', 'Hello']
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const itemArray = this.state.items.push(event.target.value);
    this.setState({ items: itemArray });
    console.log(this.state.value);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className="container">
        <h2>Add Item</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add a new item:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Add item" className="btn btn-primary" />
        </form>
        <AddItem items={this.state.items} />
      </div>
    );
  }
}

render(<App />, window.document.getElementById('app'));
