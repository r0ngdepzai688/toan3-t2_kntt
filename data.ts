
import { Lesson } from './types';

export const LESSONS: Lesson[] = [
  // CHỦ ĐỀ 8: CÁC SỐ ĐẾN 10 000
  {
    id: 45, topic: "Các số đến 10 000", title: "Bài 45: Số có bốn chữ số", icon: "🔢", 
    raw_html: "Học cách đọc, viết các số có 4 chữ số. Ví dụ: 3 421 đọc là Ba nghìn bốn trăm hai mươi mốt.",
    activities: [
      { id: "l45-a1", type: "tinh_toan", prompt: "Số gồm 3 nghìn, 4 trăm, 2 chục và 1 đơn vị viết là:", data: { display: "3000 + 400 + 20 + 1" }, answer: 3421, hint: "Ghép các chữ số theo thứ tự hàng." },
      { id: "l45-a2", type: "toan_loi_van", prompt: "Số 8 640 đọc là Tám nghìn sáu trăm ... mươi?", data: {}, answer: "bốn", hint: "Chữ số 4 ở hàng chục đọc là bốn mươi." },
      { id: "l45-a3", type: "so_do_doan_thang", prompt: "Điền số tiếp theo vào dãy: 2 967, 2 968, 2 969, ...", data: { sequence: [2967, 2968, 2969, null] }, answer: 2970, hint: "Mỗi số cách nhau 1 đơn vị." }
    ]
  },
  {
    id: 46, topic: "Các số đến 10 000", title: "Bài 46: So sánh số trong phạm vi 10 000", icon: "⚖️",
    raw_html: "So sánh từ hàng nghìn, đến hàng trăm, hàng chục và hàng đơn vị.",
    activities: [
      { id: "l46-a1", type: "tinh_toan", prompt: "Chọn dấu thích hợp: 856 ... 7 560", data: { display: "856 [?] 7560" }, answer: "<", hint: "Số có 3 chữ số luôn nhỏ hơn số có 4 chữ số." },
      { id: "l46-a2", type: "toan_loi_van", prompt: "Đỉnh Phan-xi-păng cao 3 143 m, đỉnh Tây Côn Lĩnh cao 2 427 m. Đỉnh nào cao hơn?", data: {}, answer: "Phan-xi-păng", hint: "So sánh 3 143 và 2 427." }
    ]
  },
  {
    id: 47, topic: "Các số đến 10 000", title: "Bài 47: Chữ số La Mã", icon: "🏛️", 
    raw_html: "I=1, V=5, X=10. Các số thường dùng: I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII...",
    activities: [
      { id: "l47-a1", type: "tinh_toan", prompt: "Số 13 trong hệ La Mã viết là:", data: { display: "13 = ?" }, answer: "XIII", hint: "X là 10, III là 3." },
      { id: "l47-a2", type: "tinh_toan", prompt: "Số IX tương ứng với số nào?", data: {}, answer: 9, hint: "I đứng trước X (10) nghĩa là 10 - 1 = 9." },
      { id: "l47-a3", type: "toan_loi_van", prompt: "Đồng hồ chỉ mấy giờ nếu kim ngắn chỉ số IX, kim dài chỉ số XII?", data: {}, answer: 9, hint: "Số IX là 9, XII là 12." }
    ]
  },
  {
    id: 48, topic: "Các số đến 10 000", title: "Bài 48: Làm tròn số", icon: "🎯",
    raw_html: "Làm tròn đến hàng chục: Nếu hàng đơn vị >= 5 thì làm tròn lên. Làm tròn đến hàng trăm: Nếu hàng chục >= 5 thì làm tròn lên.",
    activities: [
      { id: "l48-a1", type: "tinh_toan", prompt: "Làm tròn số 1 726 đến hàng chục:", data: {}, answer: 1730, hint: "Hàng đơn vị là 6 > 5 nên làm tròn lên." },
      { id: "l48-a2", type: "tinh_toan", prompt: "Làm tròn số 3 254 đến hàng trăm:", data: {}, answer: 3300, hint: "Hàng chục là 5 nên làm tròn lên." }
    ]
  },
  // CHỦ ĐỀ 9: CHU VI, DIỆN TÍCH
  {
    id: 50, topic: "Chu vi, Diện tích hình phẳng", title: "Bài 50: Chu vi hình tam giác, tứ giác", icon: "📐", 
    raw_html: "Chu vi là tổng độ dài các cạnh của hình đó.",
    activities: [
      { id: "l50-a1", type: "tinh_toan", prompt: "Tính chu vi tam giác có các cạnh: 7cm, 10cm, 14cm.", data: { display: "7 + 10 + 14 = ?" }, answer: 31, hint: "Cộng tất cả các cạnh lại." },
      { id: "l50-a2", type: "hinh_hoc_truc_quan", prompt: "Tính chu vi hình chữ nhật có dài 5cm, rộng 3cm.", data: { shape: "rectangle", w: 5, h: 3 }, answer: 16, hint: "(Dài + Rộng) x 2" }
    ]
  },
  {
    id: 51, topic: "Chu vi, Diện tích hình phẳng", title: "Bài 51: Diện tích hình phẳng. Xăng-ti-mét vuông", icon: "🟩", 
    raw_html: "Xăng-ti-mét vuông là diện tích của hình vuông có cạnh dài 1 cm. Viết tắt là cm².",
    activities: [
      { id: "l51-a1", type: "tinh_toan", prompt: "Một trăm xăng-ti-mét vuông viết là:", data: {}, answer: "100 cm2", hint: "Số 100 đi kèm đơn vị cm2." },
      { id: "l51-a2", type: "toan_loi_van", prompt: "Hình A gồm 6 ô vuông 1cm2. Diện tích hình A là bao nhiêu cm2?", data: {}, answer: 6, hint: "Mỗi ô là 1cm2, 6 ô là 6cm2." }
    ]
  },
  {
    id: 52, topic: "Chu vi, Diện tích hình phẳng", title: "Bài 52: Diện tích hình chữ nhật, hình vuông", icon: "🖼️",
    raw_html: "Diện tích HCN = Dài x Rộng. Diện tích Hình vuông = Cạnh x Cạnh.",
    activities: [
      { id: "l52-a1", type: "tinh_toan", prompt: "Tính diện tích HCN có dài 6cm, rộng 3cm.", data: { display: "6 x 3 = ?" }, answer: 18, hint: "Lấy chiều dài nhân chiều rộng." },
      { id: "l52-a2", type: "tinh_toan", prompt: "Tính diện tích hình vuông có cạnh 5cm.", data: { display: "5 x 5 = ?" }, answer: 25, hint: "Lấy độ dài cạnh nhân với chính nó." }
    ]
  },
  // CHỦ ĐỀ 10: PHÉP TÍNH TRONG PHẠM VI 10 000
  {
    id: 54, topic: "Cộng, trừ, nhân, chia (10 000)", title: "Bài 54: Phép cộng phạm vi 10 000", icon: "➕",
    raw_html: "Đặt tính rồi tính, cộng từ phải sang trái.",
    activities: [
      { id: "l54-a1", type: "tinh_toan", prompt: "Tính: 2 729 + 4 827", data: { n1: 2729, n2: 4827, symbol: "+" }, answer: 7556, hint: "Cộng hàng đơn vị: 9+7=16 viết 6 nhớ 1..." }
    ]
  },
  {
    id: 56, topic: "Cộng, trừ, nhân, chia (10 000)", title: "Bài 56: Nhân số có bốn chữ số với số có một chữ số", icon: "✖️",
    raw_html: "Thực hiện nhân từ hàng đơn vị sang trái.",
    activities: [
      { id: "l56-a1", type: "tinh_toan", prompt: "Tính: 1 034 x 2", data: { n1: 1034, n2: 2, symbol: "x" }, answer: 2068, hint: "2 x 4 = 8, 2 x 3 = 6, 2 x 0 = 0, 2 x 1 = 2." }
    ]
  },
  {
    id: 57, topic: "Cộng, trừ, nhân, chia (10 000)", title: "Bài 57: Chia số có bốn chữ số cho số có một chữ số", icon: "➗",
    raw_html: "Thực hiện chia từ trái sang phải.",
    activities: [
      { id: "l57-a1", type: "tinh_toan", prompt: "Tính: 6 408 : 2", data: { n1: 6408, n2: 2, symbol: ":" }, answer: 3204, hint: "6 : 2 = 3, 4 : 2 = 2, 0 : 2 = 0, 8 : 2 = 4." }
    ]
  },
  // CHỦ ĐỀ 11: CÁC SỐ ĐẾN 100 000
  {
    id: 59, topic: "Các số đến 100 000", title: "Bài 59: Số có năm chữ số", icon: "💎",
    raw_html: "Mười chục nghìn gọi là một trăm nghìn (100 000).",
    activities: [
      { id: "l59-a1", type: "tinh_toan", prompt: "Số 90 056 đọc là Chín mươi nghìn không trăm ... mươi sáu?", data: {}, answer: "năm", hint: "Chữ số 5 ở hàng chục." },
      { id: "l59-a2", type: "tinh_toan", prompt: "Số liền sau của 99 999 là:", data: {}, answer: 100000, hint: "Thêm 1 đơn vị vào 99 999." }
    ]
  },
  // CHỦ ĐỀ 13: XEM ĐỒNG HỒ, TIỀN TỆ
  {
    id: 66, topic: "Đồng hồ, Tháng-Năm, Tiền VN", title: "Bài 66: Xem đồng hồ", icon: "🕒", 
    raw_html: "Học cách xem đồng hồ chính xác đến từng phút.",
    activities: [
      { id: "l66-a1", type: "toan_loi_van", prompt: "Nam học Toán lúc 8 giờ 5 phút sáng. Kim dài đang chỉ vào số mấy?", data: {}, answer: "1", hint: "Kim phút chỉ số 1 là 5 phút." },
      { id: "l66-a2", type: "toan_loi_van", prompt: "Rô-bốt học vẽ lúc 14 giờ 55 phút. Đó là mấy giờ kém mấy phút?", data: {}, answer: "3 giờ kém 5", hint: "15 giờ kém 5 phút (hay 3 giờ chiều kém 5)." }
    ]
  },
  {
    id: 68, topic: "Đồng hồ, Tháng-Năm, Tiền VN", title: "Bài 68: Tiền Việt Nam", icon: "💰", 
    raw_html: "Các loại tiền giấy và tiền polyme Việt Nam.",
    activities: [
      { id: "l68-a1", type: "tinh_toan", prompt: "2 tờ 10 000 đồng đổi được 1 tờ ... đồng?", data: {}, answer: 20000, hint: "10 000 + 10 000 = 20 000." },
      { id: "l68-a2", type: "toan_loi_van", prompt: "Mẹ mua rau hết 3 000 đồng, hành hết 2 000 đồng. Mẹ đưa 10 000 đồng. Cô bán hàng trả lại bao nhiêu?", data: {}, answer: 5000, hint: "10 000 - (3 000 + 2 000) = ?" }
    ]
  },
  // CHỦ ĐỀ 15: THỐNG KÊ, XÁC SUẤT
  {
    id: 73, topic: "Thống kê, Xác suất", title: "Bài 73: Thu thập, phân loại số liệu", icon: "📊", 
    raw_html: "Học cách đếm và ghi chép số liệu.",
    activities: [
      { id: "l73-a1", type: "toan_loi_van", prompt: "Nam ném bóng 10 lần: 7 lần trúng, 3 lần trượt. Số lần trúng nhiều hơn trượt bao nhiêu?", data: {}, answer: 4, hint: "7 - 3 = 4." }
    ]
  },
  {
    id: 74, topic: "Thống kê, Xác suất", title: "Bài 74: Khả năng xảy ra của một sự kiện", icon: "🎲",
    raw_html: "Các khái niệm: Có thể, Chắc chắn, Không thể.",
    activities: [
      { id: "l74-a1", type: "toan_loi_van", prompt: "Trong hộp có 3 bóng đỏ và 1 bóng xanh. Lấy ra 2 bóng. Sự kiện nào là 'Chắc chắn':", data: { options: ["Lấy được 2 bóng xanh", "Lấy được ít nhất 1 bóng đỏ"] }, answer: "Lấy được ít nhất 1 bóng đỏ", hint: "Vì chỉ có 1 bóng xanh nên chắc chắn bóng còn lại phải đỏ." }
    ]
  }
];
