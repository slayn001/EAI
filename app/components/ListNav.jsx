var React = require('react/addons');

module.exports = React.createClass({
  render:function(){
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#"><img src='/metlifeLogoTrans.png' /></a>
          </div>
          <div>
            <ul className="nav navbar-nav">
              <li className='red'><a>Delinquent</a></li>
              <li className='amber'><a>Coming Due</a></li>
              <li className='green'><a>Future Items</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
});
