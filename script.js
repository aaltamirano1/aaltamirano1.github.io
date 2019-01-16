
$("section").css("display", "none");

$("#homeLink").click(function(){
	$("main")[0].style.display = "initial";
	$("footer")[0].style.display = "flex";

	$("section").css("display", "none");
});

$("#bioLink").on('click', ()=>{
	$("main, footer, section").hide();
	$("#bio").css("display", "flex");
});

$("#portfolioLink").click(function(){
	$("main")[0].style.display = "none";
	$("footer")[0].style.display = "flex";
	$("section").css("display", "none");

	$("#portfolio").css("display", "flex");
});


$("#contactLink").click(function(){
	$("main")[0].style.display = "none";
	$("footer")[0].style.display = "flex";
	$("section").css("display", "none");

	$("#booking").css("display", "flex");
});

var projectIndex= -1;

$("main, #portfolio").on("mouseover", function(){
	$(".arrow").css("display", "initial");
});
$("main, #portfolio").on("mouseout", function(){
	$(".arrow").css("display", "none");
});

var projects = 	[
	{
		name: 'Node Content Scraper', 
		description: "Program visits the website http://shirts4mike.com and uses http://shirts4mike.com/shirts.php as single entry point to scrape information for 8 t-shirts from the site. Details for each t-shirt are gathered and saved to a CSV file include the t-shirt's Title, Price, ImageURL, URL as well as the time the information was gathered. The time is in Coordinated Universal Time. The CSV file is saved to a 'data' folder and named for the day it was gathered. If no data folder exists, one is created. The program uses the npm packages Fast-CSV to create the file and Cheerio which lets you use syntax similar to jQeury from within node to scrape the data. Built from scratch.", 
		imageUrl: 'images/node-scraper.png',
		demoUrl: false,
		codeUrl: 'https://github.com/aaltamirano1/node-content-scraper'
	},
	{
		name: 'Nutrient Tracker', 
		description: 'Lets users set goals to increase or cutback on nutrients and track daily performance ratings and notes. Notes are organized in journal by date/rating so users can track how these nutrients affect them when they preform well or poorly on their goals. Built from scratch with Rails, Bootstrap, jquery, a simple-calendar gem and devise gem for user-authentication.',
		imageUrl: 'images/nutrient-tracker.png',
		demoUrl: 'https://nutrient-tracker.herokuapp.com/',
		codeUrl: 'https://github.com/aaltamirano1/Nutrient-Tracker'
	},
	{
		name: 'Build a Front-End Site with Gulp', 
		description: "Gulpfile built from scratch, all other project files provided. Used Gulp to concatenate and minify the JavaScript files, compile SCSS into CSS in a concatenated and minified file, generate JavaScript and CSS source maps, and compress any JPEG or PNG files. All output for the build process saved in a dist folder for distribution or deployment.", 
		imageUrl: 'images/gulp.png',
		demoUrl: false,
		codeUrl: 'https://github.com/aaltamirano1/techdegree-project-8'
	},
	{
		name: 'Employee Directory', 
		description:	'Used a public API (randomuser.me) to create an employee directory from scratch with JavaScript and jQuery. Data requested using fetch method. Directory includes an employee search function and a modal window with more detailed employee information.', 
		imageUrl:	'images/employee-directory.png',
		demoUrl:	'https://aaltamirano1.github.io/techdegree-project-5/',
		codeUrl:	'https://github.com/aaltamirano1/techdegree-project-5'
	},
	{
		name: 'Pagination and Content Filter', 
		description:	'Used JavaScript and jQuery to dynamically divide the contents (a list of students) into pages and added a search function to list only the students that match that search. JavaScript file built from scratch. Search function and pagination links disabled if JavaScript is turned off; entire list of students is displayed.', 
		imageUrl:	'images/pagination.png',
		demoUrl:	'https://aaltamirano1.github.io/pagination-content-filter/',
		codeUrl:	'https://github.com/aaltamirano1/pagination-content-filter'
	},
	{
		name: "Conway's Game of Life", 
		description:	'The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. Built with JavaScript and jQuery.', 
		imageUrl:	'images/conways.png',
		demoUrl:	'https://aaltamirano1.github.io/conways-game-of-life/',
		codeUrl:	'https://github.com/aaltamirano1/conways-game-of-life' 
	}
];

$(document).click("#portfolio .left-arrow", function(){
	if(projectIndex<0){
		projectIndex--;
		$("#project").empty();

		let demoLink = '';
		if (projects[projectIndex].demoUrl){
			demoLink = `<button><a target="_blank" href="${projects[projectIndex].demoUrl}">View Demo</a></button>`;
		}
		$("#project").html(`
			<div id="project-pic" style="background:url(${projects[projectIndex].imageUrl}); background-size:cover;"></div>
      <div id="project-info">
        <h2 id="project-name">${projects[projectIndex].name}</h2>
        <p style="font-family: 'Open Sans', serif;margin-bottom: 9px;">${projects[projectIndex].description}</p>
        <button><a target="_blank" href="${projects[projectIndex].codeUrl}">View Code</a></button>
        ${demoLink}
      </div>
		`);
	}
});
$(document).on("click", "#portfolio .right-arrow", function(){
	if (projectIndex!=projects.length-1){
		projectIndex++;
		$("#project").empty();

		let demoLink = '';
		if (projects[projectIndex].demoUrl){
			demoLink = `<button><a target="_blank" href="${projects[projectIndex].demoUrl}">View Demo</a></button>`;
		}
		$("#project").html(`
			<div id="project-pic" style="background:url(${projects[projectIndex].imageUrl}); background-size:cover;"></div>
      <div id="project-info">
        <h2 id="project-name">${projects[projectIndex].name}</h2>
        <p style="font-family: 'Open Sans', serif;margin-bottom: 9px;">${projects[projectIndex].description}</p>
        <button><a target="_blank" href="${projects[projectIndex].codeUrl}">View Code</a></button>
        ${demoLink}
      </div>
    `);
	}
});