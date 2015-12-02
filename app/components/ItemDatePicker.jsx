var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');

//require('react-datepicker/dist/react-datepicker.css');

module.exports = React.createClass({
  displayName: 'Example',

  getInitialState: function() {
    return {
      startDate: moment()
    };
  },

  handleChange: function(date) {
    this.setState({
      startDate: date
    });
  },

  render: function() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange} />;
  }
});