(function() {

	angular.module("store").controller("StoreController", function() {
		this.products = shapes;
	});
	
	var shapes = [
		{
			name: "Dodecahedron",
			price: 2.95,
			description: "Dodecahedron lalala...",
			images: [
				{
					full: "assets/images/dodecahedron-01-full.png",
					thumb: "assets/images/dodecahedron-01-thumb.png"
				},
				{
					full: "assets/images/dodecahedron-02-full.png",
					thumb: "assets/images/dodecahedron-02-thumb.png"
				},
				{
					full: "assets/images/dodecahedron-03-full.png",
					thumb: "assets/images/dodecahedron-03-thumb.png"
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
					full: "assets/images/pentagonal-01-full.png",
					thumb: "assets/images/pentagonal-01-thumb.png"
				},
				{
					full: "assets/images/pentagonal-02-full.png",
					thumb: "assets/images/pentagonal-02-thumb.png"
				},
				{
					full: "assets/images/pentagonal-03-full.png",
					thumb: "assets/images/pentagonal-03-thumb.png"
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
					full: "assets/images/dodecahedron-01-full.png",
					thumb: "assets/images/dodecahedron-01-thumb.png"
				},
				{
					full: "assets/images/dodecahedron-02-full.png",
					thumb: "assets/images/dodecahedron-02-thumb.png"
				},
				{
					full: "assets/images/dodecahedron-03-full.png",
					thumb: "assets/images/dodecahedron-03-thumb.png"
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