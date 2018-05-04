function formvalue(){
	var x = $("#txt_val").val();
	// if(x != ""/32){
	// $(".test").hide();
	// 	// $(".list").append("<li class='task fade'>" + x +  "<button class='close fade'><i class='fas fa-times-circle'></i></button>" +"<button class='done fade'><i class='fas fa-check-circle'></i></button>" + "</li>");
	// 	$(".list").append("<li class='task'>" + x +  "<button class='close-task'><i class='fas fa-times-circle'></i></button>" +"<button class='done'><i class='fas fa-check-circle'></i></button>" + "</li>");
	// 	// $("li").css("background","#8d99ae")
	// 	$("#txt_val").val("");
	// 	// setTimeout(function(){
	// 	// 	$(".fade").addClass("in");
	// 	// },3)
	// }
	// else{ 
	// 	$(".test").show();
	// 	$(".test").text("Please enter task");
	// 	$(".test").addClass("test-msg");
	// }

	if(/[^a-zA-Z0-9]/.test(x) || x == ""/32){
		$(".test").show();
		$(".test").text("Please enter task");
		$(".test").addClass("test-msg");
	}

	else{
		$(".test").hide();
		$(".list").append("<li class='task'>" +"<span class='text-edit'>" +x+"</span>" +  "<button class='close-task'><i class='fas fa-times-circle'></i></button>" +"<button class='done'><i class='fas fa-check-circle'></i></button>" + "<button class='update'><i class='fas fa-pencil-alt'></i></button>"+ "</li>");
		$("#txt_val").val("");
	}
	$('ol').sortable();

// 	$(".close").click(function(){
// 	$(this).parent().remove();
// });

	// $(".done").click(function(){
	// 	$(".complete").append($(this).parent());
	// 	$(this).siblings().children().removeClass("fas fa-times-circle").addClass("fas fa-trash-alt");
	// 	$(this).parent().append("<button class='undo'><i class='fas fa-undo'></i></button>");
	// 	$(this).parent().css("text-decoration","line-through");
	// 	$(this).remove();
	// });

$(".list").on("click",".done",function(){
	$(".complete").append($(this).parent());
		$(this).siblings().children().removeClass("fas fa-times-circle").addClass("fas fa-trash-alt");
		$(this).parent().append("<button class='undo'><i class='fas fa-undo'></i></button>");
		$(this).parent().css("text-decoration","line-through");
		$(this).next().remove();
		$(this).remove();
});

	$(".close-task").click(function(){
	$(this).parent().remove();
});

$(".complete").on("click",".undo",function(){
	$(".list").append($(this).parent());
	$(this).siblings().children().removeClass("fas fa-trash-alt").addClass("fas fa-times-circle");
	$(this).parent().append("<button class='done'><i class='fas fa-check-circle'></i></button>");
	$(this).parent().append("<button class='update'><i class='fas fa-pencil-alt'></i></button>");
	$(this).parent().css("text-decoration","none");
	$(this).remove();
});
	
}

$(".list").on("click",".update",function(){
	var text = $(this).parent().text();
	var inputbox = "<input type='text' class='inputbox' value=\""+text+"\">";
	console.log("value of li" + text)
	// $("input").val(text);
	// $(this).parent().html(inputbox);
	$(this).siblings(':first').html(inputbox);
	$("input.inputbox").focus();
	$("input.inputbox").blur(function() {
		var value = $(this).val();
		// $(this).parent().text(value);
		$(this).parent().text(value);
	});
})

$('#txt_val').keydown(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
    	formvalue();
    }
});

// function checkvalue(){
// 	var x = $("#txt_val").val();
// 	if(x != ""/32){
// 		$(".test").remove();
// 		formvalue();
// 	}
// }
// $("#txt_val").keydown(function (event){
// 		if(event.keyCode == 13){
// 			event.preventDefault();
// 		var x = $("#txt_val").val();
// 		if(x != ""/32){
// 		$(".list").append("<li class='fade task'>" + x + "</li>" +  "<button class='done fade task'>done</button>" + "<button class='fade close'>X</button>");
// 		$("#txt_val").val("");
// 		setTimeout(function(){
// 			$(".fade").addClass("in");
// 		},3)
// 	}
// 	else{
// 		alert("please enter task");
// 	}
// 	}
// });

// // $('#reset').click(function() {
// // $("#txt_val").val('');
// // });



// $(".complete").on("click",".close",function(){
// 	var a = $(this).parent().children();
// 	console.log(a);
// 	$(this).parent().remove();
// });

// $(".data").on("click",".done",function(){
// 	// $(this).prev().toggleClass("strike");
// 	//$(this).prev("li .close").appendTo(".complete");
// 	// $(this).prev("li").appendTo(".complete");
// 	// $("span").append("<button class='fade close'>X</button>");
// 	// $(this).prev().remove();
// 	// $(this).remove();
// 	// $(this).parent().prev().appendTo(".complete ul");
// 	$(this).parent().appendTo(".complete ul");
// 	// $(this).$("ul").append("<button class='done fade'><i class='fa fa-check-circle' aria-hidden='true'></i></button>")
// 	// $(this).parent().prev().remove();
// 	// $(this).parent().remove();
// 	// $(this).remove();
// 	$(this).attr("class","close");
// 	$(this).children().attr("class","fa fa-trash-o");
// 	// $(this).parent().css("text-decoration","line-through");
// 	// $(this).parent().css("opacity","0.6");
// });

// // function formvalue(){
// // 	var x = $("#txt_val").val();
// // 	if(x != ""/32){
// // 		$("ul").append("<li class='fade'>" + x + "</li>" + "<button class='done fade'>done</button>" + "<button class='fade close'>X</button>");
// // 		// $("li").css("background","#8d99ae")
// // 		$("#txt_val").val("");
// // 		setTimeout(function(){
// // 			$(".fade").addClass("in");
// // 		},3)
// // 	}
// // 	else{
// // 		alert("please enter task");
	
// // 	}
	
// // }



