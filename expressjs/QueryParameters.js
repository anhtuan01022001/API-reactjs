// Query parameters
// form tìm kiếm

const express = require('express'); // require express ra 
const app = express(); // 

const port = 3001; //  đặt địa chỉ cho port server 

app.set('view engine', 'pug');
app.set('views', './views');

var users = [
    { id: 1, name: 'Thinh' },
    { id: 2, name: 'Hung' }
];

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
        users: users
    });
});
app.get('/users/search', function(req, res) {
    var q = req.query.q; // lấy giá trị của q ra
    var matchedUsers = users.filter(function(user) {
        return user.name.indexOf(q) !== -1; // nó sẽ so sánh 2 giá trị với nguyên 
        // kiểu.
        // return user.name.toLowerCase().index0f(q.toLowerCase()) !== -1; 
        // sẽ đưa cả 2 chữ về cùng dạng LowerCase rồi so sánh -> k xét in hoa vs thường
        // nếu q nằm trong string name thì trả về gtri > -1 
        // ngc lại thì trả về giá trị <= -1
    });
    res.render('users/index', {
        users: matchedUsers
    });
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});