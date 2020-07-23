//////////////////////////////////////////
// Add all Javascript code to this file.
/////////////////////////////////////////

const $ = require('jquery');


// ==========FEEDR URLS==========
const corsUrl = 'https://cors-anywhere.herokuapp.com';
const controlHeader = 'https://accesscontrolalloworiginall.herokuapp.com/';

const theGuardianUrl = 'https://content.guardianapis.com/search?q=business&api-key=';
const eventRegistryUrl = 'https://eventregistry.org/api/v1/article/getArticles?resultType=articles&keyword=Bitcoin&keyword=Litecoin&keywordOper=or&lang=eng&articlesSortBy=date&includeArticleConcepts=true&articleBodyLen=300&forceMaxDataTimeWindow=31&apiKey=';
const newsApiUrl = 'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=';
 // ==========FETCH GUARDIAN DATA==========
$('.guardian').on('click', function(){
  $.get(controlHeader+theGuardianUrl+theGuardianKey, function(data){
  // console.log(data.response.results);

// TOGGLE OFF 
   $('div a').on('click', function () {
   	let close = $('#popUp').toggleClass('loader hidden');
   	console.log(close);

   });
  
	  
		console.log('i clicked the first source and not the other ones');
	 
		
   

// SET BUSINESS OBJECTS TO A VARIABLE
let businesses = data.response.results;

// console.log('businesses', businesses);

// GRAB THE ARTICLE AND A-TAG ELEMENTS FROM THE DOM 
const articles = document.querySelectorAll('article');
const popTitles = document.querySelectorAll('div h1');

	// LOOP THRU CERTAIN PROPERTIES ON THE BUSINESS OBJECT
 	for(let s = 0; s < businesses.length; s++) {
 		const business = businesses[s];

 		 let article = articles[s];
		 let popTitle = popTitles[s];

		 // SET EACH PROPERTY TO A VARIABLE
		 let title = business.webTitle;
 		 let sectionName = business.sectionName;
		 let artUrl = business.webUrl;


 		// BIND PROPERTIES TO THE DOM
		let articleTitle = article.children[1].children[0].children[0];
		 articleTitle.textContent = title;

		let sectionNames = article.children[1].children[1];
		 sectionNames.textContent = sectionName;

		const artLink = document.createElement('a');
		artLink.href = artUrl;

		artLink.classList.add('hidden', 'article-link');
		article.appendChild(artLink);

		article.addEventListener('click', function() {
			
			$('#popUp').toggleClass('loader hidden');

			const popTitle = document.querySelector('#popUp h1');
			popTitle.textContent = title;

			const resourceLink = document.querySelector('.popUpAction');
			resourceLink.href = artLink;

			const popContent = document.querySelector('p');
			popContent.textContent = 'click link below';

			// console.log(resourceLink);
			// console.log(popTitle);
		});

	}

 });
});

 // ==========FETCH EVENT REGISTRY DATA==========
$('.registry').on('click', function() {
console.log('i clicked the SECOND source');
$('div a').on('click', function () {
	let close = $('#popUp').toggleClass('loader hidden');
	console.log(close);

});
 $.get(eventRegistryUrl+eventRegistryKey, function(data) {
		// console.log(data.articles.results[0]);

		const infos = data.articles.results;
		const articles = document.querySelectorAll('article');

		for(let i = 0; i < articles.length; i++ ){
			// ITERATE OVER THE ARTICLES
			let art = articles[i];
			let info = infos[i];

			// BIND THE PROPERTIES TO A VALUE
			let eventTitle = info.title;
			let eventType = info.dataType;
			let eventBody = info.body;
			let eventUrl = info.url;

			let articleTitle = art.children[1].children[0].children[0];
			articleTitle.textContent = eventTitle;

			let artCatergory = art.children[1].children[1];
		    artCatergory.textContent = eventType;
			// art.textContent = eventTitle;
			// console.log(eventType);
			// console.log(art.textContent = eventTitle);
			const artLink = document.createElement('a');
			artLink.href = eventUrl;

			artLink.classList.add('hidden', 'article-link');
			art.appendChild(artLink);

			art.addEventListener('click', function() {
				
		$('#popUp').toggleClass('loader hidden');

				const popTitle = document.querySelector('#popUp h1');
				popTitle.textContent = eventTitle;

				const resourceLink = document.querySelector('.popUpAction');
				resourceLink.href = artLink;

				const popContent = document.querySelector('p');
				popContent.textContent = eventBody;

			// console.log(resourceLink);
			// console.log(popTitle);
		});
		}

		
	});
});

 // ==========FETCH NEWS API DATA==========

const newsAPIKey = 'c14ff73e10c041b79901e74722a63e01';

$('.newsApi').on('click', function(){
	console.log('I clicked the THIRD source');
	$('div a').on('click', function () {
		let close = $('#popUp').toggleClass('loader hidden');
		console.log(close);
	
	});
	
	$.get(newsApiUrl+newsAPIKey,function(data){

		const articles = document.querySelectorAll('article');
		const news = data.articles;
		// console.log(news);

		for(let m = 0; m < articles.length; m++) {
			let article = articles[m];
			let newsArt = news[m];
			
			let newsArtTitle = newsArt.title;
			let newsArtType = newsArt.source.id;
			let newsArtBody = newsArt.content;
			let newsArtUrl = newsArt.url;

			let articleTitle = article.children[1].children[0].children[0];
			articleTitle.textContent = newsArtTitle;

			let artCatergory = article.children[1].children[1];
			artCatergory.textContent = newsArtType;

			const artLink = document.createElement('a');
			artLink.href = newsArtUrl;

			artLink.classList.add('hidden', 'article-link');
			article.appendChild(artLink);

			article.addEventListener('click', function() {
				
		$('#popUp').toggleClass('loader hidden');

				const popTitle = document.querySelector('#popUp h1');
				popTitle.textContent = newsArtTitle;

				const resourceLink = document.querySelector('.popUpAction');
				resourceLink.href = artLink;

				const popContent = document.querySelector('p');
				popContent.textContent = newsArtBody;

			// console.log(resourceLink);
			// console.log(popTitle);
		});
		}
	});
});



