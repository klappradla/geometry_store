(function() {

	// module
	var app = angular.module("store", [ ]);

	// controllers
	app.controller("StoreController", function() {
		this.products = gems;

	});

	app.controller("PanelController", function() {
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};

	});

	app.controller("GalleryController", function() {
		this.current = 0;

		this.setCurrent = function(index) {
			this.current = index || 0;
		};

	});

	var gems = [
		{
			name: "Dodecahedron",
			price: 2.95,
			description: "Dodecahedron lalala...",
			images: [
				{
					full: "images/dodecahedron-01-full.png",
					thumb: "images/dodecahedron-01-thumb.png"
				},
				{
					full: "images/dodecahedron-02-full.png",
					thumb: "images/dodecahedron-02-thumb.png"
				},
				{
					full: "images/dodecahedron-03-full.png",
					thumb: "images/dodecahedron-03-thumb.png"
				},
			],
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				},
				{
					stars: 3,
					body: "This product is kinda ok",
					author: "hann@walker.com"
				}
			],
			canPurchase: true,
			soldOut: true
		},
		{
			name: "Pentagonal Gem",
			price: 5.95,
			description: "Dodecahedron lalala...",
			images: [
				{
					full: "images/pentagonal-01-full.png",
					thumb: "images/pentagonal-01-thumb.png"
				},
				{
					full: "images/pentagonal-02-full.png",
					thumb: "images/pentagonal-02-thumb.png"
				},
				{
					full: "images/pentagonal-03-full.png",
					thumb: "images/pentagonal-03-thumb.png"
				}
			],
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				},
				{
					stars: 3,
					body: "This product is kinda ok",
					author: "hann@walker.com"
				}
			],
			canPurchase: false,
			soldOut: false
		},
		{
			name: "Pentahexa",
			price: 6.95,
			description: "Pentahexa lalala...",
			images: [
				{
					full: "images/dodecahedron-01-full.png",
					thumb: "images/dodecahedron-01-thumb.png"
				},
				{
					full: "images/dodecahedron-02-full.png",
					thumb: "images/dodecahedron-02-thumb.png"
				},
				{
					full: "images/dodecahedron-03-full.png",
					thumb: "images/dodecahedron-03-thumb.png"
				},
			],
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				},
				{
					stars: 3,
					body: "This product is kinda ok",
					author: "hann@walker.com"
				}
			],
			canPurchase: true,
			soldOut: false
		}
	];
})();