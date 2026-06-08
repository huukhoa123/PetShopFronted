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

      // --- Messages & Alerts ---
      "vui lòng nhập đầy đủ thông tin!": "Please fill in all information!",
      "không kết nối được server!": "Cannot connect to server!",
      "đăng xuất?": "Log out?",
      "sai tên đăng nhập hoặc mật khẩu!": "Incorrect username or password!"
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
        loginBtnMobile.parentNode.insertBefore(mobileFlagContainer, loginBtnMobile.nextSibling);
      }
    }
  }

  function init() {
    injectLanguageSelector();
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
