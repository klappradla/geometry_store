'use strict';
var app = angular.module('geometryStore', [ ]);

var gems = [
  {
    name: 'triangle',
    price: 2.95,
    description: 'A triangle is a polygon with three edges and three vertices.',
    canPurchase: true,
    soldOut: true
  },
  {
    name: 'square',
    price: 3.95,
    description: 'In geometry, a square is a regular quadrilateral, which means that it has four equal sides and four equal angles (90-degree angles, or right angles).',
    canPurchase: true,
    soldOut: false
  },
  {
    name: 'circle',
    price: 4.95,
    description: 'A circle is a simple shape of Euclidean geometry that is the set of all points in a plane that are at a given distance from a given point, the centre.',
    canPurchase: true,
    soldOut: false
  }
];