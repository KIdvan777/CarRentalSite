$(document).ready(function() {
	setEqualHeight($(".vehicles__item"));
});

function setEqualHeight(columns){
var tallestcolumn = 0;

columns.each(function(){
	currentHeight = $(this).height();

	if(currentHeight > tallestcolumn){
		tallestcolumn = currentHeight;
	}
});

columns.height(tallestcolumn);
};

$(document).ready(function() {
	setEqualHeight($(".vehicles__item>span"));
});

function setEqualHeight(columns){
var tallestcolumn = 0;

columns.each(function(){
	currentHeight = $(this).height();

	if(currentHeight > tallestcolumn){
		tallestcolumn = currentHeight;
	}
});

columns.height(tallestcolumn);
};

$(document).ready(function() {
	setEqualHeight($(".vehicles__item>p"));
});

function setEqualHeight(columns){
var tallestcolumn = 0;

columns.each(function(){
	currentHeight = $(this).height();

	if(currentHeight > tallestcolumn){
		tallestcolumn = currentHeight;
	}
});

columns.height(tallestcolumn);
};