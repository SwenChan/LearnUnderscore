/**
 * test line 177 code in underscore
 * Created by Swen on 2/3/16.
 */
//var keys = !isArrayLike(obj) && _.keys(obj)
//in above, what's in keys? Let's see.
var a1 = {a: 1, b: 2} && true, b1 = true && {a: 1, b: 2}, c1 = {a: 1, b: 2} && false, d1 = false && {a: 1, b: 2};
var e1 = true && true && {a: 1, b: 2}, f1 = true && false && {a: 1, b: 2}, g1 = false && true && {a: 1, b: 2};
var h1 = true && {a: 1, b: 1} && {a: 1, b: 2}, i1 = false && {a: 1, b: 1} &&　{a: 1, b: 2};  //return last true value, not boolean value but object!! 返回最后的值的对象值而不是逻辑布尔值!!
//after that, we know that '&&' can use to replace if true return value like that:
//var result = {};
//if(objA && objB && objC && objD){
//    return objD;
//}
//replace by:
//var result = objA && objB && objC && objD; if condition before objD are all true, result is objD, if not, result is false
console.log(a1, b1, c1, d1);
console.log(e1, f1);
console.log(h1, i1);

//now let's see ||
//different from && , || return the value of first true, not boolean but object value
var a2 = {a: 1, b: 2} || false, b2 = false || {a: 1, b: 2}, c2 = true || {a: 1, b: 2}, d2 = {a: 1, b: 2} || true; //see, first true object value, not boolean but value.
var e2 = {a: 1, b: 2} || {a: 1, b: 2} || true, f2 = false || {a: 1, b: 1} || {a: 1, b: 2}, g2 = false || true || {a: 1, b: 2}; // look the f2, return {a: 1, b: 1}, first true object's value
console.log(a2, b2, c2, d2);
console.log(e2, f2, g2);