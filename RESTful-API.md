## RESTful API là gì?

RESTful API là một tiêu chuẩn dùng trong việc thiết kế API cho các ứng dụng web (thiết kế Web services) để tiện cho việc quản lý các resource. Nó chú trọng vào tài nguyên hệ thống (tệp văn bản, ảnh, âm thanh, video, hoặc dữ liệu động…), bao gồm các trạng thái tài nguyên được định dạng và được truyền tải qua HTTP. RESTful là một trong những kiểu thiết kế API được sử dụng phổ biến ngày nay để cho các ứng dụng (web, mobile…) khác nhau giao tiếp với nhau.

### API là gì?

API (Application Programming Interface) là một tập các quy tắc và cơ chế mà theo đó, một ứng dụng hay một thành phần sẽ tương tác với một ứng dụng hay thành phần khác. API có thể trả về dữ liệu mà bạn cần cho ứng dụng của mình ở những kiểu dữ liệu phổ biến như JSON hay XML.

### REST là gì? 

REST (REpresentational State Transfer) là một dạng chuyển đổi cấu trúc dữ liệu, một kiểu kiến trúc để viết API. Nó sử dụng phương thức HTTP đơn giản để tạo cho giao tiếp giữa các máy. Vì vậy, thay vì sử dụng một URL cho việc xử lý một số thông tin người dùng, REST gửi một yêu cầu HTTP như GET, POST, DELETE, vv đến một URL để xử lý dữ liệu.

### Responsibility:

Chức năng quan trọng nhất của REST là quy định cách sử dụng các HTTP method (như GET, POST, PUT, DELETE…) và cách định dạng các URL cho ứng dụng web để quản các resource. RESTful không quy định logic code ứng dụng và không giới hạn bởi ngôn ngữ lập trình ứng dụng, bất kỳ ngôn ngữ hoặc framework nào cũng có thể sử dụng để thiết kế một RESTful API.

### Activate:
    REST hoạt động chủ yếu dựa vào giao thức HTTP. Các hoạt động cơ bản nêu trên sẽ sử dụng những phương thức HTTP riêng.
    GET (SELECT): Trả về một Resource hoặc một danh sách Resource.
    POST (CREATE): Tạo mới một Resource.
    PUT (UPDATE): Cập nhật thông tin cho Resource.
    DELETE (DELETE): Xoá một Resource.
    Những phương thức hay hoạt động này thường được gọi là CRUD tương ứng với Create, Read, Update, Delete – Tạo, Đọc, Sửa, Xóa.

### Nên sử dụng Version
Luôn sử dụng version để khi bạn cần nâng cấp API mà vẫn hỗ trợ các API cũ.

### Xây dựng API với Laravel
Lấy việc xây dựng api trên Laravel để làm ví dụ, trước khi đi vào ta tổng quan về Http Request.

### HTTP Request
HTTP request có tất cả 9 loại method , 2 loại được sử dụng phổ biến nhất là GET và POST

    GET: được sử dụng để lấy thông tin từ server theo URI đã cung cấp.
    HEAD: giống với GET nhưng response trả về không có body, chỉ có header.
    POST: gửi thông tin tới sever thông qua các biểu mẫu http.
    PUT: ghi đè tất cả thông tin của đối tượng với những gì được gửi lên.
    PATCH: ghi đè các thông tin được thay đổi của đối tượng.
    DELETE: xóa tài nguyên trên server.
    CONNECT: thiết lập một kết nối tới server theo URI.
    OPTIONS: mô tả các tùy chọn giao tiếp cho resource.
    TRACE: thực hiện một bài test loop – back theo đường dẫn đến resource.

### RESTful Route
Viết Api thì sẽ khai báo router vào file routes/api.php thay vì sử dụng file routes/web.php. 

### Resource Controllers
Tương ứng với các Route RESTful đã khai báo ở trên, đặc biệt nếu dùng method apiResource thì laravel cũng hỗ trợ các method xử lí tương ứng trong controller.

Để tạo ra Resource Controllers chúng ta chạy lệnh sau:
php artisan make:controller Api/ProductController -api

Ngoài ra nếu muốn sử dụng model binding khi tạo Resource Controllers thì dùng lệnh bên dưới:
php artisan make:controller Api/ProductController --api --model=Models/Product

Mặc định khi sử dụng route apiResource thì dữ liệu trả về sẽ tự động được chuyển sang kiểu JSON và sẽ có status tương ứng nên chỉ cần return dữ liệu ra là được.

Còn nếu muốn tùy biến status trả về thì có thể tham khảo cách phía dưới có sử dụng class Illuminate\Http\Response để lấy status thay vì fix giá trị vào ví dụ như HTTP_OK tương ứng sẽ là 200

Khi xây dựng API, bạn có thể cần transform dữ liệu từ controller trước khi trả về cho người dùng ứng dụng của bạn, laravel cũng đã hỗ trợ điều này với Eloquent Resources

Để tạo ra 1 class chuyển đổi chúng ta chạy lệnh sau:
php artisan make:resource Product

Ngoài giới hạn dữ liệu trả về như title hay price, laravel cũng hỗ trợ rất nhiều thứ như thêm relationships, data …, mọi người có thể đọc thêm docs trên Laravel.

### Authorization
Hiện tại có 3 cơ chế Authorize chính:
    HTTP Basic
    JSON Web Token (JWT)
    OAuth2
Tùy thuộc vào service của bạn, mà hãy chọn loại Authorize có mức độ phù hợp, cố gắng giữ nó càng đơn giản càng tốt.

### CORS Policy
Viết API thì cũng cần chú ý về CORS là gì?
CORS là một cơ chế cho phép nhiều tài nguyên khác nhau (fonts, Javascript, v.v…) của một trang web có thể được truy vấn từ domain khác với domain của trang đó. CORS là viết tắt của từ Cross-origin resource sharing.

### API Document
Ai cũng biết việc viết API docs là cần thiết, tuy nhiên để có một API docs hoàn chỉnh cũng tiêu tốn khá nhiều thời gian. Nhất là trong lúc dự án gấp rút thì mọi người thường chỉ để API docs ở mức siêu cơ bản. Tham khảo thêm cách viết API Document.

API document là một phần tương tự như Unit Test vậy – lấy ngắn để nuôi dài.

Nếu không được chăm sóc kỹ, thì đến lúc maintain hoặc thay đổi spec thì hậu quả sẽ rất thảm khốc, dưới đây là một số lưu ý lúc viết docs:

Mô tả đầy đủ về params request: gồm những params nào, datatype, require hay optional.
Nên đưa ra các ví dụ về HTTP requests và responses với data chuẩn.
Cập nhật Docs thường xuyên, để sát nhất với API có bất cứ thay đổi gì.
Format, cú pháp cần phải nhất quán, mô tả rõ ràng, chính xác.

