function watchCloseButton(){
	$(".close").on('click', ()=>{
		$(".lightbox").hide();
		$(".lightbox img").hide();
		$("body").css({overflow: "scroll"});
	});
}
function watchLightBox(){
	$(".project").on("click",".project-screenshot", function(){
		switch($(this).attr("data-index")){
			case "1":
				$(".lightbox img").attr("src", "images/531.png");
				break;
			case "2":
				$(".lightbox img").attr("src", "images/learners-journal.png");
				break;
			case "3":
				$(".lightbox img").attr("src", "images/elected-officials.png");
				break;
		}
		$(".lightbox").css({display: "flex"});
		$(".lightbox img").fadeIn(800);
		$("body").css({overflow: "hidden"});
		watchCloseButton();
	});
}

$(watchLightBox);
