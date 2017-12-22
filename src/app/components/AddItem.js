import React from 'react';

export class AddItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const listItems = this.props.items;
    const itemcontent = listItems.map(item => {
      console.log(item);
      return <li key={item}>{item}</li>;
    });
    return <ul>{itemcontent}</ul>;
  }
}
