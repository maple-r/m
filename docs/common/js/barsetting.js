$(document).mouseup(function(e){
	var lwth = document.getElementById("mySidenav").style.width;
	var rwth = document.getElementById("mySidenavR").style.width;
	//var bwth = document.getElementById("myBottomNav").style.width;
	//var btwth = document.getElementById("myPageNav").style.width;
	var swth = document.getElementById("mySpclLbNav").style.width;

	var lleng = $(e.target).parents('div#mySidenav').length
	var rleng = $(e.target).parents('div#mySidenavR').length
	//var bleng = $(e.target).parents('div#myBottomNav').length
	//var btleng = $(e.target).parents('div#myPageNav').length
	var sleng = $(e.target).parents('div#mySpclLbNav').length


	if(!$(e.target).hasClass('fa-child') && (lwth != '' || lwth != '0px') && lleng != 1){
		closeNav();
	}

	if(!$(e.target).hasClass('fa-cog') && (rwth != '' || rwth != '0px') && rleng != 1){
		closeNavR();
	}

	/*if(!$(e.target).hasClass('fa-lock') && (bwth != '' || bwth != '0px') && bleng != 1){
		closeBtNav();
	}

	if(!$(e.target).hasClass('fa-list') && (btwth != '' || btwth != '0px') && btleng != 1){
		closeMyNav();
	}*/

	if(!$(e.target).hasClass('label-img') && (swth != '' || swth != '0px') && sleng != 1){
		closeBtSpclLb();
	}

});

function sideBarOp() {
	var media = window.matchMedia( '( min-width: 500px )' );

	if(media.matches){
		document.getElementById("mySidenav").style.width = "400px";
	}else{
		document.getElementById("mySidenav").style.width = "80%";
	}


	$("#opTog").removeAttr("onclick");
	$("#opTog").attr("onclick","javascript:closeNav();");
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0px";

	$("#opTog").removeAttr("onclick");
	$("#opTog").attr("onclick","javascript:sideBarOp();");
}

function sideBarRtOp() {
	document.getElementById("defaultOpen").click();
	var media = window.matchMedia( '( min-width: 500px )' );

	if(media.matches){
		document.getElementById("mySidenavR").style.width = "400px";
	}else{
		document.getElementById("mySidenavR").style.width = "80%";
	}


	$("#opRTog").removeAttr("onclick");
	$("#opRTog").attr("onclick","closeNavR();");
}

function closeNavR() {
	document.getElementById("mySidenavR").style.width = "0";

	$("#opRTog").removeAttr("onclick");
	$("#opRTog").attr("onclick","sideBarRtOp();");
}


function btSpclLbOp(){
	var media = window.matchMedia( '( min-width: 500px )' );

	if(media.matches){
		document.getElementById("mySpclLbNav").style.height = "85%";
	}else{
		document.getElementById("mySpclLbNav").style.height = "85%";
	}


	$("#opLabel").removeAttr("onclick");
	$("#opLabel").attr("onclick","closeBtSpclLb();");
}

function closeBtSpclLb() {
	document.getElementById("mySpclLbNav").style.height = "0";

	$("#opLabel").removeAttr("onclick");
	$("#opLabel").attr("onclick","btSpclLbOp();");
}
