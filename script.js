function watchCloseButton(){
	$(".close").on('click', ()=>{
		$(".lightbox").hide();
		$("body").css({overflow: "scroll"});
	});
}
function watchLightBox(){
	$(".project").on("click",".project-screenshot", function(){
		switch($(this).attr("data-index")){
			case "1":
				$("img").attr("src", "images/531.png");
				break;
			case "2":
				$("img").attr("src", "images/learners-journal.png");
				break;
			case "3":
				$("img").attr("src", "images/elected-officials.png");
				break;
		}
		$(".lightbox").css({display: "flex"});
		$("img").fadeIn("slow");
		$("body").css({overflow: "hidden"});
		watchCloseButton();
	});
}

$(watchLightBox);
