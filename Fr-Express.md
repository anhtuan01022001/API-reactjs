## Express Framework là gì?

Express là một framework giành cho nodejs. Nó cung cấp cho chúng ta rất nhiều tính năng mạnh mẽ trên nền tảng web cũng như trên các ứng dụng di động. Express hỗ rợ các phương thức HTTP và midleware tạo ra môt API vô cùng mạnh mẽ và dễ sử dụng. Có thể tổng hợp một số chức năng chính của express như sau:

-   Thiết lập các lớp trung gian để trả về các HTTP request
-   Định nghĩa router cho phép sử dụng với các hành động khác nhau dựa trên phương thức HTTP và URL
-   Cho phép trả về các trang HTML dựa vào các tham số.

## Ưu điểm:
Các ưu điểm các bạn sẽ nhìn thấy được khi sử dụng express framework:

-  Express hỗ trợ chúng ta phát triển ứng dụng theo mô hình MVC.
-  Cho phép định nghĩa các middleware.
-  Định nghĩa rõ ràng các request methods trong route.
-  Hỗ trợ mạnh về REST API.

---

## Cài đặt

Để cài đặt express, vào Terminal và gõ lệnh sau:

    $ mkdir express
    $ cd  express
    $npm install express --save

Với câu lệnh trên sẽ lưu phần cài đặt trong thư mục node_modules và tạo thư mục express trong đó. Chúng ta cần cài đặt thêm một số module quan trọng đi cùng express như sau:

    body-parser: Đây là lớp trung gian, xỷ lý JSON, text và mã hóa URL.
    cookie-parser : Chuyển đổi header của cookie và phân bố đến các req.cookies
    multer - Xử lí phần multipart/form-data

Để cài đặt các module trên, lần lượt chạy các lệnh:

    $ npm install body-parser --save
    $ npm install cookie-parser --save
    $ npm install multer --save

---

## Làm việc với file tĩnh

Express cung cấp lớp tiện ích trung gian express.static để phục vụ cho các file tĩnh như các file hình ảnh, css, js.

Cách hoạt động của nó về cơ bản bạn chỉ cần truyền tên thư mục, nơi bạn chứa cacs file tĩnh thì express.static sẽ xử dụng file đó một cách trực tiếp.

Ví dụ, bạn muốn giữ hình ảnh, css, js trong thư mục public. Bạn có thể làm như sau:

> app.use(express.static('public')); 

Có vẻ nó vẫn còn khá là trừu tương để có thể hiểu. Hãy làm một ví dụ cụ thể sau nhé. Giả sử mình có một vài hình ảnh trong thư mục publis/images như sau:

    node_modules
    server.js
    public/
    public/images
    public/images/test.
    
---

##  Chạy chương trình đầu tiên.
- Trước đây, khi muốn khởi tạo một con server thì chúng ta sẽ phải require module http. Nhưng khi đã sử dụng express framework thì chúng ta chỉ cần require express là mọi chuyện đã được giải quyết (vì trong express framework đã tích hợp sẵn module http).

- Cụ thể chúng ta sẽ khởi tạo một con server với express framework như sau:

### [First]  các bạn tạo cho mình tệp tin có tên server.js nằm ở local như sau:

    |-node_modules/
    |-server.js

file server.js có nội dung như sau:

    //require express
    var express = require('express');
    //khởi tạo express
    var app = express();
    //xét cổng port 8000 cho server
    app.listen(8000);

Chỉ với vài dòng code ngắn gọn như kia là chúng ta đã khởi tạo được một con server rồi. Nhưng khi chúng ta run server (xem lại) lên và chạy thì nó sẽ báo lỗi 404 với nội dung như sau:

    Cannot GET /

-- Bạn đừng quá lo lắng vì nó báo lỗi như thế là bạn đang làm đúng đó :D.

