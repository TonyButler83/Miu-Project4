/*
Miu Project 3
by: Tony Butler
date: 3/15/2012
term: 1203
*/


var parseEForm = function(data){
	console.log(data)
};
 
$(document).ready(function(){
   
   var eform =$('#entryform');
   
   eform.validate({
		invalidHandler: function(form, validator){},
		submitHandler: function(){
			var data = eform.serializeArray();
			parseEForm(data);
		}
 	});
 	
 });


$(document).ready(function(){

$("#entryform").validate({
    submitHandler: function(form) {
        console.log("Login Entry Saved");
    	}
	});
});

