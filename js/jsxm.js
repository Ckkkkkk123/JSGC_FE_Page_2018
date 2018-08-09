function resetInput() {
	$("#chooseCard input").val("");
	$("#chooseCard .chose2").val("2");
	$('#chooseCard .chosen-select').val("")
	$('#financePaid').val(2)
	$('#chooseCard .chosen-select').trigger("chosen:updated");
}

var baseUrl = "http://localhost:8080";
var testUrl = "http://localhost:8080";
var pyUrl = "http://localhost:8002";
var getProjectListUrl = baseUrl + "/getProjectList";
var getProjectDetailUrl = testUrl + "/getProjectDetail";
var addProjectUrl = testUrl + "/addProject";
var deleteProjectUrl = testUrl + "/deleteProject";
var updateProjectDetailUrl = baseUrl + "/updateProjectDetail";
var applyMoneyUrl=baseUrl+"/applyMoney";
var getAssetListUrl = testUrl + "/getAssetList";
var getAssetDetailUrl = baseUrl + "/getAssetDetail";
var getAssetUpdateUrl = baseUrl + "/getAssetUpdate";
var updateAssetDetailUrl = baseUrl + "/updateAssetDetail";
var addAssetUrl = baseUrl + "/addAsset";
var deleteAssetUrl = baseUrl + "/deleteAsset";
var getTopPersonListUrl = baseUrl +'/getTopPersonList'
var getExpSumUrl = baseUrl +'/getExpSum' 
var getDayDataListUrl = baseUrl +'/getDayDataList'
var getContractListUrl = testUrl + "/getContractList";
var getContractDetailUrl = testUrl + "/getContractDetail";
var updateContractDetailUrl = baseUrl + "/updateContractDetail";
var addContractDetailUrl = testUrl + "/addContract";
var deleteContractUrl = testUrl + "/deleteContract";
var updateNewVersionUrl = testUrl +'/updateNewVersion'
var getDocListUrl = testUrl + "/getDocList";

var getBudgetListUrl = testUrl + "/getBudgetList";
var getBudgetDetailrl = baseUrl + "/getBudgetDetail";
var addNotificationUrl = baseUrl +"/addNotification";
var getVerifyListUrl = baseUrl +"/getVerifyList";
var delVerifyUrl = baseUrl +'/delVerify';
var passVerifyUrl = baseUrl +'/passVerify';
var getDocumentDetailUrl = baseUrl + "/getDocumentDetail";
var updateDocumentDetailUrl = baseUrl + "/updateDocumentDetail";

var getFinanceListUrl = testUrl + "/getFinanceList";
var getFinanceUpdateUrl = baseUrl + "/getFinanceUpdate";
var getFinanceDetailUrl = baseUrl + "/getFinanceDetail";
var deleteFinanceUrl = baseUrl + "/deleteFinance";
var addFinanceDetailUrl = baseUrl + "/addFinance";
var updateFinanceDetailUrl = baseUrl + "/updateFinance";

var getBudgetListUrl = baseUrl + "/getBudgetList";
var getBudgetDetailUrl = baseUrl + "/getBudgetDetail";

var loginUrl = baseUrl + "/login";
var logoutUrl = testUrl + '/logout';
var getUserListUrl = testUrl + "/getUserList";
var getUserDetailUrl = testUrl + "/initUserUpdate";
var updateUserUrl = testUrl + "/updateUser";
var updateUserInfoUrl = baseUrl + "/updateUserInfo";
var addUserUrl = testUrl + "/addUser";
var deleteUserUrl = testUrl + "/deleteUser";

var addFinanceDetailUrl = baseUrl + "/addFinance";
var getBudgetListUrl=baseUrl+"/getBudgetList";
var getBudgetDetailUrl = baseUrl + "/getBudgetDetail";

var getVersionListUrl = testUrl +'/getVersionList';
var getBaseDataByVersionUrl = testUrl +'/getBaseDataByVersion';


var getBudgetDetailUrl = testUrl + "/getBudgetDetail";

var getContractUseMoneyUrl = baseUrl + '/getContractUseMoney';

var getNoticeUrl = testUrl + "/getNotification";

var getVersionListUrl = testUrl +'/getVersionList';
var getBaseDataByVersionUrl = testUrl +'/getBaseDataByVersion';

var getBudgetDetailUrl = testUrl + "/getBudgetDetail";

var updatePermissionUrl = baseUrl + "/updatePermission";
var getPermissionDetailUrl = baseUrl + "/getPermissionList";


