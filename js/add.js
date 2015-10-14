var counter = 1
var row_weight_sum = 0
var total_weight_credit = 0

var handleAddAction = function(){
	var grade = $('#grade').val();
	var credit_point = $('#credit').val();
	var weight = $('#weight').val();
	row_weight_sum += grade * credit_point * weight;
	total_weight_credit += credit_point * weight;
	createGrade("grade_" + counter, grade, credit_point, weight);
	$('#grade').val('')
	$('#credit').val('')
	$('#weight').val('')
};

var calculateGPA = function(){
	var gpa = row_weight_sum / total_weight_credit;
	$('#gpa').append(gpa)
};

var clearGPA = function(){
	$('#gpa').empty()
};


var createGrade = function(id, grade, credit_point, weight){
	var grade = '<tr id="' + id + '">' + '<td>' + grade + '</td>' + '<td>' + credit_point + '</td>' + '<td>' + weight + '</td>' + '</tr>', grade_list = $('.grade li');
	grade = $(grade).addClass('new-item');
    $('.grades').append(grade);
    counter += 1;
};