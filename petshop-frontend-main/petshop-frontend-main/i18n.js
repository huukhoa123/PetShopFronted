(function() {
  // --- BẢN ĐỒ DỊCH DẠNG CHỮ THƯỜNG (LOWERCASE DICTIONARY) ---
  // Sử dụng chữ thường làm key để giải quyết triệt để lỗi phân biệt hoa/thường (case-sensitive)
  const translations = {
    en: {
      // --- Menu & Navigation ---
      "trang chủ": "Home",
      "dịch vụ": "Services",
      "cửa hàng": "Shop",
      "đơn hàng": "Orders",
      "liên hệ": "Contact",
      "quản lý": "Dashboard",
      "đăng nhập": "Login",
      "đăng ký": "Register",
      "đăng xuất": "Logout",
      "tổng quan": "Overview",
      "khách hàng": "Customers",
      "thú cưng": "Pets",
      "sản phẩm": "Products",
      "thanh toán": "Payments",
      "nhân viên": "Employees",
      "lịch làm việc": "Schedules",
      "về trang chủ": "Back to Home",
      "management portal": "Management Portal",

      // --- Hero Section ---
      "chăm sóc thú cưng đẳng cấp": "Luxury Pet Care",
      "nâng tầm trải nghiệm": "Elevating Experiences",
      "trung tâm chăm sóc, làm đẹp, khám chữa bệnh và cung cấp phụ kiện thú cưng cao cấp hàng đầu. nơi thú cưng của bạn được phục vụ như những thượng khách.": "A leading center for pet care, grooming, veterinary clinics, and premium accessories. Where your pets are treated like royalty.",
      "đặt lịch ngay": "Book Now",
      "khám phá cửa hàng": "Explore Shop",

      // --- Services Dropdown & Content ---
      "chăm sóc & làm đẹp": "Care & Grooming",
      "spa & grooming": "Spa & Grooming",
      "tắm & sấy lông": "Bath & Dry",
      "cắt tỉa lông": "Haircut & Style",
      "y tế & sức khoẻ": "Health & Wellness",
      "khám thú y": "Vet Clinic",
      "tiêm phòng": "Vaccination",
      "chăm sóc răng miệng": "Dental Care",
      "khách sạn": "Pet Hotel",
      "huấn luyện": "Training",
      "thức ăn": "Food",
      "vòng cổ & phụ kiện": "Collars & Accessories",
      "canxi & thực phẩm chức năng": "Calcium & Supplements",
      "dầu tắm & chăm sóc": "Shampoo & Care",
      "đồ chơi": "Toys",
      "khác": "Others",

      // --- About Us Section ---
      "về chúng tôi": "About Us",
      "sứ mệnh & tầm nhìn": "Mission & Vision",
      "chất lượng hàng đầu": "Top Quality",
      "sử dụng sản phẩm organic, an toàn và công nghệ chăm sóc tiên tiến nhất để đảm bảo sức khoẻ tối ưu.": "Using organic, safe products and state-of-the-art care technology to ensure optimal health.",
      "chăm sóc tận tâm": "Dedicated Care",
      "mỗi thú cưng được đối xử bằng sự thấu hiểu, kiên nhẫn và tình yêu như thành viên trong gia đình.": "Each pet is treated with understanding, patience, and love as a family member.",
      "cộng đồng yêu thú cưng": "Pet Lover Community",
      "xây dựng nơi giao lưu ấm áp, chia sẻ kiến thức và lan toả tình yêu động vật đến mọi người.": "Building a warm space to connect, share knowledge, and spread love for animals.",

      // --- Testimonials Section ---
      "khách hàng nói gì?": "What Clients Say",
      "sự hài lòng của bạn là phần thưởng lớn nhất của chúng tôi.": "Your satisfaction is our greatest reward.",
      "\"dịch vụ spa ở đây thật tuyệt vời! bé cún nhà mình thường rất sợ tắm nhưng các bạn nhân viên cực kỳ nhẹ nhàng. lông bé mềm mượt và thơm lâu.\"": "\"The spa service here is wonderful! My puppy is usually very afraid of bathing, but the staff is extremely gentle. Her coat is soft and smells good for a long time.\"",
      "\"rất yên tâm khi mua sản phẩm hữu cơ tại đây. thức ăn hạt chất lượng, tư vấn viên rất am hiểu về dinh dưỡng cho mèo.\"": "\"Very peace of mind when buying organic products here. Quality kibbles, and the advisors are very knowledgeable about cat nutrition.\"",
      "\"phòng khám thú y sạch sẽ, bác sĩ thân thiện. mình đưa bé đến khám định kỳ và rất ưng ý với phong cách chuyên nghiệp.\"": "\"Clean veterinary clinic, friendly doctors. I bring my pet for regular check-ups and am very pleased with the professional style.\"",
      "mẹ của bé cún": "Owner of puppy",
      "chủ của bé miu": "Owner of kitty",
      "mẹ của bé teddy": "Owner of Teddy",

      // --- Stats CTA Section ---
      "năm kinh nghiệm": "Years of Experience",
      "khách hàng hài lòng": "Satisfied Customers",
      "giải thưởng ngành": "Industry Awards",
      "tham gia ngay hôm nay và nhận ưu đãi đặc biệt cho lần đầu đặt lịch.": "Join today and get a special discount on your first booking.",

      // --- Footer ---
      "định hình tiêu chuẩn mới trong việc chăm sóc và nuôi dưỡng thú cưng tại Việt Nam.": "Defining new standards in pet care and nurturing in Vietnam.",
      "chính sách": "Policies",
      "đăng ký nhận tin": "Newsletter",
      "nhận những ưu đãi đặc quyền dành riêng cho thành viên.": "Receive exclusive offers for members only.",
      "email của bạn...": "Your email...",

      // --- Dashboard / Statistics Page ---
      "thống kê": "Statistics",
      "chào mừng trở lại 👋": "Welcome back 👋",
      "tạo excel": "Export Excel",
      "tải excel": "Download Excel",
      "tổng doanh thu": "Total Revenue",
      "tổng đơn hàng": "Total Orders",
      "tổng khách hàng": "Total Customers",
      "đang tải...": "Loading...",
      "tổng quan doanh thu": "Revenue Overview",
      "doanh thu theo thời gian": "Revenue Over Time",
      "7 ngày qua": "Last 7 days",
      "30 ngày qua": "Last 30 days",
      "theo tháng": "Monthly",
      "doanh thu theo tháng": "Monthly Revenue",
      "trạng thái đơn hàng": "Order Status",
      "đơn hàng gần đây": "Recent Orders",
      "mã đơn": "Order ID",
      "tổng tiền": "Total Amount",
      "ngày": "Date",
      "xem tất cả →": "View all →",
      "top sản phẩm bán chạy": "Top Selling Products",
      "tồn kho thấp": "Low Stock Alert",
      "danh sách sản phẩm": "Product List",
      "giá bán": "Price",
      "tồn kho": "Stock",
      "phân khúc khách hàng": "Customer Segments",
      "phân bộ hạng thành viên": "Membership Tier Distribution",
      "danh sách khách hàng": "Customer List",
      "liên hệ": "Contact",
      "hạng": "Tier",
      "điểm": "Points",
      "thống kê lịch hẹn": "Booking Statistics",
      "dịch vụ hiện có": "Available Services",
      "lịch hẹn gần đây": "Recent Bookings",
      "mã lịch": "Booking ID",
      "ngày hẹn": "Appointment Date",
      "quản lý →": "Manage →",
      "quản lý dịch vụ →": "Manage Services →",

      // --- Login & Registration ---
      "chào mừng trở lại": "Welcome back",
      "đăng nhập để tiếp tục hành trình cùng thú cưng": "Log in to continue your journey with pets",
      "nhập tên đăng nhập": "Enter your username",
      "nhập mật khẩu": "Enter your password",
      "quên mật khẩu?": "Forgot password?",
      "chưa có tài khoản?": "Don't have an account?",
      "đăng ký ngay": "Register now",
      "đăng ký tài khoản": "Register Account",
      "tạo tài khoản mới để bắt đầu chăm sóc thú cưng": "Create a new account to start caring for your pets",
      "họ và tên": "Full name",
      "nhập họ và tên": "Enter full name",
      "số điện thoại": "Phone number",
      "nhập số điện thoại": "Enter phone number",
      "nhập email": "Enter email address",
      "xác nhận mật khẩu": "Confirm password",
      "nhập lại mật khẩu": "Re-enter password",
      "đã có tài khoản?": "Already have an account?",

      // --- Buttons & Table Headers ---
      "thêm mới": "Add new",
      "tìm kiếm": "Search",
      "lọc": "Filter",
      "trạng thái": "Status",
      "hành động": "Actions",
      "chi tiết": "Details",
      "xóa": "Delete",
      "sửa": "Edit",
      "lưu": "Save",
      "hủy": "Cancel",
      "thành công": "Success",
      "lỗi": "Error",
      "thông tin": "Info",
      "cảnh báo": "Warning",
      "thêm": "Add",
      "mô tả": "Description",
      "hoạt động": "Active",
      "ngưng hoạt động": "Inactive",
      "lưu thay đổi": "Save Changes",
      "tải lại": "Reload",
      
      // --- Status Values ---
      "chờ xử lý": "Pending",
      "xác nhận": "Confirmed",
      "đang xử lý": "Processing",
      "đã giao": "Delivered",
      "hoàn thành": "Completed",
      "đã hủy": "Cancelled",
      "đã đặt": "Scheduled",
      "chưa thanh toán": "Unpaid",
      "đã thanh toán": "Paid",

      // --- Customer Tiers ---
      "đồng": "Bronze",
      "bạc": "Silver",
      "vàng": "Gold",
      "bạch kim": "Platinum",

      // --- Shop UI & Products ---
      "tất cả": "All",
      "sản phẩm nổi bật": "Featured Products",
      "những lựa chọn tốt nhất từ thiên nhiên dành cho thú cưng của bạn.": "The best choices from nature for your pets.",
      "xem tất cả": "View All",
      "đang tải sản phẩm đề xuất...": "Loading recommended products...",
      "xem tất cả sản phẩm": "View All Products",
      "hiện tại chưa có sản phẩm nào nổi bật hoặc tất cả sản phẩm đều đã hết hàng.": "Currently there are no featured products or all products are out of stock.",
      "chó": "Dog",
      "mèo": "Cat",
      "phụ kiện": "Accessories",
      "chăm sóc": "Care",
      "vitamin": "Vitamins",
      "khoảng giá": "Price Range",
      "sắp hết hàng ⚠️": "Low stock ⚠️",
      "danh mục": "Categories",
      "mặc định": "Default",
      "giá: thấp → cao": "Price: Low → High",
      "giá: cao → thấp": "Price: High → Low",
      "tồn kho: ít nhất": "Stock: Lowest",
      "tên a-z": "Name A-Z",
      "tìm sản phẩm...": "Search products...",
      "đang tải sản phẩm...": "Loading products...",
      "không tìm thấy sản phẩm": "No products found",
      "thay đổi từ khoá hoặc bộ lọc để xem kết quả khác.": "Change keywords or filters to see other results.",
      "hiển thị": "Showing",
      "sản phẩm": "products",
      "tồn < 50 cần nhập thêm": "Stock < 50 needs restock",
      "giỏ hàng": "Cart",
      "giỏ hàng đang trống": "Cart is empty",
      "giỏ hàng đang trống 🐾": "Cart is empty 🐾",
      "tổng cộng:": "Total:",
      "thanh toán ngay →": "Checkout now →",
      "xóa giỏ hàng": "Clear cart",
      "đã thêm vào giỏ hàng": "Added to cart",
      "sắp hết": "Low stock",
      "còn hàng": "In stock",
      "hết hàng": "Out of stock",
      "thành tiền": "Subtotal",
      "thanh toán ngay": "Checkout",
      "vòng cổ da": "Leather Collar",
      "dây dắt tự thu 5m": "Retractable Leash 5m",
      "dầu gội thú cưng 500ml": "Pet Shampoo 500ml",
      "lược chải lông": "Shedding Brush",
      "dầu cá omega-3 60 viên": "Omega-3 Fish Oil (60 Softgels)",
      "vitamin c 100 viên": "Vitamin C (100 Tablets)",
      "túi": "bag",
      "cái": "item",
      "chai": "bottle",
      "thức ăn cao cấp cho chó trưởng thành, công thức cân bằng dinh dưỡng tối ưu.": "Premium food for adult dogs, optimal nutritional balance formula.",
      "thức ăn dinh dưỡng cho chó con, giàu dha hỗ trợ phát triển não bộ.": "Nutritional food for puppies, rich in DHA to support brain development.",
      "dinh dưỡng hoàn chỉnh cho mèo trưởng thành, hương vị cá hấp dẫn.": "Complete nutrition for adult cats, delicious fish flavor.",
      "dinh dưỡng đặc biệt cho mèo con đang phát triển, tăng cường miễn dịch.": "Special nutrition for growing kittens, boosts immunity.",
      "vòng cổ da thật cao cấp, khóa kim loại chắc chắn, nhiều màu sắc thời trang.": "Premium genuine leather collar, sturdy metal buckle, many fashionable colors.",
      "dây dắt tự thu hiện đại dài 5m, thiết kế ergonomic thoải mái khi cầm nắm.": "Modern 5m retractable leash, ergonomic design comfortable to hold.",
      "dầu gội nhẹ nhàng, ph cân bằng cho da thú cưng. hương thơm tự nhiên.": "Gentle shampoo, pH balanced for pet skin. Natural fragrance.",
      "lược chải lông chuyên nghiệp, tay cầm ergonomic, không gây đau cho thú cưng.": "Professional grooming brush, ergonomic handle, painless for pets.",
      "viên dầu cá omega-3 cho thú cưng, giúp lông bóng mượt và tăng cường sức đề kháng.": "Omega-3 fish oil capsules for pets, helps shiny coat and boosts resistance.",
      "vitamin c tổng hợp cho thú cưng, tăng sức đề kháng và hỗ trợ hệ miễn dịch.": "Synthetic Vitamin C for pets, boosts resistance and supports the immune system.",

      // --- Database-specific Product Descriptions ---
      "sản phẩm thức ăn cho chó trưởng thành": "Premium food for adult dogs",
      "sản phẩm thức ăn cho chó con": "Nutritional food for puppies",
      "sản phẩm thức ăn cho mèo trưởng thành": "Complete nutrition for adult cats",
      "sản phẩm thức ăn cho mèo con": "Special nutrition for kittens",
      "vòng cổ bằng da cho thú cưng": "Leather collar for pets",
      "dây dắt tự co giãn cho thú cưng": "Self-retracting leash for pets",
      "dầu gội dưỡng lông cho chó mèo": "Nourishing shampoo for dogs and cats",
      "lược chải lông giảm rụng cho chó mèo": "Professional de-shedding brush for dogs and cats",
      "dầu cá bổ sung mượt lông": "Fish oil for shiny coat",
      "vitamin tăng sức đề kháng": "Vitamins for immune support",
      "thức ăn cho mèo anh lông ngắn trưởng thành": "Food for adult British Shorthair cats",
      "sieu mềm min": "Super soft and smooth",
      "siêu mịn": "Super smooth",

      // --- Messages & Alerts ---
      "vui lòng nhập đầy đủ thông tin!": "Please fill in all information!",
      "không kết nối được server!": "Cannot connect to server!",
      "đăng xuất?": "Log out?",
      "sai tên đăng nhập hoặc mật khẩu!": "Incorrect username or password!",

      // --- Booking / Services Page (services_use.html) ---
      "điền thông tin đặt lịch": "Fill Booking Information",
      "thông tin của bạn": "Your Information",
      "họ & tên *": "Full Name *",
      "số điện thoại *": "Phone Number *",
      "tên thú cưng & giống *": "Pet Name & Breed *",
      "chọn dịch vụ": "Select Service",
      "chọn ngày": "Select Date",
      "chọn giờ": "Select Time",
      "ghi chú (tuỳ chọn)": "Notes (optional)",
      "tóm tắt đặt lịch": "Booking Summary",
      "dịch vụ:": "Service:",
      "ngày:": "Date:",
      "giờ:": "Time:",
      "tổng tiền:": "Total Price:",
      "xác nhận đặt lịch": "Confirm Booking",
      "vui lòng nhập họ và tên.": "Please enter your full name.",
      "vui lòng nhập số điện thoại hợp lệ (10 số).": "Please enter a valid phone number (10 digits).",
      "vui lòng nhập email hợp lệ.": "Please enter a valid email address.",
      "vui lòng nhập tên thú cưng.": "Please enter your pet's name.",
      "vui lòng chọn dịch vụ muốn đặt.": "Please select the service to book.",
      "vui lòng chọn ngày hẹn.": "Please select the appointment date.",
      "vui lòng chọn giờ hẹn.": "Please select the appointment time.",
      "đặt lịch thành công! 🎉": "Booking Successful! 🎉",
      "vui lòng thanh toán để xác nhận lịch hẹn. cảm ơn bạn đã tin tưởng pet luxury! 🐾": "Please complete the payment to confirm your appointment. Thank you for choosing PET LUXURY! 🐾",
      "thanh toán ngay": "Pay Now",
      "thanh toán sau": "Pay Later",
      "mã lịch hẹn:": "Booking ID:",
      "hôm nay": "Today",
      "hết giờ hôm nay. vui lòng chọn ngày khác.": "Fully booked today. Please select another date.",
      "đang tải dịch vụ...": "Loading services...",
      "giá làm việc: thứ 2 – thứ 7, 09:00 – 18:00": "Working hours: Mon – Sat, 09:00 – 18:00",
      "thông tin đặt lịch": "Booking Info",
      "t2": "Mon",
      "t3": "Tue",
      "t4": "Wed",
      "t5": "Thu",
      "t6": "Fri",
      "t7": "Sat",
      "cn": "Sun",
      "thứ 2": "Monday",
      "thứ 3": "Tuesday",
      "thứ 4": "Wednesday",
      "thứ 5": "Thursday",
      "thứ 6": "Friday",
      "thứ 7": "Saturday",
      "chủ nhật": "Sunday",
      "chủ bé mochi – golden": "Owner of Mochi – Golden",
      "chủ bé bông – corgi": "Owner of Bong – Corgi",
      "chủ bé cam – maine coon": "Owner of Cam – Maine Coon",

      // --- Admin Bookings Page (bookings.html) ---
      "quản lý lịch hẹn": "Manage Appointments",
      "danh sách lịch hẹn": "Appointment List",
      "tạo lịch hẹn": "Create Appointment",
      "tạo lịch hẹn mới": "Create New Appointment",
      "lịch trình hôm nay": "Today's Schedule",
      "tìm kiếm khách, thú cưng...": "Search customers, pets...",
      "tất cả nhân viên": "All Employees",
      "tất cả trạng thái": "All Statuses",
      "chờ xác nhận": "Pending",
      "đã xác nhận": "Confirmed",
      "đang thực hiện": "In Progress",
      "không đến": "No Show",
      "lịch hẹn": "Appointments",
      "lưu lịch hẹn": "Save Appointment",
      "cập nhật trạng thái": "Update Status",
      "lý do hủy": "Cancel Reason",
      "khách hàng / thú cưng": "Customer / Pet",
      "thời gian": "Time",
      "thao tác": "Actions",
      "khách không có lịch hẹn nào": "No appointments found",
      "nhân viên thực hiện": "Assigned Employee",
      "ghi chú": "Notes",
      "ghi chú thêm...": "Additional notes...",
      "chỉnh sửa lịch hẹn": "Edit Appointment",
      "thông tin": "Info",

      // --- Admin Schedules Page (schedules.html) ---
      "dạng lịch": "Calendar View",
      "danh sách": "List View",
      "tải mẫu excel": "Download Excel Template",
      "import excel": "Import Excel",
      "thêm ca làm việc": "Add Shift",
      "thêm ca làm việc mới": "Add New Shift",
      "chỉnh sửa ca làm việc": "Edit Shift",
      "lưu ca làm việc": "Save Shift",
      "ngày làm": "Work Date",
      "ngày làm việc *": "Work Date *",
      "giờ bắt đầu": "Start Time",
      "giờ bắt đầu *": "Start Time *",
      "giờ kết thúc": "End Time",
      "giờ kết thúc *": "End Time *",
      "chọn nhân viên *": "Select Employee *",
      "chưa có lịch làm việc nào.": "No work schedules found.",

      // --- Customer Page (customers.html) ---
      "quản lý khách hàng": "Manage Customers",
      "danh sách khách hàng": "Customer List",
      "quản lý thông tin và hồ sơ khách hàng": "Manage customer information and profiles",
      "thêm khách hàng": "Add Customer",
      "tìm kiếm khách hàng...": "Search customers...",
      "mã kh": "Customer ID",
      "họ tên": "Full Name",
      "điện thoại": "Phone",
      "chi tiết khách hàng": "Customer Details",
      "chọn một khách hàng để xem chi tiết": "Select a customer to view details",
      "thống kê nhanh": "Quick Stats",
      "tổng kh": "Total Customers",
      "đang hoạt động": "Active",
      "hạng gold+": "Gold+ Tier",
      "tb điểm tích lũy": "Avg. Loyalty Points",
      "thêm khách hàng mới": "Add New Customer",
      "chỉnh sửa khách hàng": "Edit Customer",
      "họ và tên *": "Full Name *",
      "nguyễn văn a": "John Doe",
      "ngày sinh": "Date of Birth",
      "địa chỉ": "Address",
      "123 đường abc, quận 1, tp.hcm": "123 ABC Street, District 1, HCMC",
      "không thể tải danh sách khách hàng!": "Unable to load customer list!",
      "điểm tích lũy": "Loyalty Points",
      "xem thú cưng của kh này →": "View pets of this customer →",
      "không thể xóa khách hàng!": "Unable to delete customer!",
      "vui lòng nhập họ tên!": "Please enter full name!",
      "cập nhật khách hàng thành công! ✅": "Customer updated successfully! ✅",
      "thêm khách hàng thành công! 🎉": "Customer added successfully! 🎉",
      "chọn khách hàng để xem chi tiết": "Select a customer to view details",
      "đang lưu...": "Saving...",
      "hạng đồng": "Bronze Tier",
      "hạng bạc": "Silver Tier",
      "hạng vàng": "Gold Tier",
      "hạng bạch kim": "Platinum Tier",

      // --- Employee Page (employees.html) ---
      "quản lý nhân viên - petshop admin": "Employee Management - PetShop Admin",
      "quản lý nhân viên": "Manage Employees",
      "tìm kiếm nhanh...": "Quick Search...",
      "tìm tên, sđt, email...": "Search name, phone, email...",
      "tất cả vị trí": "All Positions",
      "bác sĩ thú y": "Veterinarian",
      "nhân viên chăm sóc": "Pet Care Staff",
      "lễ tân": "Receptionist",
      "groomer": "Groomer",
      "tất cả trạng thái": "All Statuses",
      "đang làm việc": "Active",
      "đã nghỉ": "Inactive",
      "thêm nhân viên mới": "Add New Employee",
      "tổng nhân viên": "Total Employees",
      "vị trí": "Position",
      "số điện thoại": "Phone Number",
      "lương": "Salary",
      "lương (vnđ)": "Salary (VND)",
      "lương (vnd)": "Salary (VND)",
      "ngày bắt đầu": "Start Date",
      "thêm nhân viên": "Add Employee",
      "chỉnh sửa nhân viên": "Edit Employee",
      "nhập họ và tên": "Enter full name",
      "chọn vị trí": "Select position",
      "nhập mức lương": "Enter salary",
      "hủy bỏ": "Cancel",
      "lưu thông tin": "Save Information",
      "không tìm thấy nhân viên nào.": "No employees found.",
      "vô hiệu hóa nhân viên này?": "Deactivate this employee?",
      "xóa vĩnh viễn nhân viên này? hành động không thể hoàn tác.": "Permanently delete this employee? This action cannot be undone.",
      "không thể kết nối api: ": "Unable to connect to API: ",
      "lỗi kết nối: ": "Connection error: ",
      "cập nhật nhân viên thành công!": "Employee updated successfully!",
      "thêm nhân viên thành công!": "Employee added successfully!",
      "đã vô hiệu hóa nhân viên!": "Employee deactivated!",
      "đã xóa nhân viên!": "Employee deleted!",
      "vui lòng điền họ tên, email và vị trí!": "Please fill in Full Name, Email and Position!",

      // --- Dashboard / Overview (dashboard.html) ---
      "làm mới": "Refresh",
      "cập nhật:": "Updated:",
      "doanh thu": "Revenue",
      "tổng dịch vụ": "Total Services",
      "chuyển khoản": "Bank Transfer",
      "tiền mặt": "Cash",
      "qr code": "QR Code",
      "cod": "COD",
      "vnpay": "VNPay",
      "momo": "MoMo",
      "kh": "customers",
      "chào buổi sáng": "Good morning",
      "chào buổi chiều": "Good afternoon",
      "chào buổi tối": "Good evening",
      "🥉 đồng": "🥉 Bronze",
      "🥈 bạc": "🥈 Silver",
      "🥇 vàng": "🥇 Gold",
      "💎 bạch kim": "💎 Platinum",

      // --- Common / General ---
      "quản trị hệ thống": "System Administrator",
      "đang tải dữ liệu...": "Loading data...",
      "chỉnh sửa": "Edit",

      // --- Bookings Page (bookings.html) ---
      "quản lý lịch hẹn - petmanager pro": "Booking Management - PetManager Pro",
      "bạn có thể thêm lịch hẹn mới cho khách hàng.": "You can add new bookings for customers.",
      "tạo nhanh": "Quick Create",
      "khách hàng *": "Customer *",
      "-- chọn khách hàng --": "-- Select Customer --",
      "thú cưng *": "Pet *",
      "-- chọn thú cưng --": "-- Select Pet --",
      "dịch vụ *": "Service *",
      "ngày *": "Date *",
      "giờ *": "Time *",
      "-- phân công sau --": "-- Assign Later --",
      "trạng thái mới": "New Status",
      "cập nhật": "Update",
      "vd: khách bận, đổi lịch...": "e.g., Customer busy, rescheduled...",
      "cập nhật trạng thái thành công!": "Status updated successfully!",
      "đã xóa lịch hẹn": "Booking deleted!",

      // --- Pets Page (pets.html) ---
      "quản lý thú cưng": "Manage Pets",
      "lọc theo khách hàng": "Filter by Customer",
      "đang xem kh": "Viewing Customer",
      "lọc theo loài": "Filter by Species",
      "🐾 tất cả loài": "🐾 All Species",
      "🐶 chó": "🐶 Dogs",
      "🐱 mèo": "🐱 Cats",
      "🐰 khác": "🐰 Others",
      "tổng": "Total",
      "0 thú cưng": "0 pets",
      "thêm thú cưng": "Add Pet",
      "tên thú": "Pet Name",
      "loài": "Species",
      "giống": "Breed",
      "cân nặng": "Weight",
      "chủ sở hữu": "Owner",
      "nhập mã kh hoặc nhấn \"xem tất cả\" để bắt đầu": "Enter Customer ID or click \"View All\" to start",
      "chưa có thú cưng nào": "No pets found",
      "khách hàng này chưa đăng ký thú cưng nào.": "This customer has not registered any pets.",
      "thêm thú cưng đầu tiên": "Add first pet",
      "tên thú cưng": "Pet Name",
      "-- chọn loài --": "-- Select Species --",
      "🐰 thỏ": "🐰 Rabbit",
      "🐾 khác": "🐾 Others",
      "giới tính": "Gender",
      "-- chọn --": "-- Select --",
      "♂ đực": "♂ Male",
      "♀ cái": "♀ Female",
      "cân nặng (kg)": "Weight (kg)",
      "màu lông": "Fur Color",
      "mã kh (chủ)": "Customer ID (Owner)",
      "ghi chú sức khỏe": "Health Notes",
      "tìm tên thú cưng, giống...": "Search pet name, breed...",
      "vàng, đen trắng...": "Yellow, black & white...",
      "tiêm phòng, bệnh lý, chế độ ăn...": "Vaccinations, medical conditions, diet...",
      "đực": "Male",
      "cái": "Female",
      "thỏ": "Rabbit",
      "thêm thú cưng thành công! 🐾": "Pet added successfully! 🐾",

      // --- Products Page (products.html) ---
      "petshop admin - danh sách sản phẩm": "PetShop Admin - Product List",
      "tất cả danh mục": "All Categories",
      "thêm sản phẩm": "Add Product",
      "ảnh": "Image",
      "tên sản phẩm": "Product Name",
      "giá": "Price",
      "đơn vị": "Unit",
      "tồn kho < 10 cần nhập thêm": "Stock < 10 needs restock",
      "thêm sản phẩm mới": "Add New Product",
      "điền thông tin và upload ảnh sản phẩm": "Fill in information and upload product image",
      "giá bán (₫)": "Price (₫)",
      "mô tả sản phẩm": "Product Description",
      "ảnh sản phẩm": "Product Image",
      "kéo thả ảnh vào đây hoặc": "Drag & drop image here or",
      "chọn file": "select file",
      "jpg, png, webp tối đa 5mb": "JPG, PNG, WEBP max 5MB",
      "xóa ảnh": "Delete Image",
      "hoặc nhập url ảnh:": "Or enter image URL:",
      "lưu sản phẩm": "Save Product",
      "xác nhận xóa sản phẩm": "Confirm Delete Product",
      "bạn có chắc muốn": "Are you sure you want to",
      "ngừng kinh doanh": "discontinue this product?",
      "hành động này có thể khôi phục sau.": "This action can be undone later.",
      "cập nhật ảnh sản phẩm": "Update Product Image",
      "ảnh hiện tại": "Current Image",
      "kéo thả hoặc": "Drag & drop or",
      "chọn file mới": "select new file",
      "ảnh mới đã chọn": "New image selected",
      "hoặc nhập url ảnh mới:": "Or enter new image URL:",
      "lưu ảnh": "Save Image",
      "tìm theo tên sản phẩm...": "Search by product name...",
      "cái / túi / chai": "item / bag / bottle",
      "mô tả ngắn về sản phẩm...": "Short description of the product...",

      // --- Orders Page (orders.html) ---
      "quản lý đơn hàng - petshop admin": "Order Management - PetShop Admin",
      "tạo đơn hàng mới": "Create New Order",
      "đang tải đơn hàng...": "Loading orders...",
      "ngày tạo": "Created Date",
      "chưa có đơn hàng nào": "No orders found",
      "chọn khách hàng...": "Select customer...",
      "giảm giá (vnđ)": "Discount (VND)",
      "chưa có mặt hàng nào": "No items added",
      "← chọn sản phẩm hoặc dịch vụ bên trái": "← Select products or services on the left",
      "tạm tính:": "Subtotal:",
      "giảm giá:": "Discount:",
      "tổng:": "Total:",
      "tạo đơn": "Create Order",
      "đơn hàng:": "Order:",
      "trạng thái mới": "New Status",
      "đóng": "Close",
      "chi tiết đơn hàng": "Order Details",
      "xác nhận thanh toán": "Confirm Payment",
      "số tiền cần thu:": "Amount to collect:",
      "số tiền thanh toán (vnđ)": "Payment amount (VND)",
      "phương thức thanh toán": "Payment Method",
      "mã giao dịch": "Transaction Code",
      "tìm mã đơn, khách hàng...": "Search order ID, customer...",
      "nhập ghi chú nếu có...": "Enter notes if any...",
      "thanh toán thành công! bạn có muốn xem hóa đơn ngay không?": "Payment successful! Do you want to view the invoice now?",

      // --- Payments Page (payments.html) ---
      "chờ thanh toán": "Pending Payment",
      "tổng thu hôm nay": "Today's Revenue",
      "tìm kiếm đơn hàng theo id": "Search order by ID",
      "xóa cache": "Clear Cache",
      "bảng thanh toán": "Payment Sheet",
      "trạng thái đơn": "Order Status",
      "không có đơn hàng nào": "No orders found",
      "lịch sử thanh toán": "Payment History",
      "tìm đơn hàng...": "Search orders...",
      "nhập mã đơn hàng (id)...": "Enter order ID...",
      "xóa dữ liệu thanh toán online đã lưu": "Clear saved online payment cache",
      "xóa toàn bộ dữ liệu thanh toán online đã lưu cục bộ?": "Clear all locally saved online payment data?",

      // --- Schedules Page (schedules.html) ---
      "lịch làm việc - petshop admin": "Work Schedule - PetShop Admin",
      "chọn nhân viên": "Select Employee",
      "-- chọn nhân viên --": "-- Select Employee --",
      "ngày làm việc": "Work Date",
      "nhập ghi chú...": "Enter notes...",
      "bạn có chắc muốn xóa ca làm việc này?": "Are you sure you want to delete this shift?",

      // --- Services Page (services.html) ---
      "quản lý dịch vụ - petshop admin": "Service Management - PetShop Admin",
      "danh sách dịch vụ": "Service List",
      "quản lý các dịch vụ thú cưng hiện có trong hệ thống.": "Manage existing pet services in the system.",
      "thêm dịch vụ mới": "Add New Service",
      "tên dịch vụ": "Service Name",
      "giá (vnđ)": "Price (VND)",
      "thời gian (phút)": "Duration (minutes)",
      "chưa có dịch vụ nào": "No services found",
      "15 phút": "15 mins",
      "30 phút": "30 mins",
      "45 phút": "45 mins",
      "60 phút": "60 mins",
      "90 phút": "90 mins",
      "120 phút": "120 mins",
      "trạng thái hoạt động": "Active Status",
      "cho phép khách hàng đặt lịch dịch vụ này": "Allow customers to book this service",
      "xác nhận xóa?": "Confirm Delete?",
      "dịch vụ sẽ bị ngừng hoạt động. hành động này không thể hoàn tác.": "The service will be deactivated. This action cannot be undone.",

      // --- Customer Client Index Page (index.html) ---
      "đã đăng nhập với": "Logged in as",
      "quản lý cửa hàng": "Store Manager",
      "cài đặt": "Settings",

      // --- Customer Client Services Page (services_use.html) ---
      "dịch vụ chăm sóc - pet luxury": "Care Services - PET LUXURY",
      "dịch vụ chăm sóc thú cưng cao cấp": "PREMIUM PET CARE SERVICES",
      "trải nghiệm bộ sưu tập dịch vụ đẳng cấp thế giới, được thiết kế riêng cho sức khỏe, vẻ đẹp và sự an lành của người bạn đồng hành yêu quý.": "Experience a world-class collection of services, tailored for the health, beauty, and well-being of your beloved companion.",
      "xem dịch vụ": "View Services",
      "danh mục dịch vụ": "Service Categories",
      "tắm thú cưng": "Pet Bathing",
      "vệ sinh tai": "Ear Cleaning",
      "chăm sóc da": "Skin Care",
      "thú y": "Veterinary",
      "khám tổng quát": "General Checkup",
      "điều trị bệnh": "Disease Treatment",
      "tư vấn sức khỏe": "Health Consulting",
      "khách sạn thú cưng": "Pet Hotel",
      "phòng vip": "VIP Room",
      "camera theo dõi": "Monitoring Camera",
      "chăm sóc 24/7": "24/7 Care",
      "huấn luyện cơ bản": "Basic Training",
      "huấn luyện nâng cao": "Advanced Training",
      "điều chỉnh hành vi": "Behavior Modification",
      "dịch vụ của chúng tôi": "Our Services",
      "chăm sóc toàn diện cho thú cưng": "Comprehensive Care for Pets",
      "các liệu pháp được thiết kế riêng, sử dụng sản phẩm cao cấp an toàn để đảm bảo thú cưng của bạn trông đẹp và cảm thấy tuyệt vời nhất.": "Tailored treatments using safe premium products to ensure your pet looks and feels their best.",
      "các liệu pháp spa đặc trưng kết hợp sản phẩm thực vật hữu cơ với kỹ thuật chuyên gia để phục hồi da và lông cho thú cưng của bạn. từ thủy trị liệu đến tạo kiểu đặc biệt, mỗi buổi là một kỳ nghỉ dưỡng giác quan.": "Signature spa therapies combine organic botanical products with expert techniques to restore your pet's skin and coat. From hydrotherapy to specialized styling, each session is a sensory retreat.",
      "gói dịch vụ": "Service Packages",
      "từ 350.000₫": "FROM 350,000₫",
      "từ 650.000₫": "FROM 650,000₫",
      "từ 1.200.000₫": "FROM 1,200,000₫",
      "đặt lịch spa": "Book Spa",
      "tại sao chọn pet luxury?": "Why Choose PET LUXURY?",
      "chúng tôi cam kết mang lại trải nghiệm tốt nhất cho thú cưng của bạn": "We are committed to bringing the best experience for your pet",
      "nhân viên chứng nhận": "Certified Staff",
      "đội ngũ chuyên nghiệp được đào tạo bài bản với chứng chỉ quốc tế.": "Professional team well-trained with international certificates.",
      "sản phẩm thiên nhiên": "Natural Products",
      "100% sản phẩm từ thiên nhiên, không hóa chất độc hại, an toàn tuyệt đối.": "100% natural products, no harmful chemicals, absolute safety.",
      "không gian yên tĩnh, thân thiện — như ở nhà của chính bé thú cưng.": "Quiet, friendly space — just like your pet's own home.",
      "đặt lịch dịch vụ": "Book Service",
      "chọn dịch vụ, ngày và giờ phù hợp. chúng tôi sẽ xác nhận trong vòng 30 phút.": "Select suitable service, date and time. We will confirm within 30 minutes.",
      "đặt lịch chăm sóc": "Book Care",
      "trải nghiệm dịch vụ chăm sóc cao cấp được thiết kế riêng cho thú cưng của bạn.": "Experience premium care services tailored for your pet.",
      "123 đường grooming, quận thú cưng, tp.hcm": "123 Grooming Street, Pet District, HCMC",
      "tiền mặt, chuyển khoản, thẻ ngân hàng": "Cash, bank transfer, credit card",
      "chẩn đoán hiện đại gặp gỡ sự chăm sóc tận tâm. phòng khám được trang bị công nghệ y tế tiên tiến nhất, do đội ngũ bác sĩ thú y chuyên khoa vận hành.": "Modern diagnostics meet dedicated care. The clinic is equipped with state-of-the-art medical technology, operated by a team of specialist veterinarians.",
      "chẩn đoán tiên tiến": "Advanced Diagnostics",
      "phòng thí nghiệm nội bộ, chẩn đoán hình ảnh kỹ thuật số.": "In-house lab, digital imaging.",
      "bác sĩ chuyên khoa": "Specialist Doctor",
      "chuyên gia nội khoa, phẫu thuật và tim mạch.": "Experts in internal medicine, surgery, and cardiology.",
      "tư vấn chuyên gia": "Expert Consulting",
      "hơn 500 gia đình tin tưởng chúng tôi chăm sóc thú cưng": "Over 500 families trust us to care for their pets",
      "\"mochi nhà mình được chăm sóc rất tốt! nhân viên nhẹ nhàng, không gian sạch sẽ và thơm tho. sẽ quay lại thường xuyên!\"": "\"My Mochi was cared for very well! Gentle staff, clean and sweet-smelling space. Will return often!\"",
      "thúy anh": "Thuy Anh",
      "\"dịch vụ tiêm phòng ở đây rất chuyên nghiệp. bác sĩ tâm tâm giải thích từng loại vaccine và lịch tiêm tiếp theo.\"": "\"The vaccination service here is very professional. The doctor explained each vaccine and the next schedule thoroughly.\"",
      "\"đặt lịch online tiện lắm, nhắn tin xác nhận nhanh. grooming toàn diện cho mèo nhà mình trông như đi thi hoa hậu!\"": "\"Booking online is so convenient, quick confirmation message. Full grooming for my cat makes her look like a pageant queen!\"",
      "nâng tầm chăm sóc thú cưng thành nghệ thuật. những trải nghiệm tuyển chọn tinh tế nhất cho người bạn đồng hành đặc biệt của bạn.": "Elevating pet care into an art. The most exquisite curated experiences for your special companion.",
      "ví dụ: mochi – golden retriever 2 tuổi": "e.g., Mochi – Golden Retriever 2 years old",
      "ví dụ: bé sợ máy sấy, xin nhẹ nhàng... dị ứng với sản phẩm nào không...": "e.g., Pet is afraid of dryers, please be gentle... Any allergies...",

      // --- Customer Client Orders Page (order_use.html) ---
      "đơn hàng của tôi - pet luxury": "My Orders - PET LUXURY",
      "canxi & thực phẩm": "Calcium & Food",
      "lịch sử giao dịch": "Transaction History",
      "đơn hàng của tôi": "My Orders",
      "theo dõi toàn bộ đơn mua sắm, lịch hẹn dịch vụ và lịch sử thanh toán của bạn.": "Track all your shopping orders, service appointments, and payment history.",
      "tổng đơn": "Total Orders",
      "tổng chi tiêu": "Total Spending",
      "vui lòng đăng nhập": "Please Log In",
      "đăng nhập để xem lịch sử đơn hàng và lịch hẹn dịch vụ của bạn.": "Log in to view your order history and service appointments.",
      "đăng nhập ngay": "Log in now",
      "🛍️ đơn hàng": "🛍️ Orders",
      "📅 lịch hẹn": "📅 Appointments",
      "không tìm thấy hồ sơ": "Profile Not Found",
      "không khớp tài khoản với dữ liệu khách hàng.": "Account does not match customer records.",
      "vui lòng liên hệ cửa hàng để được hỗ trợ.": "Please contact the store for support.",
      "liên hệ hỗ trợ": "Contact Support",
      "hãy đặt dịch vụ hoặc mua sản phẩm để bắt đầu!": "Book a service or buy a product to get started!",
      "đặt lịch dịch vụ": "Book service",
      "mua sản phẩm": "Buy products",
      "tìm mã đơn, dịch vụ...": "Search order ID, service...",

      // --- Customer Client Contact Page (contact.html) ---
      "liên hệ - pet luxury": "Contact - PET LUXURY",
      "kết nối với chúng tôi": "Connect With Us",
      "liên hệ pet luxury": "Contact PET LUXURY",
      "chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn trong vòng 24 giờ.": "We are always ready to listen and support you within 24 hours.",
      "gửi tin nhắn cho chúng tôi": "Send Us a Message",
      "gửi thành công!": "Sent successfully!",
      "chúng tôi đã nhận được tin nhắn và sẽ phản hồi trong vòng 24 giờ.": "We have received your message and will reply within 24 hours.",
      "gửi thất bại!": "Sending failed!",
      "đã có lỗi xảy ra. vui lòng thử lại.": "An error occurred. Please try again.",
      "họ & tên": "Full Name",
      "số điện thoại không hợp lệ (10 chữ số).": "Invalid phone number (10 digits).",
      "chủ đề": "Subject",
      "đặt lịch spa & grooming": "Book Spa & Grooming",
      "tư vấn sản phẩm": "Product Consulting",
      "phản hồi dịch vụ": "Service Feedback",
      "hỗ trợ đơn hàng": "Order Support",
      "hợp tác kinh doanh": "Business Partnership",
      "tin nhắn": "Message",
      "vui lòng nhập nội dung tin nhắn (tối thiểu 10 ký tự).": "Please enter your message (minimum 10 characters).",
      "gửi tin nhắn": "Send Message",
      "cách liên hệ chúng tôi": "How to Reach Us",
      "xem trên google maps": "View on Google Maps",
      "0909 888 999 (miễn phí)": "0909 888 999 (Toll-free)",
      "phản hồi trong vòng 24 giờ": "Reply within 24 hours",
      "chủ nhật: nghỉ": "Sunday: Closed",
      "hỗ trợ": "Support",
      "câu hỏi thường gặp": "Frequently Asked Questions",
      "pet luxury có giao hàng hỏa tốc không?": "Does PET LUXURY offer express delivery?",
      "có, chúng tôi cung cấp dịch vụ giao hàng hỏa tốc trong vòng 2 giờ cho các đơn hàng nội thành tp.hcm. chi phí tính theo khoảng cách từ cửa hàng đến địa chỉ của bạn.": "Yes, we offer express 2-hour delivery for inner-city HCMC. Shipping fee is calculated based on the distance.",
      "tôi có cần đặt lịch trước khi đến spa không?": "Do I need to book in advance before coming to the Spa?",
      "khuyến khích đặt lịch trước ít nhất 1 ngày để thú cưng được phục vụ tốt nhất mà không phải chờ đợi. bạn có thể đặt qua form liên hệ trên hoặc gọi hotline.": "We recommend booking at least 1 day in advance for the best service without waiting. You can book via the contact form above or call our hotline.",
      "làm sao để hủy hoặc dời lịch hẹn spa?": "How do I cancel or reschedule a Spa appointment?",
      "gọi trực tiếp vào hotline hoặc nhắn qua fanpage/zalo trước ít nhất 4 tiếng so với giờ hẹn. chúng tôi sẽ sắp xếp lịch mới phù hợp cho bạn.": "Call our hotline directly or message us via fanpage/Zalo at least 4 hours before the appointment. We will arrange a new suitable time for you.",
      "sản phẩm của pet luxury có an toàn cho thú cưng không?": "Are PET LUXURY products safe for pets?",
      "100% sản phẩm được kiểm định an toàn, không chứa hóa chất độc hại. chúng tôi ưu tiên nguyên liệu hữu cơ, thân thiện với thú cưng và môi trường.": "100% of products are certified safe, containing no toxic chemicals. We prioritize organic ingredients that are pet and environmentally friendly.",
      "có chương trình thành viên hay ưu đãi thường xuyên không?": "Is there a membership program or regular discounts?",
      "có! pet luxury có chương trình thành viên với các cấp bạc, vàng, kim cương. mỗi đơn hàng tích lũy điểm đổi voucher giảm giá và nhận ưu đãi sinh nhật đặc biệt.": "Yes! PET LUXURY has a membership program with Silver, Gold, and Diamond tiers. Each order accumulates points to redeem discount vouchers and receive special birthday gifts.",
      "hãy chia sẻ chi tiết yêu cầu của bạn...": "Please share details of your request...",
      "gửi tin nhắn thành công! 🎉": "Message sent successfully! 🎉",

      // --- Additional Customer Client Pages (services_use.html, contact.html) ---
      "giờ làm việc": "Working Hours",
      "thứ 2 – thứ 7: 9:00 – 18:00": "Mon – Sat: 9:00 – 18:00",
      "thứ 2 – thứ 7: 09:00 – 18:00": "Mon – Sat: 09:00 – 18:00",
      "giờ làm việc: thứ 2 – thứ 7, 09:00 – 18:00": "Working Hours: Mon – Sat, 09:00 – 18:00",
      "chủ nhật: nghỉ": "Sunday: Closed",
      "chính sách bảo mật": "Privacy Policy",
      "điều khoản dịch vụ": "Terms of Service",
      "vận chuyển": "Shipping",
      "đổi trả": "Returns",
      "điều khoản": "Terms",
      "nhận thông tin ưu đãi độc quyền và dịch vụ mới nhất.": "Get exclusive offers and the latest service updates.",
      "nhập email của bạn": "Enter your email",
      "0909 888 999 (miễn phí)": "0909 888 999 (Toll-free)",

      // --- Customer Client Product/Shop Page (product_use.html) ---
      "sắp xếp:": "Sort by:",
      "mặc định": "Default",
      "giá: thấp → cao": "Price: Low → High",
      "giá: cao → thấp": "Price: High → Low",
      "tồn kho: ít nhất": "Stock: Lowest First",
      "tên a-z": "Name A-Z",
      "không tìm thấy sản phẩm": "No products found",
      "thay đổi từ khoá hoặc bộ lọc để xem kết quả khác.": "Change keywords or filter to see other results.",
      "tồn &lt; 50 cần nhập thêm": "Stock < 50 needs restock",
      "tồn < 50 cần nhập thêm": "Stock < 50 needs restock",
      "giỏ hàng đang trống": "Your cart is empty",
      "giỏ hàng đang trống 🐾": "Your cart is empty 🐾",
      "tổng cộng:": "Total:",
      "thanh toán ngay →": "Checkout now →",
      "xóa giỏ hàng": "Clear Cart",
      "đã thêm vào giỏ hàng": "Added to cart",
      "đã thêm vào giỏ hàng 🛒": "Added to cart 🛒",
      "đã xóa giỏ hàng": "Cleared cart",
      "giỏ hàng trống!": "Cart is empty!",
      "chỉ còn trong kho!": "left in stock!",
      "chỉ còn": "only",
      "thêm vào giỏ hàng —": "Add to cart —",
      "đơn giá": "Unit Price",
      "hết hàng": "Out of stock",
      "thêm": "Add",
      "sắp hết": "Low stock",
      "sắp hết (": "Low stock (",
      "còn hàng (": "In stock (",
      "còn hàng": "In stock",
      "ngày tạo": "Created Date",
      "chi tiết sản phẩm": "Product Details",
      "ảnh sản phẩm": "Product Image",
      "mô tả sản phẩm": "Product Description",
      "thông tin sản phẩm": "Product Info",
      "tồn kho": "Stock",
      "đơn vị": "Unit",
      "id sản phẩm": "Product ID",
      "tìm sản phẩm...": "Search products...",
      "sản phẩm sắp hết hàng": "products low in stock",
      "sắp hết hàng": "low in stock",
      "© 2024 pet luxury pet emporium. chăm sóc thú cưng của bạn bằng tình yêu thương.": "© 2024 PET LUXURY Pet Emporium. Caring for your pet with love.",

      // --- Customer Client Payments Page (payments_use.html) ---
      "chưa có thông tin thanh toán": "No Payment Information",
      "vui lòng quay lại shop hoặc trang dịch vụ để chọn sản phẩm/dịch vụ trước.": "Please go back to the shop or service page to select products/services first.",
      "quay lại shop": "Back to Shop",
      "đặt dịch vụ": "Book Service",
      "thanh toán đơn hàng": "Order Payment",
      "thanh toán khi nhận hàng": "Cash on Delivery",
      "thanh toán online qua vnpay": "Online Payment via VNPay",
      "thanh toán thành công": "Payment Successful",
      "tiếp tục mua sắm": "Continue Shopping",
      "tóm tắt": "Summary",
      "tạm tính": "Subtotal",
      "phí giao hàng": "Shipping Fee",
      "tổng thanh toán": "Total Payment",
      "thông tin thanh toán sẽ được lưu để admin kiểm tra đơn.": "Payment details will be saved for admin review.",
      "tên khách hàng": "Customer Name",
      "vui lòng nhập họ tên.": "Please enter your name.",
      "thanh toán thành công!": "Payment successful!",
      "thanh toán vnpay thành công!": "VNPay payment successful!",

      // --- Services & Bookings Page ---
      "phổ biến nhất": "Most Popular",
      "grooming cơ bản": "Basic Grooming",
      "tắm, sấy, chải lông": "Bath, dry & brush",
      "khám sức khỏe": "Health Check",
      "kiểm tra sức khỏe tổng quát": "General health checkup",
      "từ": "From",
      "đặt lịch": "Book Appointment",
      "đặt": "Book",
      "grooming toàn diện": "Full Grooming",
      "tắm, sấy, cắt lông, cắt móng": "Bath, dry, haircut & nail trimming",
      "vệ sinh răng": "Dental Care",
      "làm sạch răng chuyên nghiệp": "Professional dental cleaning",
      "tiêm vaccine định kỳ hàng năm": "Annual periodic vaccinations",
      "không có dịch vụ nào.": "No services available.",
      "hiện chưa có dịch vụ nào.": "No services available currently.",
      "không có lịch hẹn nào.": "No bookings found.",

      // --- Mock Services ---
      "full grooming toàn diện": "Full Premium Grooming",
      "tắm, sấy, cắt tỉa lông, vệ sinh tai, cắt móng – trọn gói chăm sóc cao cấp.": "Bath, dry, haircut, ear cleaning, nail trim – premium all-in-one care.",
      "tắm spa & massage": "Spa Bath & Massage",
      "tắm nước ấm thảo dược kết hợp massage thư giãn.": "Warm herbal bath combined with relaxing massage.",
      "cắt tỉa lông chuyên sâu": "Professional Haircut & Styling",
      "tạo kiểu theo yêu cầu bởi groomer chuyên nghiệp.": "Custom styling by our professional groomers.",
      "chăm sóc răng miệng": "Dental Care",
      "vệ sinh răng, làm sạch cao răng chuyên nghiệp.": "Professional teeth cleaning and scaling.",
      "khám sức khỏe định kỳ": "Routine Health Checkup",
      "khám tổng quát, tư vấn dinh dưỡng và sức khỏe.": "General checkup, nutrition and health counseling.",

      // --- Empty states & Error states ---
      "chưa có đơn hàng nào": "No orders yet",
      "hãy đặt mua sản phẩm để bắt đầu!": "Please place an order to get started!",
      "mua sản phẩm ngay": "Buy products now",
      "không tìm thấy hồ sơ": "Profile not found",
      "không khớp tài khoản với dữ liệu khách hàng.": "Account does not match customer records.",
      "vui lòng liên hệ cửa hàng để được hỗ trợ.": "Please contact the store for assistance.",
      "liên hệ hỗ trợ": "Contact Support"
    }
  };

  let currentLang = localStorage.getItem('lang') || 'vi';

  // Kiểm tra chuỗi có viết hoa chữ cái đầu của mỗi từ không
  function isTitleCase(str) {
    const words = str.split(' ');
    if (words.length === 0) return false;
    return words.every(w => {
      if (w.length === 0) return true;
      const first = w.charAt(0);
      return first === first.toUpperCase() && first !== first.toLowerCase();
    });
  }

  // Chuyển chuỗi sang Title Case
  function toTitleCase(str) {
    return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
  }

  // Hàm dịch văn bản thông minh (không phân biệt hoa/thường khi so khớp)
  function translateText(text) {
    if (currentLang === 'vi') return text;
    
    // Chuẩn hóa khoảng trắng dư thừa và xuống dòng
    const cleanText = text.trim().replace(/\s+/g, ' ');
    if (!cleanText) return text;

    const lowerText = cleanText.toLowerCase();
    
    // --- Dynamic Text Regex Rules ---
    // 1. "Hiển thị X / Y sản phẩm" -> "Showing X / Y products"
    if (/^hiển thị\s+\d+\s*\/\s*\d+\s+sản phẩm$/i.test(lowerText)) {
      return cleanText
        .replace(/hiển thị/i, 'Showing')
        .replace(/sản phẩm/i, 'products');
    }
    // 2. "X sản phẩm" -> "X products"
    if (/^\d+\s+sản phẩm$/i.test(lowerText)) {
      return cleanText.replace(/sản phẩm/i, 'products');
    }
    // 3. "Tháng X, YYYY" -> "MonthName, YYYY"
    if (/^tháng\s+(\d+),\s*(\d{4})$/i.test(lowerText)) {
      const match = lowerText.match(/^tháng\s+(\d+),\s*(\d{4})$/i);
      const mNum = parseInt(match[1]);
      const year = match[2];
      const enMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return `${enMonths[mNum - 1]}, ${year}`;
    }
    // 4. "DD Tháng MM" or "DD Tháng M" -> "MonthName DD"
    if (/^(\d+)\s+tháng\s+(\d+)$/i.test(lowerText)) {
      const match = lowerText.match(/^(\d+)\s+tháng\s+(\d+)$/i);
      const day = match[1];
      const mNum = parseInt(match[2]);
      const enMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return `${enMonths[mNum - 1]} ${day}`;
    }
    // 5. "Mã lịch hẹn: #LHxxxx" -> "Booking ID: #LHxxxx"
    if (/^mã lịch hẹn:\s*(#lh\d+)$/i.test(lowerText)) {
      const match = cleanText.match(/^mã lịch hẹn:\s*(#lh\d+)$/i);
      return `Booking ID: ${match[1]}`;
    }
    // 6. "Hiển thị X–Y / Z khách hàng" -> "Showing X–Y / Z customers"
    if (/^hiển thị\s+\d+[-–]\d+\s*\/\s*\d+\s+khách hàng$/i.test(lowerText)) {
      return cleanText
        .replace(/hiển thị/i, 'Showing')
        .replace(/khách hàng/i, 'customers');
    }
    // 7. "Hiển thị X–Y của Z nhân viên" -> "Showing X–Y of Z employees"
    if (/^hiển thị\s+\d+[-–]\d+\s+của\s+\d+\s+nhân viên$/i.test(lowerText)) {
      return cleanText
        .replace(/hiển thị/i, 'Showing')
        .replace(/của/i, 'of')
        .replace(/nhân viên/i, 'employees');
    }
    // 8. "Hôm nay: X | Tháng: Y" -> "Today: X | Month: Y"
    if (/^hôm nay:\s*(.*?)\s*\|\s*tháng:\s*(.*?)$/i.test(lowerText)) {
      return cleanText
        .replace(/hôm nay:/i, 'Today:')
        .replace(/tháng:/i, 'Month:');
    }
    // 9. "X đang chờ xử lý" -> "X pending"
    if (/^\d+\s+đang chờ xử lý$/i.test(lowerText)) {
      return cleanText.replace(/đang chờ xử lý/i, 'pending');
    }
    // 10. "X hạng Gold+" -> "X Gold+ tier"
    if (/^\d+\s+hạng gold\+$/i.test(lowerText)) {
      return cleanText.replace(/hạng gold\+/i, 'Gold+ tier');
    }
    // 11. "X dịch vụ hiện có" -> "X services available"
    if (/^\d+\s+dịch vụ hiện có$/i.test(lowerText)) {
      return cleanText.replace(/dịch vụ hiện có/i, 'services available');
    }
    // 12. "X đơn đã thanh toán" -> "X paid orders"
    if (/^\d+\s+đơn đã thanh toán$/i.test(lowerText)) {
      return cleanText.replace(/đơn đã thanh toán/i, 'paid orders');
    }
    // 13. Confirm delete customer: "Xóa khách hàng \"{name}\"? Thao tác này không thể hoàn tác." -> "Delete customer \"{name}\"?\nThis action cannot be undone."
    if (/^xóa khách hàng\s+"([\s\S]*?)"\?\s*thao tác này không thể hoàn tác\.$/i.test(lowerText)) {
      const match = cleanText.match(/^xóa khách hàng\s+"([\s\S]*?)"\?\s*thao tác này không thể hoàn tác\.$/i);
      return `Delete customer "${match[1]}"?\nThis action cannot be undone.`;
    }
    // 14. Toast deleted customer: "Đã xóa khách hàng \"{name}\"" -> "Deleted customer \"{name}\""
    if (/^đã xóa khách hàng\s+"(.*)"$/i.test(lowerText)) {
      const match = cleanText.match(/^đã xóa khách hàng\s+"(.*)"$/i);
      return `Deleted customer "${match[1]}"`;
    }
    // 15. Translate currency suffix: "X Tr ₫" -> "X M ₫", "X Tỷ ₫" -> "X B ₫"
    if (currentLang === 'en') {
      if (/^[\d,.]+\s*tr\s*₫$/i.test(lowerText)) {
        return cleanText.replace(/tr\s*₫/i, 'M ₫');
      }
      if (/^[\d,.]+\s*tỷ\s*₫$/i.test(lowerText)) {
        return cleanText.replace(/tỷ\s*₫/i, 'B ₫');
      }
    }
    // 16. Dynamic "Cập nhật: X" -> "Updated: X"
    if (/^cập nhật:\s*(.*?)$/i.test(lowerText)) {
      const match = cleanText.match(/^cập nhật:\s*(.*?)$/i);
      return `Updated: ${match[1]}`;
    }
    // 17. Dynamic greetings
    if (/^(chào buổi sáng|chào buổi chiều|chào buổi tối),\s*(.*?)\s*👋$/i.test(lowerText)) {
      const match = cleanText.match(/^(chào buổi sáng|chào buổi chiều|chào buổi tối),\s*(.*?)\s*👋$/i);
      const greeting = match[1].toLowerCase();
      let engGreeting = 'Hello';
      if (greeting.includes('sáng')) engGreeting = 'Good morning';
      else if (greeting.includes('chiều')) engGreeting = 'Good afternoon';
      else if (greeting.includes('tối')) engGreeting = 'Good evening';
      return `${engGreeting}, ${match[2]} 👋`;
    }
    // 18. Collision resolution for "Quản lý" (Dashboard/Management vs Manager position)
    if (lowerText === 'quản lý') {
      const isClientPage = !location.pathname.includes('employees.html') && 
                           !location.pathname.includes('schedules.html') && 
                           !location.pathname.includes('bookings.html') &&
                           !location.pathname.includes('dashboard.html') &&
                           !location.pathname.includes('customers.html') &&
                           !location.pathname.includes('pets.html') &&
                           !location.pathname.includes('products.html') &&
                           !location.pathname.includes('orders.html') &&
                           !location.pathname.includes('services.html') &&
                           !location.pathname.includes('payments.html');
      return isClientPage ? 'Dashboard' : 'Manager';
    }
    // 19. Confirm delete booking: "Xác nhận xóa lịch hẹn #LHxxx?" -> "Confirm deleting booking #LHxxx?"
    if (/^xác nhận xóa lịch hẹn\s*(#lh\d+)\??$/i.test(lowerText)) {
      const match = cleanText.match(/^xác nhận xóa lịch hẹn\s*(#lh\d+)\??$/i);
      return `Confirm deleting booking ${match[1]}?`;
    }
    // 20. Confirm delete pet: "Xóa thú cưng \"name\"? Thao tác này không thể hoàn tác." -> "Delete pet \"name\"?\nThis action cannot be undone."
    if (/^xóa thú cưng\s+"(.*)"\?\s*thao tác này không thể hoàn tác\.$/i.test(lowerText)) {
      const match = cleanText.match(/^xóa thú cưng\s+"(.*)"\?\s*thao tác này không thể hoàn tác\.$/i);
      return `Delete pet "${match[1]}"?\nThis action cannot be undone.`;
    }
    // 21. Toast deleted pet: "Đã xóa thú cưng \"name\"" -> "Deleted pet \"name\""
    if (/^đã xóa thú cưng\s+"(.*)"$/i.test(lowerText)) {
      const match = cleanText.match(/^đã xóa thú cưng\s+"(.*)"$/i);
      return `Deleted pet "${match[1]}"`;
    }
    // 22. "⚠️ Chỉ còn X Y trong kho!" -> "⚠️ Only X Y left in stock!"
    if (/^⚠️\s*chỉ còn\s+(\d+)\s+(.*?)\s+trong kho!$/i.test(lowerText)) {
      const match = cleanText.match(/^⚠️\s*chỉ còn\s+(\d+)\s+(.*?)\s+trong kho!$/i);
      return `⚠️ Only ${match[1]} ${match[2]} left in stock!`;
    }
    // 23. "⚠️ \"X\" chỉ còn Y Z!" -> "⚠️ \"X\" only has Y Z left!"
    if (/^⚠️\s*"(.*?)"\s*chỉ còn\s+(\d+)\s+(.*?)!$/i.test(lowerText)) {
      const match = cleanText.match(/^⚠️\s*"(.*?)"\s*chỉ còn\s+(\d+)\s+(.*?)!$/i);
      return `⚠️ "${match[1]}" only has ${match[2]} ${match[3]} left!`;
    }
    // 24. "Vai trò: X" -> "Role: X"
    if (/^vai trò:\s*(.*)$/i.test(lowerText)) {
      const match = cleanText.match(/^vai trò:\s*(.*)$/i);
      return `Role: ${match[1]}`;
    }

    // 25. "X phút" -> "X mins" (dynamic duration translation)
    if (/\b\d+\s*phút\b/i.test(lowerText)) {
      return cleanText.replace(/phút/gi, 'mins');
    }

    // 26. Collision resolution for "cái" (Female gender vs Product unit "item")
    if (lowerText === 'cái') {
      const isPetPage = location.pathname.includes('pets.html') || 
                        location.pathname.includes('customers.html') ||
                        location.pathname.includes('bookings.html');
      return isPetPage ? 'Female' : 'item';
    }

    // 27. "Còn hàng (X)" -> "In stock (X)"
    if (/^còn hàng\s*\(\d+\)$/i.test(lowerText)) {
      const match = cleanText.match(/^còn hàng\s*\((\d+)\)$/i);
      return `In stock (${match[1]})`;
    }

    // 28. "Sắp hết (X)" -> "Low stock (X)"
    if (/^sắp hết\s*\(\d+\)$/i.test(lowerText)) {
      const match = cleanText.match(/^sắp hết\s*\((\d+)\)$/i);
      return `Low stock (${match[1]})`;
    }

    // 29. "Thêm vào giỏ hàng — X" -> "Add to cart — X"
    if (/^thêm vào giỏ hàng\s*[-—]\s*(.*)$/i.test(lowerText)) {
      const match = cleanText.match(/^thêm vào giỏ hàng\s*[-—]\s*(.*)$/i);
      return `Add to cart — ${match[1]}`;
    }

    const dict = translations[currentLang];
    
    if (dict && dict[lowerText]) {
      const translated = dict[lowerText];
      
      // 1. Nếu văn bản gốc VIẾT HOA HẾT -> Dịch cũng VIẾT HOA HẾT
      if (cleanText === cleanText.toUpperCase() && cleanText !== cleanText.toLowerCase()) {
        return translated.toUpperCase();
      }
      
      // 2. Nếu văn bản gốc viết hoa các chữ cái đầu (như "Trang Chủ") -> Dịch cũng Title Case ("Home")
      if (isTitleCase(cleanText) && cleanText.length > 2) {
        return toTitleCase(translated);
      }
      
      // 3. Ngược lại giữ nguyên định dạng bản dịch
      return translated;
    }
    return text;
  }

  function translateNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.nodeValue.trim();
      if (text) {
        const translated = translateText(text);
        if (translated !== text) {
          node.nodeValue = node.nodeValue.replace(text, translated);
        }
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // Dịch placeholder của input
      if (node.hasAttribute('placeholder')) {
        const ph = node.getAttribute('placeholder').trim();
        const translated = translateText(ph);
        if (translated !== ph) {
          node.setAttribute('placeholder', translated);
        }
      }
      
      // Dịch thuộc tính value của button/submit input
      if (node.tagName === 'INPUT' && (node.type === 'button' || node.type === 'submit')) {
        const val = node.value.trim();
        const translated = translateText(val);
        if (translated !== val) {
          node.value = translated;
        }
      }

      node.childNodes.forEach(translateNode);
    }
  }

  function translatePage() {
    if (currentLang === 'vi') return;
    
    // Dịch tiêu đề trang
    const title = document.title.trim();
    const translatedTitle = translateText(title);
    if (translatedTitle !== title) {
      document.title = translatedTitle;
    } else {
      const parts = title.split(' - ');
      const translatedParts = parts.map(p => translateText(p));
      document.title = translatedParts.join(' - ');
    }

    // Dịch toàn bộ nội dung body
    translateNode(document.body);
  }

  function injectLanguageSelector() {
    // Xóa bộ chuyển cũ nếu tồn tại
    const oldContainer = document.getElementById('i18n-selector-container');
    if (oldContainer) oldContainer.remove();
    const oldFlagContainer = document.getElementById('i18n-flag-container');
    if (oldFlagContainer) oldFlagContainer.remove();
    const oldMobileFlagContainer = document.getElementById('i18n-flag-container-mobile');
    if (oldMobileFlagContainer) oldMobileFlagContainer.remove();

    // Xác định xem có phải trang Admin Dashboard hay trang khách hàng để chọn màu nền phù hợp
    const isAdmin = !!(document.getElementById('dash-username') || document.getElementById('dash-avatar') || document.querySelector('aside') || document.querySelector('header div.rounded-full'));

    // Tạo container capsule chứa cờ và chữ viết tắt ngôn ngữ
    const flagContainer = document.createElement('div');
    flagContainer.id = 'i18n-flag-container';
    flagContainer.style.cssText = `
      display: inline-flex;
      background: ${isAdmin ? '#f1f5f9' : '#f0edec'};
      border: 1px solid ${isAdmin ? '#cbd5e1' : 'rgba(212, 175, 55, 0.25)'};
      border-radius: 20px;
      padding: 2px;
      gap: 2px;
      align-items: center;
      vertical-align: middle;
      margin-left: 12px;
      margin-right: 4px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    `;

    const createFlagBtn = (lang, flagCode, label) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.style.cssText = `
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 3px 8px;
        border-radius: 16px;
        font-size: 11px;
        font-weight: 700;
        font-family: 'Inter', sans-serif;
        cursor: pointer;
        border: none;
        background: transparent;
        color: ${isAdmin ? '#475569' : '#735c00'};
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        outline: none;
        box-sizing: border-box;
      `;
      
      const img = document.createElement('img');
      img.src = `https://flagcdn.com/w40/${flagCode}.png`;
      img.alt = lang;
      img.style.cssText = 'width: 14px; height: 9px; object-fit: cover; border-radius: 1px; box-shadow: 0 0 1px rgba(0,0,0,0.25);';
      
      btn.appendChild(img);
      
      const textSpan = document.createElement('span');
      textSpan.textContent = label;
      btn.appendChild(textSpan);

      if (currentLang === lang) {
        btn.style.background = '#d4af37'; // Màu vàng sang trọng
        btn.style.color = '#ffffff';
        btn.style.boxShadow = '0 2px 6px rgba(212, 175, 55, 0.3)';
      } else {
        btn.style.opacity = '0.65';
        btn.onmouseover = () => {
          btn.style.opacity = '1';
          btn.style.background = isAdmin ? 'rgba(0,0,0,0.08)' : 'rgba(212, 175, 55, 0.1)';
        };
        btn.onmouseout = () => {
          btn.style.opacity = '0.65';
          btn.style.background = 'transparent';
        };
      }

      btn.addEventListener('click', () => {
        if (currentLang !== lang) {
          localStorage.setItem('lang', lang);
          location.reload();
        }
      });

      return btn;
    };

    const btnVi = createFlagBtn('vi', 'vn', 'VI');
    const btnEn = createFlagBtn('en', 'gb', 'EN');

    flagContainer.appendChild(btnVi);
    flagContainer.appendChild(btnEn);

    // Tìm vị trí chèn cờ trên header
    const loginBtn = document.getElementById('btn-login');
    const avatarWrapper = document.getElementById('avatar-wrapper');
    const target = loginBtn || avatarWrapper;

    const dashUser = document.getElementById('dash-username') || document.getElementById('dash-avatar');
    const mobileToggle = document.getElementById('mobile-toggle');
    let headerAvatar = null;
    const candidates = document.querySelectorAll('header .rounded-full, header div.rounded-full');
    for (let i = candidates.length - 1; i >= 0; i--) {
      const el = candidates[i];
      if (el.tagName !== 'INPUT' && !el.id.includes('search') && !el.id.includes('Search') && !el.className.includes('search')) {
        headerAvatar = el;
        break;
      }
    }

    if (mobileToggle && mobileToggle.parentNode) {
      mobileToggle.parentNode.insertBefore(flagContainer, mobileToggle);
    } else if (target && target.parentNode) {
      target.parentNode.insertBefore(flagContainer, target.nextSibling);
    } else if (dashUser && dashUser.parentNode) {
      const flexWrapper = dashUser.closest('.flex.items-center.gap-2') || dashUser.parentNode;
      if (flexWrapper.parentNode) {
        flexWrapper.parentNode.insertBefore(flagContainer, flexWrapper);
      } else {
        flexWrapper.appendChild(flagContainer);
      }
    } else if (headerAvatar && headerAvatar.parentNode) {
      // Chèn cờ trước avatar ở header để tự động giàn hàng ngang đẹp mắt
      let targetElement = headerAvatar;
      const parent = headerAvatar.parentNode;
      if (parent && parent.tagName !== 'HEADER' && (parent.classList.contains('rounded-full') || parent.classList.contains('bg-surface-container-low'))) {
        targetElement = parent;
      }
      targetElement.parentNode.insertBefore(flagContainer, targetElement);
    } else {
      // Dự phòng cho các trang không có menu chuẩn (login, register)
      flagContainer.style.cssText = 'position: absolute; top: 20px; right: 20px; z-index: 10000; display: inline-flex; align-items: center; gap: 4px; background: rgba(255,255,255,0.95); padding: 2px; border-radius: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #e2e8f0;';
      document.body.appendChild(flagContainer);
    }

    // Chèn vào Mobile Menu nếu có
    const loginBtnMobile = document.getElementById('btn-login-mobile');
    if (loginBtnMobile && loginBtnMobile.parentNode) {
      const mobileFlagContainer = flagContainer.cloneNode(true);
      mobileFlagContainer.id = 'i18n-flag-container-mobile'; // Set unique ID
      const clonedBtns = mobileFlagContainer.querySelectorAll('button');
      if (clonedBtns.length === 2) {
        clonedBtns[0].addEventListener('click', () => {
          if (currentLang !== 'vi') { localStorage.setItem('lang', 'vi'); location.reload(); }
        });
        clonedBtns[1].addEventListener('click', () => {
          if (currentLang !== 'en') { localStorage.setItem('lang', 'en'); location.reload(); }
        });
        
        mobileFlagContainer.style.marginLeft = '16px';
        mobileFlagContainer.style.display = 'inline-flex';

        const token = localStorage.getItem('token');
        const userData = JSON.parse(localStorage.getItem('user') || 'null');
        mobileFlagContainer.style.marginTop = token && userData ? '12px' : '0px';

        loginBtnMobile.parentNode.insertBefore(mobileFlagContainer, loginBtnMobile.nextSibling);
      }
    }
  }

  function renderMobileUserMenu() {
    // 1. Inject responsive CSS to hide desktop buttons and show mobile drawer properly
    const styleId = 'mobile-responsive-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @media (max-width: 767px) {
          #btn-login,
          #avatar-wrapper,
          #i18n-flag-container {
            display: none !important;
          }
        }
      `;
      document.head.appendChild(style);
    }

    const mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu) return;

    // Remove old mobile user card if any
    const oldCard = document.getElementById('mobile-user-wrapper');
    if (oldCard) oldCard.remove();

    const token = localStorage.getItem('token');
    const userData = JSON.parse(localStorage.getItem('user') || 'null');
    const loginBtnMobile = document.getElementById('btn-login-mobile');

    if (token && userData) {
      // Hide mobile login button
      if (loginBtnMobile) loginBtnMobile.style.display = 'none';

      const name = userData.fullName || userData.username || userData.name || 'User';
      const avatarLetter = name.charAt(0).toUpperCase();
      const role = userData.role || '';
      const STAFF_ROLES = ['Admin', 'Manager', 'Employee'];
      const isStaff = STAFF_ROLES.includes(role);

      // Determine texts to use (English or Vietnamese)
      const loggedInAsText = currentLang === 'en' ? 'Logged in as' : 'Đã đăng nhập với';
      const roleText = role ? (currentLang === 'en' ? 'Role: ' + role : 'Vai trò: ' + role) : '';
      const adminPortalText = currentLang === 'en' ? 'Store Manager' : 'Quản lý cửa hàng';
      const settingsText = currentLang === 'en' ? 'Settings' : 'Cài đặt';
      const logoutText = currentLang === 'en' ? 'Logout' : 'Đăng xuất';

      // Create mobile user card element
      const userCard = document.createElement('div');
      userCard.id = 'mobile-user-wrapper';
      userCard.className = 'mt-4 p-4 border border-outline-variant/30 rounded-2xl bg-surface-container-low/50 space-y-3';
      userCard.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-lg ring-2 ring-primary/20">
            ${avatarLetter}
          </div>
          <div class="min-w-0 flex-1">
            <p class="text-xs text-on-surface-variant font-medium">${loggedInAsText}</p>
            <h4 class="text-sm font-bold text-on-surface truncate">${name}</h4>
            <p class="text-xs text-primary font-semibold mt-0.5">${roleText}</p>
          </div>
        </div>
        <div class="border-t border-outline-variant/30 pt-2 flex flex-col gap-1.5">
          ${isStaff ? `
          <a href="dashboard.html" class="flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm font-semibold text-secondary hover:bg-primary/5 transition-colors">
            <span class="material-symbols-outlined text-[18px]">storefront</span> ${adminPortalText}
          </a>
          ` : ''}
          <a href="#" class="flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm text-on-surface hover:bg-surface-container-low transition-colors">
            <span class="material-symbols-outlined text-[18px] text-on-surface-variant">settings</span> ${settingsText}
          </a>
          <button id="btn-logout-mobile" class="w-full flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm text-error font-medium hover:bg-error-container/30 transition-colors text-left">
            <span class="material-symbols-outlined text-[18px]">logout</span> ${logoutText}
          </button>
        </div>
      `;

      if (loginBtnMobile && loginBtnMobile.parentNode) {
        loginBtnMobile.parentNode.insertBefore(userCard, loginBtnMobile.nextSibling);
      } else {
        const submenuContainer = mobileMenu.querySelector('.py-4.space-y-1');
        if (submenuContainer) {
          submenuContainer.appendChild(userCard);
        }
      }

      // Add event listener to mobile logout button
      const logoutBtn = document.getElementById('btn-logout-mobile');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          window.location.href = 'login.html';
        });
      }
    } else {
      // If not logged in, make sure login button is visible
      if (loginBtnMobile) loginBtnMobile.style.display = 'inline-flex';
    }
  }

  function init() {
    injectLanguageSelector();
    renderMobileUserMenu();
    if (currentLang !== 'vi') {
      translatePage();
      
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            translateNode(node);
          });
        });
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window._t = translateText;
})();
