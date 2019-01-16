function watchContactLink(){
	$("#contactLink").on('click', ()=>{
		$("main, section").hide();
		$("#booking, footer").css("display", "flex");
	});
}

function generateProjectHtml(projects, i){
let demoLink = projects[i].demoUrl ? `<button><a target="_blank" href="${projects[i].demoUrl}">View Demo</a></button>` : '';

let html = `
	<div id="project-pic" style="background:url(${projects[i].imageUrl}); background-size:cover;"></div>
  <div id="project-info">
    <h2 id="project-name">${projects[i].name}</h2>
    <p style="font-family: 'Open Sans', serif;margin-bottom: 9px;">${projects[i].description}</p>
    <button><a target="_blank" href="${projects[i].codeUrl}">View Code</a></button>
    ${demoLink}
  </div>`;

$(html).hide().appendTo("#project").fadeIn('1000');

}

function watchMouseover(){
	var projectIndex =-1;
	$("#portfolio")
	.on("click",".left-arrow", function(){
		if(projectIndex>0){
			projectIndex--;
			$("#project").empty();
			generateProjectHtml(PROJECTS, projectIndex);
		}
		if(projectIndex==0){
			$(this).hide();
		}
		if(projectIndex==5){
			$(".right-arrow").show();
		}
	})
	.on("click",".right-arrow", function(){
		let lastProject = PROJECTS.length-1;
		if (projectIndex!= lastProject){
			projectIndex++;
			$("#project").empty();
			generateProjectHtml(PROJECTS, projectIndex);
		}
		if (projectIndex==lastProject){
			$(this).hide();
		}
		if(projectIndex==1){
			$(".left-arrow").show();
		}
	});
}

function watchPortfolioLink(){
	$("#portfolioLink").on('click', ()=>{
		$("main, section").hide();
		$("#portfolio, footer").css("display", "flex");

		$(".right-arrow").show();
	});
	watchMouseover();

}

function watchBioLink(){
	$("#bioLink").on('click', ()=>{
		$("main, footer, section").hide();
		$("#bio").css("display", "flex");
	});
}

function watchHomeLink(){
	$("#homeLink").on('click', ()=>{
		$("main").show()
		$("footer").css("display","flex");
		$("section").hide();
	});
}

function initialDisplay(){
	watchHomeLink();
	watchBioLink();
	watchPortfolioLink();
	watchContactLink();
}

$(initialDisplay);
