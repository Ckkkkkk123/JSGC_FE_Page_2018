function resetInput() {
	$(" input").val("")
}

var baseUrl = "http://123.206.254.42:2333";
var testUrl = "http://localhost:8080";

var getProjectListUrl = baseUrl + "/getProjectList";
var getProjectDetailUrl = baseUrl + "/getProjectDetail";
var addProjectUrl = baseUrl + "/addProject";
var deleteProjectUrl = testUrl + "/deleteProject";
var updateProjectDetailUrl = baseUrl + "/updateProjectDetail";
var getAssetListUrl = baseUrl + "/getAssetList";
var getAssetDetailUrl = baseUrl + "/getAssetDetail";
var getAssetUpdateUrl = baseUrl + "/getAssetUpdate";
var updateAssetDetailUrl = baseUrl + "/updateAssetDetail";
var addAssetUrl = baseUrl + "/addAsset";
var deleteAssetUrl = baseUrl + "/deleteAsset";
var getContractDetailUrl=baseUrl+"/getContractDetail";
var updateContractDetailUrl = baseUrl + "/updateContractDetail";
var getFinanceUpdateUrl = baseUrl + "/getFinanceUpdate";
var getFinanceDetailUrl = baseUrl + "/getFinanceDetail";
var deleteAssetUrl = testUrl + "/deleteAsset";
var updateFinanceDetailUrl = baseUrl + "/updateFinance";
var loginUrl = baseUrl + "/login";
var logoutUrl = testUrl + '/logout';
var getUserListUrl = baseUrl + "/getUserList";
var getUserDetailUrl = baseUrl + "/initUserUpdate";
var updateUserUrl = baseUrl + "/updateUser";
var updateUserInfoUrl = baseUrl + "/updateUserInfo";
var addUserUrl = baseUrl + "/addUser";
var addFinanceDetailUrl = baseUrl + "/addFinance";


var getBudgetDetailUrl=baseUrl+"/getBudgetDetail";
var getContractUseMoneyUrl=baseUrl+'/getContractUseMoney';

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


function getLevelOption(levelList) {
//	$.each(purchaseTypeList, function(index, el) {
//		//alert(el);
//		$('#purchaseType').append('<option value=' + index + '>' + el + '</option>');
//	});

for(i in levelList) {

		$('#level').append('<option value=' + levelList[i]["levelID"] + '>' + levelList[i]["levelValue"] + '</option>');
		$('#levelEdit').append('<option value=' + levelList[i]["levelID"] + '>' + levelList[i]["levelValue"] + '</option>');
	}
}

function getQueryString() {
    var qs = location.search.substr(1),
    // 获取url中"?"符后的字串  
    args = {},
    // 保存参数数据的对象qwewq
    items = qs.length ? qs.split("&") : [],
    // 取得每一个参数项,
    item = null,
    len = items.length;

    for (var i = 0; i < len; i++) {
        item = items[i].split("=");
        var name = decodeURIComponent(item[0]),
        value = decodeURIComponent(item[1]);
        if (name) {
            args[name] = value;
        }
    }
    return args;
}

//获取
//var qs = getQueryString();
//var storeID = qs["storeID"];