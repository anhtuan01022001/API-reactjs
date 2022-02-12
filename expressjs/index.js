// method : GET 
// require express 

const express = require('express'); // require express ra 
const app = express(); // 

const port = 3000; //  đặt địa chỉ cho port server 

app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', function(req, res) {
    res.render('index', { //path
        name: 'Tuan'
    });
});
// request : đẩy lên
// response : trả về cái gì đó  
// dùng '/ + tên trang ' để có thể dùng cho nhiều trang khác nhau vs các 
// công dụng khác nhau
// dùng method GET : lấy dữ liệu và hiển thị lên trình duyệt  

app.get('/users', function(req, res) {
    res.render('users/index', {
        users: [
            { id: 1, name: 'Tuan' },
            { id: 2, name: 'Thanh' }
        ]
    })
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});