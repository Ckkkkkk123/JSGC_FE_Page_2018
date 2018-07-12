function resetInput(){
	$(" input").val("")
}

var url=''

function getDepartmentOption(departmentList){
	$.each(departmentList, function(index,el) {
		//alert(el);
		$('#projectDepartment').append('<option value='+index+'>'+el+'</option>');
	});
}
