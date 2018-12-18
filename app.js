
$(function(){
const num_of_cats = 5;
let model = {
	current_cat: 0,
	clicked: [0,0,0,0,0],
	pictures: ['cat_picture1.jpg','cat_picture2.jpeg','cat_picture3.jpeg',
						 'cat_picture4.jpeg', 'cat_picture5.jpeg'],
};

let octopus = {
	render: () => {

	},
	init: () => {
		for(let i = 0; i < num_of_cats; i++) {
			model.clicked[i] = 0;
		}
		model.current_cat = 0;
		view.render_counter(model.clicked[0]);
		view.render_picture(model.pictures[0]);
		view.init();
	},
	click_button: () => {

		model.current_index = 1;
		view.render_counter(model.clicked[model.current_index]);
		view.render_picture(model.pictures[model.current_index]);
	},
	click_cat: () => {
		model.clicked[model.current_index]++;
		view.render_counter(model.clicked[model.current_index]);
	}
};

let view = {
	init: () => {
		$('.button').click(octopus.click_button());
		$('.cat').click(octopus.click_cat());
	},
	render_counter: (cnt) => {
		$('.clicked').text(cnt);
	},
	render_picture: (picture) => {
		$('cat_picture').src = picture;
	}
};

octopus.init();
});
// var cats = $(".cat");
// var buttons = $("button");
//
// function hideAllCats(){
// 	for (var i=0; i<cats.length; i++){
// 		$(cats[i]).hide();
// 	}
// }
//
// function bindButtonToCat(idNumber){
// 	$("#button"+idNumber).click(function(){
// 		hideAllCats();
// 		$("#cat"+idNumber).show();
// 	})
// }
//
// function bindCounterToCat(idNumber){
// 	var cat = "#cat"+idNumber
// 	$(cat).click(function(){
// 		var count = $(cat+" > .counter").text();
// 		count = parseInt(count) + 1;
// 		$(cat+" > .counter").text(count);
// 	})
// }
//
// for (var i=1; i<=buttons.length; i++){
// 	bindButtonToCat(i);
// }
//
// for (var i=1; i<=cats.length; i++){
// 	bindCounterToCat(i);
// }
//
// hideAllCats();
// $("#cat1").show();
