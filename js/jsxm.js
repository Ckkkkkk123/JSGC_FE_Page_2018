function resetInput() {
	$(" input").val("")
}

var baseUrl = "http://127.0.0.1:2333";
var getProjectListUrl = baseUrl + "/getProjectList";
var getProjectDetailUrl = baseUrl + "/getProjectDetail";
var updateProjectDetailUrl = baseUrl + "/updateProjectDetail";

function getDepartmentOption(departmentList) {
	for(i in departmentList){
   	 	
    			$('#projectDepartmentEdit').append('<option value=' + departmentList[i]["departmentID"] + '>' + departmentList[i]["departmentName"] + '</option>');
    			$('#projectDepartment').append('<option value=' + departmentList[i]["departmentID"] + '>' + departmentList[i]["departmentName"] + '</option>');
        }
    }
	
//	$.each(departmentList, function(index, el) {
//		//alert(el);
//		$('#projectDepartment').append('<option value=' + index + '>' + el + '</option>');
//	});


function getLendTypeOption(lendTypeList) {
	$.each(lendTypeList, function(index, el) {
		//alert(el);
		$('#lendType').append('<option value=' + index + '>' + el + '</option>');
	});
}

function getBorrowTypeOption(borrowTypeList) {
	$.each(borrowTypeList, function(index, el) {
		//alert(el);
		$('#borrowType').append('<option value=' + index + '>' + el + '</option>');
	});
}

function getPayWayOption(payWayList) {
	$.each(payWayList, function(index, el) {
		//alert(el);
		$('#payWay').append('<option value=' + index + '>' + el + '</option>');
	});
}

function getPurchaseWayOption(purchaseWayList) {
	$.each(purchaseWayList, function(index, el) {
		//alert(el);
		$('#purchaseWay').append('<option value=' + index + '>' + el + '</option>');
	});
}

function getOrgWayOption(orgWayList) {
	$.each(orgWayList, function(index, el) {
		//alert(el);
		$('#orgWay').append('<option value=' + index + '>' + el + '</option>');
	});
}

function getPurchaseTypeOption(purchaseTypeList) {
	$.each(purchaseTypeList, function(index, el) {
		//alert(el);
		$('#purchaseType').append('<option value=' + index + '>' + el + '</option>');
	});
}