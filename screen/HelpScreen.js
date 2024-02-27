import { Text, TouchableOpacity, ScrollView, View } from "react-native";
import { useState } from "react";
import { useTheme } from "../store/context/ThemeContext";

function HelpScreen() {
  const { colors } = useTheme();

  const [selectedQuestion, setSelectedQuestion] = useState([]);

  const faqData = [
    {
      question: "Phân loại phim là gì?",
      answer: `Căn cứ Luật Điện ảnh của Bộ trưởng Bộ Văn Hóa, Thể thao, Du lịch ngày 15/06/2022. PEEKABOO thông báo tiêu chí phân loại phim theo lứa tuổi, như sau:
        o P: Phim được phép phổ biến đến người xem ở mọi độ tuổi.
        o K: Phim được phổ biến đến người xem dưới 13 tuổi và có người bảo hộ đi kèm.
        o C13 (T13): Phim được phổ biến đến người xem từ đủ 13 tuổi trở lên (13+).
        o C16 (T16): Phim được phổ biến đến người xem từ đủ 16 tuổi trở lên (16+).
        o C18 (T18): Phim được phổ biến đến người xem từ đủ 18 tuổi trở lên (18+).
        o C: Phim không được phép phổ biến.
        - Khán giả khi xem phim thuộc các phân loại trên vui lòng mang theo giấy tờ tùy thân có ảnh hoặc hình ảnh của giấy tờ tùy thân có ảnh nhận diện và ngày tháng năm sinh để đảm bảo việc tuân thủ theo quy định.
        o C13 (T13): Giấy khai sinh, thẻ học sinh, thẻ bảo hiểm, thẻ thư viện, Hộ chiếu,… còn hiệu lực.
        o C16 (T16): CCCD, Thẻ học sinh, Hộ chiếu, Thẻ thư viện,… còn hiệu lực.
        o C18 (T18): CCCD, Thẻ học sinh sinh viên, Bằng lái xe, Hộ chiếu,… còn hiệu lực.
        - Khách hàng vui lòng chứng thực được độ tuổi phù hợp với phim được phân loại như trên. PEEKABOO có quyền từ chối việc bán vé hoặc vào phòng chiếu nếu khách hàng không tuân thủ đúng theo quy định.`,
    },
    {
      question: "Suất chiếu đặc biệt là gì?",
      answer: `Suất Chiếu Đặc Biệt là những suất chiếu được ra rạp trước ngày công chiếu chính thức`,
    },
    {
      question: "Khởi chiếu sớm là gì?",
      answer:
        "Khởi Chiếu Sớm là bộ phim được chính thức ra rạp trước ngày khởi chiếu đã định",
    },

    {
      question: "Làm cách nào để mua vé trực tuyến ?",
      answer: `Để mua vé trực tuyến, bạn cần có tài khoản thành viên PEEKABOO thanh toán điện tử nhanh và tiện lơi chỉ có duy nhất trên ứng dụng. Xin lưu ý trước 30 phút trước suất chiếu chỉ mở cho khách hàng mua vé tại quầy.

        Cách thức mua vé trực tuyến như sau:
        
        - Bước 1: Đăng nhập với tài khoản PEEKABOO tại app PEEKABOO Cinemas.
        
        - Bước 2: Tùy chọn phim, suất chiếu, số lượng ghế.
        
        - Bước 3: Xác nhận đồng ý thanh toán.
        
        - Bước 4: Sau khi hoàn tất thanh toán tại cổng Hóa đơn, màn hình cuối cùng sẽ hiện lên thông tin mã đặt vé, đồng thời bạn cũng nhận được xác nhận đặt vé thành công.`,
    },
    {
      question: "Làm sao để lấy vé sau khi đặt vé thành công ?",
      answer: `Sau khi đặt vé thành công, PEEKABOO sẽ gửi mã đặt vé về mục “VÉ CỦA TÔI” ở nút điều hướng thứ 3 dưới ứng dụng. Bạn xuất trình mã đặt vé này cho nhân viên tại rạp để được in vé và vào phòng chiếu.

        Hướng dẫn kiểm tra lịch sử đặt vé/Lấy mã vé sau khi khách hàng thực hiện đặt vé:
        
        * Trên ứng dụng PEEKABOO:
        
        - Bước 1: Nhấp vào biểu tượng “MY TICKETS” ở nút điều hướng thứ 3 dưới màn hình ứng dụng, hoặc chọn mục “Lịch sử đơn hàng” trong User
        
        - Bước 2: Kiểm tra thông tin vé đã đặt
        
        - Bước 3: Đưa nhân viên “MÃ VÉ”
        
        `,
    },
    {
      question: "Vé đã thanh toán có thể hủy hoặc thay đổi không?",
      answer: `- Hiện tại PEEKABOO chưa ra mắt chức năng “Hoàn vé chủ động”, Nhưng khách hàng có thể hủy suất chiếu của mình đã đặt trước qua hotline: 0344533736 để được nhân viên giúp đỡ 24/24.`,
    },

    // Thêm các câu hỏi và câu trả lời khác nếu cần
  ];
  const toggleQuestion = (index) => {
    if (selectedQuestion.includes(index)) {
      setSelectedQuestion(selectedQuestion.filter((item) => item !== index));
    } else {
      setSelectedQuestion([...selectedQuestion, index]);
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView style={{ flex: 1, marginTop: 100 }}>
        {faqData.map((faqItem, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => toggleQuestion(index)}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 18, color: colors.text }}
            >
              {faqItem.question}
            </Text>
            {selectedQuestion.includes(index) && (
              <Text style={{ marginTop: 10, color: colors.text }}>
                {faqItem.answer}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default HelpScreen;
