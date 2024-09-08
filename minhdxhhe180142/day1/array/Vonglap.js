console.log('Vong lap')

let user = ["Hải" , "Huy" , "Minh" , "Vy" , "Hà"] ;
console.log(user)

// forEach() Duyêt qua tùng phân tử
//không dừng được  
// dùng call back trong es5 => funcion an danh 
user.forEach(function(user,index){
    if (index == 1) {
        return;
    }
    console.log(user,index);
});

//arrow function 
// users.forEach((user, index) => {
//     console.log(user, index);
// });

//3. map(callback)  duyệt qua từng phần tử trong mảng, trả về element, index, trong callback
/*
- Trả về 1 mảng mới chính là return trong callback
- Số lượng phần tử của mảng mới bằng số lượng phần tử của mảng ban đầu
- Sử dụng để giải quyết các bài toán về render dữ liệu lên trên giao diện
 */

let newArray = user.map((user, index) => {
    console.log(user, index);
    return `<h1>${user} - ${index}</h1>`;
});
document.write(newArray);

// bai tap : thuc hanh giao dien sau 
