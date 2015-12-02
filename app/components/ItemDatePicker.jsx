var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');

//require('react-datepicker/dist/react-datepicker.css');

module.exports = React.createClass({
  

  getInitialState: function() {
    
    return {
      date: moment(this.props.date)
    };
  },

  handleChange: function(date) {
    this.setState({
      date: date
    });
  },

  render: function() {
    return <DatePicker
        selected={this.state.date}
        onChange={this.handleChange} />;
  }
});