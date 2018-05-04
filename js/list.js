function formvalue(){
	var x = $("#txt_val").val();
	if(x != ""/32){
		$("ul").append("<li class='fade'>" + x + "<button class='done fade'>done</button>" + "<button class='fade close'>X</button>" + "</li>");
		// $("li").css("background","#8d99ae")
		$("#txt_val").val("");
		setTimeout(function(){
			$(".fade").addClass("in");
		},3)
	}
	else{
		alert("please enter task");
	
	}
	
}

$("#txt_val").keydown(function (event){
		if(event.keyCode == 13){
			event.preventDefault();
		var x = $("#txt_val").val();
		if(x != ""/32){
		$("ul").append("<li class='fade'>" + x +  "<button class='done fade'>done</button>" + "<button class='fade close'>X</button>" + "</li>");
		$("#txt_val").val("");
		setTimeout(function(){
			$(".fade").addClass("in");
		},3)
	}
	else{
		alert("please enter task");
	}
	}
});

// $('#reset').click(function() {
// $("#txt_val").val('');
// });



$(".data").on("click",".close",function(){
	var a = $(this).parent().children();
	console.log(a);
	$(this).parent().remove();
});

$(".data").on("click",".done",function(){
	$(this).parent().toggleClass("strike");
});


