const num_of_cats = 5;
let model = {
	init: () => {
		for(let i = 0; i < num_of_cats; i++) {
			model.clicked[i] = 0;
		}
		model.current_index = 0;
	},
	current_index: 0,
	name: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5'],
	clicked: [0,0,0,0,0],
	pictures: ['cat_picture1.jpg','cat_picture2.jpeg','cat_picture3.jpeg',
						 'cat_picture4.jpeg', 'cat_picture5.jpeg']
};

let octopus = {
	init: () => {
		model.init();
		view.init();
		octopus.fill_field();
		view.render_counter();
		view.render_picture();
	},
	get_picture: () => {
		return model.pictures[model.current_index];
	},
	get_counter: () => {
		return model.clicked[model.current_index];
	},
	get_name: () => {
		return model.name[model.current_index];
	},
	update_model: () => {
		model.clicked[model.current_index] = view.get_clicks().value;
		model.pictures[model.current_index] = view.get_url().value;
		model.name[model.current_index] = view.get_name().value;
		view.render_counter();
		view.render_picture();
	},
	fill_field: () => {
		view.get_clicks().value = model.clicked[model.current_index];
		view.get_url().value = model.pictures[model.current_index];
		view.get_name().value = model.name[model.current_index];
	},
	click_button: (e) => {
		model.current_index = parseInt(e.target.className);
		octopus.fill_field();
		view.render_counter();
		view.render_picture();
	},
	click_cat: (e) => {
		model.clicked[model.current_index]++;
		octopus.fill_field();
		view.render_counter();
	}
};

let view = {
	init: () => {
		button = document.querySelector('#catlist');
		cat = document.querySelector('.cat');
		save = document.querySelector('.save');
		ad_button = document.querySelector('.ad_button');
		cancel = document.querySelector('.cancel');
		button.addEventListener('click', octopus.click_button);
		cat.addEventListener('click', octopus.click_cat);
		save.addEventListener('click', (e) => {
			octopus.update_model();
			$('.fields').hide();
		});
		ad_button.addEventListener('click', (e) => {
			$('.fields').show();
		});
		cancel.addEventListener('click', (e) => {
			$('.fields').hide();
		});
		$('.fields').hide();
	},
	get_clicks: () => {
		return document.querySelector('.clicks');
	},
	get_url: () => {
		return document.querySelector('.url');
	},
	get_name: () => {
		return document.querySelector('.name');
	},
	render_counter: () => {
		clicked = document.querySelector('.clicked');
		clicked.innerHTML = octopus.get_counter();
	},
	render_picture: () => {
		cat_picture = document.querySelector('.cat_picture');
		cat_name = document.querySelector('.cat_name');
		cat_picture.src = octopus.get_picture();
		cat_name.innerHTML = octopus.get_name();
	}
};

octopus.init();
