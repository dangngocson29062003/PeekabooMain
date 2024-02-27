import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useTheme } from "../store/context/ThemeContext";

function AboutScreen() {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ color: colors.text, fontSize: 17, fontWeight: 400 }}>
          THÔNG TIN CÔNG TY{"\n\n"}
          CÔNG TY TNHH PEEKABOO VIETNAM{"\n\n"}
          Giấy CNĐKDN: 0344533736, đăng ký lần đầu ngày 20/10/2023, đăng ký thay
          đổi lần thứ 3 ngày 21/11/2023, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.
          {"\n\n"}
          HIỆN TẠI CÔNG TY PEEKABOO ĐÃ CÓ 6 CHI NHÁNH TRÊN TOÀN QUỐC.{"\n\n"}
          Địa Chỉ: {"\n"}- 8 Dường 3/2, P.12, Q.10, TPHCM.{"\n"}- 579 Chợ, Long
          Hựu Đông, Cần Đước, Long An.{"\n"}- 234 Lạc Lạc, Quy Nhơn.{"\n"}- 378
          Là Kha, Đồng Nai.{"\n"}- 429 Tô Hiến Thành, P.8, Q.10, TPHCM.{"\n"}-
          374 Phạm Hùng, Q.8, TPHCM.{"\n\n"}
          Hotline: 1900 1080.
        </Text>

        <ImageBackground
          source={require("../assets/images/bo_cong_thuong.png")}
          style={{
            width: "100%",
            height: "35%",

            marginTop: 20,
          }}
          resizeMode="contain"
        ></ImageBackground>
      </View>
    </SafeAreaView>
  );
}
export default AboutScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    marginTop: 30,
  },
});
