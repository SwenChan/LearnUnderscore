/**
 * Created by Swen on 2/3/16.
 */
var nativeIsArray = Array.isArray,
    nativeKeys = Object.keys,
    nativeCreate = Object.create;
var ArrayProto = Array.prototype, ObjProto = Object.prototype;
var push = ArrayProto.push,
    slice = ArrayProto.slice,
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty;
var a = {a: 1, b: 2, c: 3};
console.log(nativeKeys(a));
console.log(hasOwnProperty.call(a, 's'));