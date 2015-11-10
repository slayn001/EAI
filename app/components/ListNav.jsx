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
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Page 1</a></li>
              <li><a href="#">Page 2</a></li>
              <li><a href="#">Page 3</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
});