-Chúng ta hãy nhìn lại đoạn code phía trên. Ở đoạn code trên chúng ta mới chỉ khởi tạo server cho nó chứ chúng ta chưa định danh cho từng param sẽ có hành động là gì? Và cụ thể đoạn code trên chúng ta sẽ sửa lại như sau:

    //require express
    var express = require('express');
    //khởi tạo express
    var app = express();
    // tạo hành động cho url /
    app.get('/', function (req, res) {
        res.send('hello world!');
    });
    //xét cổng port 8000 cho server
    app.listen(8000);
Ở đoạn code trên mình đã thêm định tuyến cho url dạng trang chủ ( ở đây là http://localhost:8000) là sẽ trả về dòng chữ 'Hello world'.  Định tuyến này trong express framework gọi là routing (bài sau mình sẽ giới thiệu với mọi người).

---

## Router trong express framwork là gì?
- Router trong express framwork là một bộ định tuyến giúp cho chúng ta định danh ra các url và hành động kèm theo nó.

- [VD:] như chúng ta định danh có url có param lien-he.html thì thực hiện hành động trả về view liên hệ,..

- Và để sử dụng router trong express framwork thì các bạn sử dụng cú pháp:

    app.method(path, handle);

Trong đó:

-   app là biến mà khi chúng ta khởi tạo express framework (xem bài trước).
-   method là một trong các dạng http method sau: get,post,put,delete,head,path
-   path là thành phần phía sau domain mà chúng ta muốn xác định.
-   handle là hành động sẽ thực thi khi danh path được gọi. handle ở đây là callback function Với req là biến chứa tất cả các thông số request mà người dùng gửi lên và res là biến chứa tất cả các thông số mà server trả về cho client.

## Các ví dụ về Router

### Router GET method.
-   Router này chỉ nhận phương thức get đến url.

VD: trả về chữ 'hello world' khi người dùng get request vào url có param là say.

    app.get('/say', function (req, res) {
        res.send('hello world');
    });

-   Router POST method:
Router này chỉ nhận phương thức post.

VD: Trả về chữ 'hello world' khi người dùng gửi post request đến url có param là say.

    app.post('/say', function (req, res) {
        res.send('hello world');
    });

### Các method khác.
-   Đối với các method khác cung làm tương tự như hai method get và post. Chỉ việc đổi tên method thành method mà bạn muốn nhận.

VD:

    // put method
    app.put('/say', function (req, res) {
        res.send('hello world');
    });
    // delete method
    app.delete('/say', function (req, res) {
        res.send('hello world');
    });

#### Nhận tất cả các method.
-   Trong trường hợp các bạn muốn nhận tất cả các method thì chỉ cần đổi method thành all là ứng dụng sẽ nhận tất cả các method.

VD:

    app.all('/say', function (req, res) {
        res.send('hello world');
    });

#### Regular expression trong router.
-Trong router của express framwork có hỗ trợ chúng ta regular expression. Về phần regular express thì nó giống như phần regular expression trong PHP nên mình không nhắc lại lý thuyết nữa (bạn nào cần có thể xem lại tại đây).

### VD:

-   Bạn muốn chấp nhận path abc hoặc abcd thì router sẽ có dạng như sau:

        app.get('/abcd?', function (req, res) {
        res.send('khớp');
        })

-   Bạn muốn path dạng abcd hoặc abcdd hoặc abcddd,... thì router sẽ có dạng như sau:

        app.get('/abcd+', function (req, res) {
        res.send('khớp');
        })
    
-   Bạn muốn path dạng abcd hoặc abcxd hoặc abctoidicoded,... thì router sẽ có dạng như sau:

        app.get('/abc*d', function (req, res) {
        res.send('khớp');
        });
        ....

#### Truyền tham số vào router.

-   Để truyền tham số vào router chúng ta sẽ sử dụng dấu : và tên biến vào path.

VD: Truyền tham số name vào router.

    app.get('/user/:name', function (req,res) {
        res.send('User name có tên: '+ req.params.name);
    });