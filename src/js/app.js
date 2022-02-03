// import $ from 'jquery';
import { add, subtract } from './modules/math';

const item1Price = 400;
const item2Price = 600;
const coupon = 300;

const totalPrice = add(item1Price, item2Price);
const priceAfterApplyCoupon = subtract(totalPrice, coupon);

console.log(Document);
const body = document.getElementsByTagName('body');
console.log(body);
const head1 = document.createElement('h1');
head1.insertAdjacentHTML('afterbegin', priceAfterApplyCoupon);
console.log(head1);

body[0].appendChild(head1);
