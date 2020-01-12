import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'

export default class App extends Component {
  data = [
    {
      key: 'cape',
      value: 'Cape Town',
    },
    {
      key: 'johanesburg',
      value: 'Johanesburg',
    },
    {
      key: 'durban',
      value: 'Durban',
    },
    {
      key: 'pretoria',
      value: 'Pretoria',
    },
    {
      key: 'port elizabeth',
      value: 'Port Elizabeth',
    },
    {
      key: 'east london',
      value: 'East London',
    },
    {
      key: 'bloemfontein',
      value: 'Bloemfontein',
    },
    {
      key: 'stellenbosch',
      value: 'Stellenbosch',
    },
    {
      key: 'richards bay',
      value: 'Richards Bay',
    },


  ]

  render() {
    return (
      <ReactSearchBox
        placeholder="Search by City"
        value="Search by City"
        inputBoxFontColor="green"
        inputBoxBorderColor="yellow"
        dropDownHoverColor="yellow"
        dropDownBorderColor="green"
        data={this.data}
        callback={record => console.log(record)}
      />
    )
  }
}