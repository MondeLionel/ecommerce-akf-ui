	'use strict'


	$(window).load(function(){
		$('body').removeClass('loading');
		let video = $("video");
	})

	var mySwiper = new Swiper ('.swiper-container.cover', {
		direction: 'horizontal',
		effect:'fade',
		loop:true,
		spaceBetween:20,
		 keyboard: {
        	enabled: true,
      	},
      	autoplay: {
        	delay: 25000,
        	disableOnInteraction: false,
      },
		navigation: {
			nextEl: '.next',
			prevEl: '.swiper-button-prev',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	});

	var swiperNavBtn = $('a.prev');

	if (mySwiper.activeIndex == '1'){
		swiperNavBtn.addClass('hidden');
	}else{
		swiperNavBtn.removeClass('hidden');
	}

	var nextButton = document.getElementsByClassName('next');
	var _nextFunc = function(){
		mySwiper.SlideNext();

	}

	nextButton[0].addEventListener("click",_nextFunc);

// Shitty js dev work

var body = document.getElementsByTagName("body")[0];
var _jscontactUs = $(".contact-us")
$(".contact-tip").on('click', function(){
	_jscontactUs.toggleClass("contact-open")
	console.log("click")
})

function openWork(){
	body.classList.add("work");
	body.classList.remove("contact")
	body.classList.remove("about")
}


function openAbout(){
	body.classList.add("about")
	body.classList.remove("work")
	body.classList.remove("contact")

}


function removeBodyClasses(){
	body.classList.remove("work")
	body.classList.remove("contact")
	body.classList.remove("about")
}

function toggleMenu(){
	
	body.classList.toggle("menuOpen")
}



// Handle form
const formV = $('#contact-form')

formV.on('submit', function(e){
	e.preventDefault();
	const formData = new FormData(formV[0]);

	const name = formData.get('name');
	const number = formData.get('whatsapp-number');
	const email = formData.get('email')

	const formObject = {name,number,email};
	console.log(formObject)

	

});


// handle modal animations


// $('.close').on('click', function(e){
// 	e.preventDefault();
// 	var modal = $('.modal');
// 		modal.removeClass('slide-in-left');
// 		modal.addClass('slide-out-left');
// 		modal.css("display", "block")

// 	setTimeout(function(){
// 		modal.removeClass('slide-out-left');
// 		modal.addClass('slide-in-left');
// 		modal.css("display", "none");

// 	},1000)
// })



// form 


$('#worksModal').on('shown.bs.modal', function () {

	

	if(sessionStorage.getItem("audio_prompt") != null || sessionStorage.getItem("audio_prompt") != undefined){
		$("body").removeClass("video-prompt")
	}else{
		$("body").addClass("video-prompt");
	}


  var worksSwiper = new Swiper('.swiper-container.works',{
	direction:'horizontal',
	navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  parallax:true,

  speed:700,
   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  on:{
  	init: function(){
  			let current_video = $('.swiper-slide-active').find("video");
			let other_videos = $('swiper-slide').find("video");
			current_video.trigger('play');
  	}
  }
})

// play video on slide


// current_video.trigger('play');
let current_video = $('.swiper-slide-active').find("video");

worksSwiper.on("slideChange", function(){
	// pause video on slide change
	// let currently_video = $('.swiper-slide-active').find("video");
	let allVideos = $('.swiper-slide').find("video");
	allVideos.forEach(function(item,index){
		console.log(item[index])
	});

	function pauseVideo(item, index){
		// item.get(index).pause();
		console.log(index)
	}

	// if($('.swiper-slide').hasClass("swiper-slide-active")){
	// 	$('.swiper-slide-active').find("video").get(0).play();
	// 	console.log("active")
	// }else{
	// 	$('.swiper-slide').find("video").get(0).pause();
	// }


	console.log("slidechanges");
})

// whoosh video on closing modal
$('.close').on('click', function(){
	$("video").get(0).pause();
})


// play video after click
$("video").on('click', function(){
	
	this.paused ? this.play() : this.pause();
})




// initialise videos with videojs

let myPlayers = Array(
	videojs('favela'),
	videojs('feels'),
	videojs('schwepps'),
	videojs('phesheya'),
	videojs('bee'),
	videojs('homii'),
	videojs('dsff'),
	videojs('nostalgia'),
	videojs('oxy'),
	videojs('butifly'),
	videojs('pop')
	)



})


// handle prompt

$(".prompt-clear").on('click', function(){
	// if(sessionStorage.getItem("audio_prompt") != null || sessionStorage.getItem("audio_prompt") != undefined){
	// 	console.log(sessionStorage.getItem("audio_prompt"))
	// 	$("body").removeClass("video-prompt")
	// }
	$("body").removeClass("video-prompt")
	sessionStorage.setItem('audio_prompt', 'seen');		
})



// check is prompt has been visited

// function checkPrompt(){
// 	if(sessionStorage.getItem("audio_prompt") != null || sessionStorage.getItem("audio_prompt") != undefined){
// 		$("body").removeClass("video-prompt")
// 	}
// }

// checkPrompt();





