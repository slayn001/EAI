var React = require('react');

module.exports = React.createClass({
  render: function(){
    return(
      <div className='heading row'>
        <div className='one columns'> <b>Train</b></div>
        <div className='one columns'> <b>Target Date</b></div>
        <div className='one columns'> <b>EAI</b></div>
        <div className='two columns'> <b>Project Manager</b></div>
        <div className='one columns'> <b>Application</b></div>
        <div className='two columns'> <b>Server</b></div>
        <div className='one columns'> <b>Cell</b></div>
        <div className='one columns'> &nbsp; </div>
        <div className='one columns'> <b>Env Signoff</b></div>
        <div className='one columns'> <b>Guideline Signoff</b></div>
      </div>
    )
  }
});
