// modules
angular.module("store", [ ]);

var shapes = [
	{
		name: "Dodecahedron",
		price: 2.95,
		description: "Dodecahedron lalala...",
		images: [
			{
				full: "app/assets/images/dodecahedron-01-full.png",
				thumb: "app/assets/images/dodecahedron-01-thumb.png"
			},
			{
				full: "app/assets/images/dodecahedron-02-full.png",
				thumb: "app/assets/images/dodecahedron-02-thumb.png"
			},
			{
				full: "app/assets/images/dodecahedron-03-full.png",
				thumb: "app/assets/images/dodecahedron-03-thumb.png"
			},
		],
		reviews: [
			{
				stars: 5,
				body: "I love this product!",
				author: "joe@thomas.com",
				createdAt: 1397490980837
			},
			{
				stars: 1,
				body: "This product sucks",
				author: "tim@hater.com",
				createdAt: 1397490980837
			},
			{
				stars: 3,
				body: "This product is kinda ok",
				author: "hann@walker.com",
				createdAt: 1397490980837
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
				full: "app/assets/images/pentagonal-01-full.png",
				thumb: "app/assets/images/pentagonal-01-thumb.png"
			},
			{
				full: "app/assets/images/pentagonal-02-full.png",
				thumb: "app/assets/images/pentagonal-02-thumb.png"
			},
			{
				full: "app/assets/images/pentagonal-03-full.png",
				thumb: "app/assets/images/pentagonal-03-thumb.png"
			}
		],
		reviews: [
			{
				stars: 5,
				body: "I love this product!",
				author: "joe@thomas.com",
				createdAt: 1397490980837
			},
			{
				stars: 1,
				body: "This product sucks",
				author: "tim@hater.com",
				createdAt: 1397490980837
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
				full: "app/assets/images/dodecahedron-01-full.png",
				thumb: "app/assets/images/dodecahedron-01-thumb.png"
			},
			{
				full: "app/assets/images/dodecahedron-02-full.png",
				thumb: "app/assets/images/dodecahedron-02-thumb.png"
			},
			{
				full: "app/assets/images/dodecahedron-03-full.png",
				thumb: "app/assets/images/dodecahedron-03-thumb.png"
			},
		],
		reviews: [
			{
				stars: 5,
				body: "I love this product!",
				author: "joe@thomas.com",
				createdAt: 1397490980837
			}
		],
		canPurchase: true,
		soldOut: false
	}
];