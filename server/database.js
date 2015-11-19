var mongoose = require('mongoose');
var Item = require('./models/Item.js');

mongoose.connect('mongodb://localhost/eai', function(){
  console.log('connected.');

  mongoose.connection.db.dropDatabase();

  var items = [{"tgtConvDate":"11/8/2015","train":1,"environment":"DEV","appWing":"N/A","webWing":"N/A","cell":"cppDEV1","wasVersion":"8.0.0.4","type":"Web","server":"ax-riscvmwsph36","appServerName ":"ax-riscvmwsph36","appName":"ATLAS - Ingenium - Advanced Total Life Administrative Solution","shortAppName":"atlas","eai":1027,"projectManager":"Garfield,Kenneth","managerEmail":"kgarfield@mailinator.net","masterAppName":"Atlas","envSignOff":false,"guideSignOff":false,"cellOwner":false},
{"tgtConvDate":"11/9/2015","train":1,"environment":"DEV","appWing":"N/A","webWing":"N/A","cell":"cppDEV1","wasVersion":"8.0.0.4","type":"Web","server":"ax-riscvmwsph99","appServerName ":"ax-riscvmwsph99","appName":"ATLAS - Ingenium - Advanced Total Life Administrative Solution","shortAppName":"atlas","eai":1028,"projectManager":"Garfield,Kenneth","managerEmail":"kgarfield@mailinator.net","masterAppName":"Atlas","envSignOff":false,"guideSignOff":false,"cellOwner":false},
{"tgtConvDate":"11/9/2015","train":1,"environment":"DEV","appWing":"Wing3","webWing":"Wing3","cell":"employee4DEV","wasVersion":"6.1.0.29","type":"Web","server":"axscgpar0077","appServerName ":"axscgpar0077","appName":"Group Life Plan Feed Services - glpfServices ","shortAppName":"GlpfServices","eai":1029,"projectManager":"Garfield,Kenneth","managerEmail":"kgarfield@mailinator.net","masterAppName":"Atlas","envSignOff":false,"guideSignOff":false,"cellOwner":false},
{"tgtConvDate":"11/9/2015","train":1,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"AcctMgrCust","eai":1030,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false,"cellOwner":false},
{"tgtConvDate":"11/9/2015","train":1,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"AppEAR","eai":1031,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false,"cellOwner":false},
{"tgtConvDate":"11/9/2015","train":1,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"BillDataService","eai":1032,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false,"cellOwner":false},
{"tgtConvDate":"11/10/2015","train":2,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"CCPRCustomerCreateEAR","eai":1033,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false,"cellOwner":false},
{"tgtConvDate":"11/10/2015","train":2,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"CDFCoverage111EAR","eai":1034,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false,"cellOwner":false},
{"tgtConvDate":"11/10/2015","train":2,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"CDFCoverage111JRPCEAR  ","eai":1035,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false,"cellOwner":false},
{"tgtConvDate":"11/10/2015","train":2,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"CDFCustOut251","eai":1036,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false,"cellOwner":false},
{"tgtConvDate":"11/10/2015","train":2,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"CDFCustOut251JRPC","eai":1037,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false,"cellOwner":false},
{"tgtConvDate":"11/21/2015","train":3,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"CDFCustOut261EAR","eai":1038,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false,"cellOwner":false},
{"tgtConvDate":"11/21/2015","train":3,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"  CDFCustomer","eai":1039,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false,"cellOwner":false},
{"tgtConvDate":"11/21/2015","train":3,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"  CDFCustomerCreate","eai":1040,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false,"cellOwner":false},
{"tgtConvDate":"11/24/2015","train":3,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"  CDFCustomerCreateEAR","eai":1041,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false,"cellOwner":false},
{"tgtConvDate":"11/24/2015","train":3,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"  CDFCustomerCreateJRPC","eai":1042,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false,"cellOwner":false},
{"tgtConvDate":"11/31/2015","train":4,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"  CDFCustomerJRPC","eai":1043,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false,"cellOwner":false},
{"tgtConvDate":"11/31/2015","train":4,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"  CDFFA","eai":1044,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false,"cellOwner":false},
{"tgtConvDate":"11/31/2015","train":4,"environment":"DEV","appWing":"Wing 5","webWing":"Wing 5","cell":"webservices6DEV","wasVersion":"6.1.0.29","type":"Web","server":"AXSCGPAR0076","appServerName ":"AXSCGPAR0076","appName":"CDFWS - Case Definition Facility Web Services ","shortAppName":"  CDFPlan","eai":1045,"projectManager":"Yerkola,Sunil","managerEmail":"syerkola@mailinator.net","masterAppName":"Case Definition Facility (CDF)","envSignOff":false,"guideSignOff":false,"cellOwner":false}];

	items.forEach(function(e){
	  e.cell = e.cell.toUpperCase();
	})


	items.sort(function(a,b){
		if (a.cell > b.cell)
			return 1;
		if (a.cell < b.cell)
			return -1;
		if (a.cell === b.cell)
			return 0;	
	})
  	var first;
	items.forEach(function(e){
		if ( e.cell != first)
			e.cellOwner = true;
		first = e.cell;
	});

	items.forEach(function(item){
	//console.log(  new Item(item));
		new Item(item).save();
 	});

});
