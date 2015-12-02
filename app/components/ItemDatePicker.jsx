var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');

module.exports = React.createClass({
  

  getInitialState: function() {
    
    return {
      startDate: moment(this.props.date)
    };
  },

  handleChange: function(date) {
    this.setState({
      startDate: date
    });
    this.props.callbackParent(date.format('L'));
  },

  render: function() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange} />;
  }
});