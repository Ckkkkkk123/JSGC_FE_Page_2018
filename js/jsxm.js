function resetInput() {
	$(" input").val("")
}

var baseUrl = "http://123.206.254.42:2333";
var getProjectListUrl = baseUrl + "/getProjectList";
var getProjectDetailUrl = baseUrl + "/getProjectDetail";
var updateProjectDetailUrl = baseUrl + "/updateProjectDetail";
var getContractDetailUrl=baseUrl+"/getContractDetail";
var updateContractDetailUrl = baseUrl + "/updateContractDetail";
var updateFinanceDetailUrl = baseUrl + "/updateFinance";


function getDepartmentOption(departmentList) {
	for(i in departmentList) {

		$('#projectDepartmentEdit').append('<option value=' + departmentList[i]["departmentID"] + '>' + departmentList[i]["departmentName"] + '</option>');
		$('#projectDepartment').append('<option value=' + departmentList[i]["departmentID"] + '>' + departmentList[i]["departmentName"] + '</option>');
	}
}


function getBuildContentOption(buildContentList){
	for(i in buildContentList){
		$('#buildContentEdit').append('<option value=' + buildContentList[i]["buildContentID"] + '>' + buildContnetList[i]["buildInfo"] + '</option>');
	}
}


function getLendTypeOption(lendTypeList) {

	//	$.each(lendTypeList, function(index, el) {
	//		//alert(el);
	//		$('#lendType').append('<option value=' + index + '>' + el + '</option>');
	//	});

	for(i in lendTypeList) {

		$('#lendTypeUpdt').append('<option value=' + lendTypeList[i]["lendTypeID"] + '>' + lendTypeList[i]["lendTypeValue"] + '</option>');
		$('#lendType').append('<option value=' + lendTypeList[i]["lendTypeID"] + '>' + lendTypeList[i]["lendTypeValue"] + '</option>');
	}
}

function getBorrowTypeOption(borrowTypeList) {
//	$.each(borrowTypeList, function(index, el) {
//		//alert(el);
//		$('#borrowType').append('<option value=' + index + '>' + el + '</option>');
//	});
for(i in borrowTypeList) {

		$('#borrowTypeUpdt').append('<option value=' + borrowTypeList[i]["borrowTypeID"] + '>' + borrowTypeList[i]["borrowTypeValue"] + '</option>');
		$('#borrowType').append('<option value=' + borrowTypeList[i]["borrowTypeID"] + '>' + borrowTypeList[i]["borrowTypeValue"] + '</option>');
	}
}

function getPayWayOption(payWayList) {
//	$.each(payWayList, function(index, el) {
//		//alert(el);
//		$('#payWay').append('<option value=' + index + '>' + el + '</option>');
//	});
for(i in payWayList) {

		$('#payWayUpdt').append('<option value=' + payWayList[i]["payWayID"] + '>' + payWayList[i]["payWayValue"] + '</option>');
		$('#payWay').append('<option value=' + payWayList[i]["payWayID"] + '>' + payWayList[i]["payWayValue"] + '</option>');
	}
}

function getPurchaseWayOption(purchaseWayList) {
//	$.each(purchaseWayList, function(index, el) {
//		//alert(el);
//		$('#purchaseWay').append('<option value=' + index + '>' + el + '</option>');
//	});

for(i in purchaseWayList) {

		$('#purchaseWayUpdt').append('<option value=' + purchaseWayList[i]["purchaseWayID"] + '>' + purchaseWayList[i]["purchaseWayValue"] + '</option>');
		$('#purchaseWay').append('<option value=' + purchaseWayList[i]["purchaseWayID"] + '>' + purchaseWayList[i]["purchaseWayValue"] + '</option>');
	}
}

function getOrgWayOption(orgWayList) {
//	$.each(orgWayList, function(index, el) {
//		//alert(el);
//		$('#orgWay').append('<option value=' + index + '>' + el + '</option>');
//	});

for(i in orgWayList) {

		$('#orgWayUpdt').append('<option value=' + orgWayList[i]["orgWayID"] + '>' + orgWayList[i]["orgWayValue"] + '</option>');
		$('#orgWay').append('<option value=' + orgWayList[i]["orgWayID"] + '>' + orgWayList[i]["orgWayValue"] + '</option>');
	}
}

function getPurchaseTypeOption(purchaseTypeList) {
//	$.each(purchaseTypeList, function(index, el) {
//		//alert(el);
//		$('#purchaseType').append('<option value=' + index + '>' + el + '</option>');
//	});

for(i in purchaseTypeList) {

		$('#purchaseTypeUpdt').append('<option value=' + purchaseTypeList[i]["purchaseTypeID"] + '>' + purchaseTypeList[i]["purchaseTypeValue"] + '</option>');
		$('#purchaseType').append('<option value=' + purchaseTypeList[i]["purchaseTypeID"] + '>' + purchaseTypeList[i]["purchaseTypeValue"] + '</option>');
	}
}