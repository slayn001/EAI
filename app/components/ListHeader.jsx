var React = require('react');

module.exports = React.createClass({
  render: function(){
    return(
      <div className='heading row'>
        <div className='one columns'> <b>Target Date</b></div>
        <div className='one columns'> <b>EAI</b></div>
        <div className='one columns'style={{marginLeft:1+'%'}}> <b>Train</b></div>
        <div className='two columns' style={{marginLeft:1+'%'}}> <b>Project Manager</b></div>
        <div className='one columns'> <b>Application</b></div>
        <div className='one columns' style={{marginLeft:4+'%'}}> <b>Tester Email</b></div>
        <div className='two columns' style={{marginLeft:2+'%'}}> <b>Server</b></div>
        <div className='one columns'> <b>Cell</b></div>
        <div className='one columns'style={{marginLeft:8+'%'}}> <b>Env Signoff</b></div>
        <div className='one columns'> <b>Guideline Signoff</b></div>
      </div>
    )
  }
});
