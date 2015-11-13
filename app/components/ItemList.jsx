var React = require('react');
var action = require('./../actions/ItemActionCreator.jsx');
var Item = require('./Item.jsx');
var ListNav = require('./ListNav.jsx');
var ListHeader = require('./ListHeader.jsx');

var _MS_PER_DAY = 1000 * 60 * 60 * 24;

module.exports = React.createClass({
  getInitialState:function(){

    var items = [{"tgtConvDate":"11/8/2015","train":1,"environment":"DEV","appWing":"N/A","webWing":"N/A","cell":"cppDEV1","wasVersion":"8.0.0.4","type":"Web","server":"ax-riscvmwsph36","appServerName ":"ax-riscvmwsph36","appName":"ATLAS - Ingenium - Advanced Total Life Administrative Solution","shortAppName":"atlas","eai":1027,"projectManager":"Garfield,Kenneth","managerEmail":"kgarfield@mailinator.net","masterAppName":"Atlas","envSignOff":false,"guideSignOff":false},
  {"tgtConvDate":"11/9/2015","train":1,"environment":"DEV","appWing":"N/A","webWing":"N/A","cell":"cppDEV1","wasVersion":"8.0.0.4","type":"Web","server":"ax-riscvmwsph99","appServerName ":"ax-riscvmwsph99","appName":"ATLAS - Ingenium - Advanced Total Life Administrative Solution","shortAppName":"atlas","eai":1028,"projectManager":"Garfield,Kenneth","managerEmail":"kgarfield@mailinator.net","masterAppName":"Atlas","envSignOff":false,"guideSignOff":false},
  {"tgtConvDate":"11/9/2015","train":1,"environment":"DEV","appWing":"Wing3","webWing":"Wing3","cell":"employee4DEV","wasVersion":"6.1.0.29","type":"Web","server":"axscgpar0077","appServerName ":"axscgpar0077","appName":"Group Life Plan Feed Services - glpfServices ","shortAppName":"GlpfServices","eai":1029,"projectManager":"Garfield,Kenneth","managerEmail":"kgarfield@mailinator.net","masterAppName":"Atlas","envSignOff":false,"guideSignOff":false},
  {"tgtConvDate":"11/9/2015","train":1,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"AcctMgrCust","eai":1030,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false},
  {"tgtConvDate":"11/9/2015","train":1,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"AppEAR","eai":1031,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false},
  {"tgtConvDate":"11/9/2015","train":1,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"BillDataService","eai":1032,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false},
  {"tgtConvDate":"11/10/2015","train":2,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"CCPRCustomerCreateEAR","eai":1033,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false},
  {"tgtConvDate":"11/10/2015","train":2,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"CDFCoverage111EAR","eai":1034,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false},
  {"tgtConvDate":"11/10/2015","train":2,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"CDFCoverage111JRPCEAR  ","eai":1035,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false},
  {"tgtConvDate":"11/10/2015","train":2,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"CDFCustOut251","eai":1036,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false},
  {"tgtConvDate":"11/10/2015","train":2,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"CDFCustOut251JRPC","eai":1037,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false},
  {"tgtConvDate":"11/21/2015","train":3,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"CDFCustOut261EAR","eai":1038,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false},
  {"tgtConvDate":"11/21/2015","train":3,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"  CDFCustomer","eai":1039,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false},
  {"tgtConvDate":"11/21/2015","train":3,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"  CDFCustomerCreate","eai":1040,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false},
  {"tgtConvDate":"11/24/2015","train":3,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"  CDFCustomerCreateEAR","eai":1041,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false},
  {"tgtConvDate":"11/24/2015","train":3,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"  CDFCustomerCreateJRPC","eai":1042,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false},
  {"tgtConvDate":"11/31/2015","train":4,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"  CDFCustomerJRPC","eai":1043,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false},
  {"tgtConvDate":"11/31/2015","train":4,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"  CDFFA","eai":1044,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false},
  {"tgtConvDate":"11/31/2015","train":4,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"  CDFPlan","eai":1045,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false}];

    return {
      checked:false
      ,items: items
    }
  }
  ,onChildChanged: function(newState,i){
    this.setState({checked:newState});
    this.props.items[i].selected = newState;
    console.log('you clicked: ' + this.props.items[i]._id);
  }
  ,convertFromStringToDate:function(date){
    var da = date.split('/');
    return new Date(da[2], da[0]-1, da[1])
  }
  ,getDayDiff: function(a,b){
    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc2-utc1)/_MS_PER_DAY);
  }
  ,returnColor: function(item){

    var dayDiff = this.getDayDiff(new Date(), this.convertFromStringToDate(item.tgtConvDate));

    if (  dayDiff  < 0 )
      return 'red';
    else if (  dayDiff <= 14 )
      return 'amber';
    else
      return 'green';

  }
  ,emailSelected: function(e){
    var lst = [];

    this.props.items.forEach(function(item){
      if ( item.selected){
        lst.push(item);
      }
    });

    console.log(lst);
    action.email(lst);
  }
  ,render: function(){
    return (

      <div>
        <ListNav />
        <ListHeader />

        <div>
          {this.state.items.map(function(item, i){

            return(
            <Item  eso={item.envSignOff} gso={item.guideSignOff} color={this.returnColor(item)} callbackParent={this.onChildChanged} item={item} key={item._id} itemIndex={i}/>
            )
          }, this).sort(function(a, b){
            return a.props.item.train-b.props.item.train;
          })}
        </div>

        <div className = 'emailChecked'>
            <button onClick={this.emailSelected}> Email Selected </button>
        </div>

      </div>
    )
  }
});