function getDepartmentOption() {
	var param = {};
	param.baseDataType = "Department";
	$.ajax({
		type: "post",
		url: 'http://127.0.0.1:8080/getBaseDate',
		cache: false, //禁用缓存
		contentType: "application/json",
		data: JSON.stringify(param), //传入组装的参数
		dataType: "text",
		async:false,
		beforeSend: function(xhr) {
			xhr.setRequestHeader("Authorization", localStorage.getItem("Token"));
		},
		success: function(result, status) {
			$('#projectDepartment').append(result);
			$('#projectDepartmentEdit').append(result);
			$('#projectDepartmentAdd').append(result);

		},
		error: function(result, status) {
			console.log(result)
		}
	});
}
function getDepartmentOptionInAsset() {
	var param = {};
	param.baseDataType = "Department";
	$.ajax({
		type: "post",
		url: 'http://127.0.0.1:8080/getBaseDate',
		cache: false, //禁用缓存
		contentType: "application/json",
		data: JSON.stringify(param), //传入组装的参数
		dataType: "text",
		async:false,
		beforeSend: function(xhr) {
			xhr.setRequestHeader("Authorization", localStorage.getItem("Token"));
		},
		success: function(result, status) {
			$('#departmentName').append(result);
			$('#assetDepIDEdit').append(result);
			$('#assetDepIDAdd').append(result);		
		},
		error: function(result, status) {
			console.log(result)
		}
	});
}


function getBuildContentOption(buildContentList) {
	var param={}
	param.baseDataType="BuildContent"
	$.ajax({
		type: "post",
		url: 'http://127.0.0.1:8080/getBaseDate',
		cache: false, //禁用缓存
		contentType: "application/json",
		data: JSON.stringify(param), //传入组装的参数
		dataType: "text",
		async:false,
		beforeSend: function(xhr) {
			xhr.setRequestHeader("Authorization", localStorage.getItem("Token"));
		},
		success: function(result, status) {
			$('#buildContent').append(result);
			$('#buildContentEdit').append(result);
			$('#buildContentAdd').append(result);
		},
		error: function(result, status) {
			console.log(result)
		}
	});
}

function getLendTypeOption(lendTypeList) {
	var param = {};
	param.baseDataType = "LendType";
	$.ajax({
		type: "post",
		url: 'http://127.0.0.1:8080/getBaseDate',
		cache: false, //禁用缓存
		contentType: "application/json",
		data: JSON.stringify(param), //传入组装的参数
		dataType: "text",
		async:false,
		beforeSend: function(xhr) {
			xhr.setRequestHeader("Authorization", localStorage.getItem("Token"));
		},
		success: function(result, status) {
			$('#lendType').append(result);
			$('#lendTypeUpdt').append(result);
			$('#lendTypeAdd').append(result);
		},
		error: function(result, status) {
			console.log(result)
		}
	})
}


function getBorrowTypeOption() {
	var param = {};
	param.baseDataType = "BorrowType";
	$.ajax({
		type: "post",
		url: 'http://127.0.0.1:8080/getBaseDate',
		cache: false, //禁用缓存
		contentType: "application/json",
		data: JSON.stringify(param), //传入组装的参数
		dataType: "text",
		async:false,
		beforeSend: function(xhr) {
			xhr.setRequestHeader("Authorization", localStorage.getItem("Token"));
		},
		success: function(result, status) {
			$('#BorrowType').append(result);
			$('#borrowTypeAdd').append(result);
			$('#borrowTypeUpdt').append(result);
		},
		error: function(result, status) {
			console.log(result)
		}
	})

}

function getPayWayOption(payWayList) {
	var param = {};
	param.baseDataType = "PayMethod";
	$.ajax({
		type: "post",
		url: 'http://127.0.0.1:8080/getBaseDate',
		cache: false, //禁用缓存
		contentType: "application/json",
		data: JSON.stringify(param), //传入组装的参数
		dataType: "text",
		async:false,
		beforeSend: function(xhr) {
			xhr.setRequestHeader("Authorization", localStorage.getItem("Token"));
		},
		success: function(result, status) {
			$('#payWay').append(result);
			$('#payWayUpdt').append(result);
			$('#payWayAdd').append(result);
		},
		error: function(result, status) {
			console.log(result)
		}
	})
}

function getPurchaseWayOption(purchaseWayList) {
	var param = {};
	param.baseDataType = "PurchaseWay";
	$.ajax({
		type: "post",
		url: 'http://127.0.0.1:8080/getBaseDate',
		cache: false, //禁用缓存
		contentType: "application/json",
		data: JSON.stringify(param), //传入组装的参数
		dataType: "text",
		async:false,
		beforeSend: function(xhr) {
			xhr.setRequestHeader("Authorization", localStorage.getItem("Token"));
		},
		success: function(result, status) {
			$('#purchaseWay').append(result);
			$('#purchaseWayUpdt').append(result);
			$('#purchaseWayAdd').append(result);
		},
		error: function(result, status) {
			console.log(result)
		}
	})

}

