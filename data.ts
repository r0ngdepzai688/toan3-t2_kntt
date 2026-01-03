
import { Lesson } from './types';

export const LESSONS: Lesson[] = [
  // CHỦ ĐỀ 8: CÁC SỐ ĐẾN 10 000
  {
    id: 45, topic: "Các số đến 10 000", title: "Bài 45: Số có bốn chữ số", icon: "🔢", 
    raw_html: "Học cách đọc, viết các số có 4 chữ số. Ví dụ: 3 421 đọc là Ba nghìn bốn trăm hai mươi mốt.",
    activities: [
      { id: "l45-a1", type: "tinh_toan", prompt: "Số gồm 3 nghìn, 4 trăm, 2 chục và 1 đơn vị viết là:", data: { display: "3000 + 400 + 20 + 1" }, answer: 3421, hint: "Ghép các chữ số theo thứ tự hàng." },
      { id: "l45-a2", type: "toan_loi_van", prompt: "Số 8 640 đọc là Tám nghìn sáu trăm ... mươi?", data: {}, answer: "bốn", hint: "Chữ số 4 ở hàng chục đọc là bốn mươi." }
    ]
  },
  {
    id: 47, topic: "Các số đến 10 000", title: "Bài 47: Chữ số La Mã", icon: "🏛️", 
    raw_html: "Làm quen với I (một), V (năm), X (mười) và các số từ 1 đến 20.",
    activities: [
      { id: "l47-a1", type: "tinh_toan", prompt: "Số 13 trong hệ La Mã viết là:", data: { display: "10 + 3" }, answer: "XIII", hint: "X là 10, III là 3." },
      { id: "l47-a2", type: "tinh_toan", prompt: "Số IX tương ứng với số nào?", data: {}, answer: 9, hint: "I đứng trước X nghĩa là 10 trừ 1." }
    ]
  },
  // CHỦ ĐỀ 9: CHU VI, DIỆN TÍCH
  {
    id: 50, topic: "Chu vi, Diện tích hình phẳng", title: "Bài 50: Chu vi hình tam giác, tứ giác", icon: "📐", 
    raw_html: "Chu vi là tổng độ dài các cạnh của hình đó.",
    activities: [
      { id: "l50-a1", type: "tinh_toan", prompt: "Tính chu vi tam giác có các cạnh: 7cm, 10cm, 14cm.", data: { display: "7 + 10 + 14 = ?" }, answer: 31, hint: "Cộng tất cả các cạnh lại." }
    ]
  },
  {
    id: 51, topic: "Chu vi, Diện tích hình phẳng", title: "Bài 51: Diện tích hình chữ nhật, vuông", icon: "🟩", 
    raw_html: "Muốn tính diện tích hình chữ nhật, ta lấy chiều dài nhân chiều rộng (cùng đơn vị đo).",
    activities: [
      { id: "l51-a1", type: "tinh_toan", prompt: "Tính diện tích hình chữ nhật dài 6cm, rộng 3cm.", data: { n1: 6, n2: 3, symbol: "x" }, answer: 18, hint: "Dài x Rộng." }
    ]
  },
  // CHỦ ĐỀ 13: XEM ĐỒNG HỒ, TIỀN TỆ
  {
    id: 66, topic: "Đồng hồ, Tháng-Năm, Tiền VN", title: "Bài 66: Xem đồng hồ chính xác", icon: "🕒", 
    raw_html: "Một giờ có 60 phút. Kim phút chỉ số 1 là 5 phút, số 2 là 10 phút...",
    activities: [
      { id: "l66-a1", type: "tinh_toan", prompt: "Kim ngắn chỉ số 3, kim dài chỉ số 1. Là mấy giờ mấy phút?", data: {}, answer: "3 giờ 5 phút", hint: "Số 1 trên đồng hồ tương ứng với 5 phút." }
    ]
  },
  {
    id: 68, topic: "Đồng hồ, Tháng-Năm, Tiền VN", title: "Bài 68: Tiền Việt Nam", icon: "💰", 
    raw_html: "Làm quen với các mệnh giá: 1000đ, 2000đ, 5000đ, 10 000đ...",
    activities: [
      { id: "l68-a1", type: "tinh_toan", prompt: "Mẹ cho Nam 1 tờ 5000đ và 2 tờ 2000đ. Nam có tất cả bao nhiêu tiền?", data: { display: "5000 + 2000 + 2000" }, answer: 9000, hint: "Cộng mệnh giá các tờ tiền lại." }
    ]
  },
  // CHỦ ĐỀ 15: THỐNG KÊ, XÁC SUẤT
  {
    id: 73, topic: "Thống kê, Xác suất", title: "Bài 73: Thu thập, phân loại số liệu", icon: "📊", 
    raw_html: "Học cách đếm và ghi chép số liệu vào bảng.",
    activities: [
      { id: "l73-a1", type: "toan_loi_van", prompt: "Nam ném bóng 10 lần, có 7 lần trúng (X) và 3 lần trượt (O). Số lần trúng là mấy?", data: { display: "X X X O X O X X X O" }, answer: 7, hint: "Đếm số ký hiệu X." }
    ]
  }
];
