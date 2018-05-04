function formvalue(){
	var x = $("#txt_val").val();
	if(x != ""/32){
		$(".list").append("<li class='fade'>" + x + "<button class='done fade'><i class='fa fa-check-circle' aria-hidden='true'></i></button>" + "</li>");
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
		$(".list").append("<li class='fade task'>" + x + "</li>" +  "<button class='done fade'>done</button>" + "<button class='fade close'>X</button>");
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



$(".complete").on("click",".close",function(){
	var a = $(this).parent().children();
	console.log(a);
	$(this).parent().remove();
});

$(".data").on("click",".done",function(){
	// $(this).prev().toggleClass("strike");
	//$(this).prev("li .close").appendTo(".complete");
	// $(this).prev("li").appendTo(".complete");
	// $("span").append("<button class='fade close'>X</button>");
	// $(this).prev().remove();
	// $(this).remove();
	$(this).parent().remove();
	$(this).parent().appendTo(".complete ul");
	$(this).attr("class","close");
	$(this).children().attr("class","fa fa-trash-o");
	$(this).parent().css("text-decoration","line-through");
	$(this).parent().css("opacity","0.6");
});

// function formvalue(){
// 	var x = $("#txt_val").val();
// 	if(x != ""/32){
// 		$("ul").append("<li class='fade'>" + x + "</li>" + "<button class='done fade'>done</button>" + "<button class='fade close'>X</button>");
// 		// $("li").css("background","#8d99ae")
// 		$("#txt_val").val("");
// 		setTimeout(function(){
// 			$(".fade").addClass("in");
// 		},3)
// 	}
// 	else{
// 		alert("please enter task");
	
// 	}
	
// }



