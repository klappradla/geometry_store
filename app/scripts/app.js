'use strict';
var app = angular.module('geometryStore', [ ]);

var gems = [
  {
    name: 'triangle',
    price: 2.95,
    description: 'A triangle is a polygon with three edges and three vertices.',
    canPurchase: true,
    soldOut: false,
    images: [
      {
        full: 'images/triangle-01-full.png',
        thumb: 'images/triangle-01-thumb.png'
      },
      {
        full: 'images/triangle-02-full.png',
        thumb: 'images/triangle-02-thumb.png'
      }
    ]
  },
  {
    name: 'square',
    price: 3.95,
    description: 'In geometry, a square is a regular quadrilateral, which means that it has four equal sides and four equal angles (90-degree angles, or right angles).',
    canPurchase: true,
    soldOut: false,
    images: [
      {
        full: 'images/square-01-full.png',
        thumb: 'images/square-01-thumb.png'
      },
      {
        full: 'images/square-02-full.png',
        thumb: 'images/square-02-thumb.png'
      },
      {
        full: 'images/square-03-full.png',
        thumb: 'images/square-03-thumb.png'
      }
    ]
  },
  {
    name: 'circle',
    price: 4.95,
    description: 'A circle is a simple shape of Euclidean geometry that is the set of all points in a plane that are at a given distance from a given point, the centre.',
    canPurchase: true,
    soldOut: false
  }
];