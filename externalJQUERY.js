$(document).ready(function () {                    //Reference: Credit to Lei Song @ unitec for portion of code //
            $("#input").mouseenter(function () {
                $("#output").show(1000, function () {
                	$("#output").attr('align', 'center');
                });
            }).mouseleave(function () {
                $("#output").hide(1000, function () {
                });
            });
        });
$(document).ready(function(){
	$("#output").hide(0, function() {
	});
});

$(document).ready(function(){
	$("#output").mouseenter( function() {
		$("#output").show(1000, function(){});
	});
});
