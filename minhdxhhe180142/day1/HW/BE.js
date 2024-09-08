
// let arr = [
//     {
//         imgSRC: "https://m.media-amazon.com/images/I/51G22XSlZDL.jpg",
//         content: "Hello"
//     }
// ,
//     {
//         imgSRC: "https://m.media-amazon.com/images/I/51G22XSlZDL.jpg",
//         content: "Chao"
//     }
// ]

// let content = `    <div class="anh1">
// <div class="row" style="display: flex; align-items : center ; gap: 20px  ">
//     <div class="col-md-6">
//         <img src="https://png.pngtree.com/png-vector/20191126/ourmid/pngtree-image-of-cute-radish-vector-or-color-illustration-png-image_2040180.jpg" alt="anh fumo">
//     </div>
//     Hello
// </div>
// </div>` ;
// document.write(content);

let numbers = [1, 2 , 3 , 4 , 5 , 6 , 7 ];

let check = numbers.some((num , index) => {
    if (num % 2 !== 0) {
         console.log(num)
         return true ;
    }
    return false ;
}

);
console.log(check);

// every (callback) 
// trả về true nếu tất cả đều là true , trả về false nếu >1 phần tử flase 

// kt xem tat ca co phai so chan ko 

let check2 = numbers.every((num , index) => {
    if (num % 2 !== 0) {
         console.log(num)
         return false  ;
    }
    return true ;
}

);
console.log(check2);