function getOrgWayOption(orgWayList) {
	var param = {};
	param.baseDataType = "BuyOrgMethod";
	$.ajax({
		type: "post",
		url: 'http://127.0.0.1:8080/getBaseDate',
		cache: false, //禁用缓存
		contentType: "application/json",
		data: JSON.stringify(param), //传入组装的参数
		dataType: "text",
		async:false,
		beforeSend: function(xhr) {
			xhr.setRequestHeader("Authorization", localStorage.getItem("Token"));
		},
		success: function(result, status) {
			$('#orgWay').append(result);
			$('#orgWayUpdt').append(result);
			$('#orgWayAdd').append(result);
		},
		error: function(result, status) {
			console.log(result)
		}
	})

	//	for(i in orgWayList) {
	//
	//		$('#orgWayUpdt').append('<option value=' + orgWayList[i]["orgWayID"] + '>' + orgWayList[i]["orgWayValue"] + '</option>');
	//		$('#orgWay').append('<option value=' + orgWayList[i]["orgWayID"] + '>' + orgWayList[i]["orgWayValue"] + '</option>');
	//		$('#orgWayDetail').append('<option value=' + orgWayList[i]["orgWayID"] + '>' + orgWayList[i]["orgWayValue"] + '</option>');
	//		$('#orgWayAdd').append('<option value=' + orgWayList[i]["orgWayID"] + '>' + orgWayList[i]["orgWayValue"] + '</option>');
	//	}
}

function getPurchaseTypeOption(purchaseTypeList) {
	var param = {};
	param.baseDataType = "PurchaseType";
	$.ajax({
		type: "post",
		url: 'http://127.0.0.1:8080/getBaseDate',
		cache: false, //禁用缓存
		contentType: "application/json",
		data: JSON.stringify(param), //传入组装的参数
		dataType: "text",
		async:false,
		beforeSend: function(xhr) {
			xhr.setRequestHeader("Authorization", localStorage.getItem("Token"));
		},
		success: function(result, status) {
			$('#purchaseType').append(result);
			$('#purchaseTypeUpdt').append(result);
			$('#purchaseTypeAdd').append(result);
		},
		error: function(result, status) {
			console.log(result)
		}
	})

	//	for(i in purchaseTypeList) {
	//
	//		$('#purchaseTypeUpdt').append('<option value=' + purchaseTypeList[i]["purchaseTypeID"] + '>' + purchaseTypeList[i]["purchaseTypeValue"] + '</option>');
	//		$('#purchaseType').append('<option value=' + purchaseTypeList[i]["purchaseTypeID"] + '>' + purchaseTypeList[i]["purchaseTypeValue"] + '</option>');
	//		$('#purchaseTypeDetail').append('<option value=' + purchaseTypeList[i]["purchaseTypeID"] + '>' + purchaseTypeList[i]["purchaseTypeValue"] + '</option>');
	//		$('#purchaseTypeAdd').append('<option value=' + purchaseTypeList[i]["purchaseTypeID"] + '>' + purchaseTypeList[i]["purchaseTypeValue"] + '</option>');
	//	}
}

function getLevelOption(levelList) {
	//	$.each(purchaseTypeList, function(index, el) {
	//		//alert(el);
	//		$('#purchaseType').append('<option value=' + index + '>' + el + '</option>');
	//	});

	for(i in levelList) {

		$('#level').append('<option value=' + levelList[i]["levelID"] + '>' + levelList[i]["levelValue"] + '</option>');
		$('#levelEdit').append('<option value=' + levelList[i]["levelID"] + '>' + levelList[i]["levelValue"] + '</option>');
		$('#levelDetail').append('<option value=' + levelList[i]["levelID"] + '>' + levelList[i]["levelValue"] + '</option>');
		$('#levelAdd').append('<option value=' + levelList[i]["levelID"] + '>' + levelList[i]["levelValue"] + '</option>');
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

	for(var i = 0; i < len; i++) {
		item = items[i].split("=");
		var name = decodeURIComponent(item[0]),
			value = decodeURIComponent(item[1]);
		if(name) {
			args[name] = value;
		}
	}
	return args;
}

//获取
//var qs = getQueryString();
//var storeID = qs["storeID"];

function timestampToTime(timestamp) {
	var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	Y = date.getFullYear() + '-';
	M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	D = date.getDate() + ' ';
	h = date.getHours() + ':';
	m = date.getMinutes() + ':';
	s = date.getSeconds();
	return Y + M + D + h + m + s;
}

function timestampToDate(timestamp) {
	var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	Y = date.getFullYear() + '-';
	M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	D = date.getDate() + ' ';

	return Y + M + D;
}

function cutString(String, number){
	
	var s = String;//要展示的字符串
	if(String.length>number){
	s=String.substring(0,number)+"...";
	}
	return(s);
}


function IsInArray(arr,val){
　　var testStr=','+arr.join(",")+",";
　　return testStr.indexOf(","+val+",")!=-1;
} 