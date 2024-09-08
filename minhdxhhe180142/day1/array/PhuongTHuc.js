//let users = ["Hai" , "Hien" , "Ha" , "Dung"] ;

let indextDelet = 1 ;
let result = [] ;
let users =  ["Hai" , "Hien" , "Ha" , "Dung"] ;

// for (let index in users) {
//     if (index == indextDelet) {
//         continue ;
//     }
//     result[result.length] = users[index] ;
// };

// console.log[result];

// users.splice(1,2,"minh","anh")

//users[11] = "hoang" ;

console.log(users);
console.log(users[1]);

console.log(typeof users);
console.log(typeof null);

if (Array.isArray(users)) {
    console.log("la mang");
}
else  {
    console.log("ko phai mang");
}
// concat - them gia tri vao
console.log(users.concat([1,2,3,4], [1,2,3,4]));

//loai bo cac gia tri trung nhau
let users2 = users.concat([1,2,3,4], [1,2,3,4]);
let mangloaibo = [... new Set(users2)] ;

console.log(users2);
console.log(mangloaibo);

//tim vi tri dau tien cua mang 

console.log(users.indexOf("Dung"));

if (users.lastIndexOf("Dung") === -1) {
    console.log("ko co")
}
else{
    console.log("co")
}

//tim vi tri cuoi cua mang
console.log(users.lastIndexOf("Dung"));

//tim phan tu trong mang (chi co tru hoac flase)
console.log(users.includes("Dung"));

//slice(start , end) cat va lay mang tu vi tri start den <end

console.log(users.slice(0,2));

// lay tu dau
console.log(users.slice(3));
//lay tu dit
console.log(users.slice(-2));

//join noi cac phan tu lai thanh 1 chuoi 
console.log(users.join(' - '));

//push them phan tu vao cuoi mang
let count3 = users.push("hai1" , "hai2" , "hai3");
console.log(count3);
console.log(users);

// unshift() them phan tu vao dau mang 
let count4 = users.unshift("hello" , "jello");
console.log(count4);
console.log(users);

//pop : coa phan tu cuoi
let value = users.pop() ;
console.log(value);
console.log(users);

//shift : xoa pha ntu dau 
let value3 = users.shift();
console.log(value3);
console.log(users);

//fill : thay toan bo phan tu = 1 gia tri bat ky
users.fill("Hello");
console.log(users);
