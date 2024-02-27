import { useContext, useState } from "react";
import { View, Text, TextInput, ImageBackground } from "react-native";
import { AuthContext } from "../store/context/AuthContext";
import Button from "../components/Auth/Button";
import { updateDisplayName, updatePassword } from "../util/auth";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../store/context/ThemeContext";
function SettingUser() {
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { colors } = useTheme();
  async function Change() {
    if (displayName) {
      const response = await updateDisplayName(authCtx.token, displayName);
      authCtx.getdata(response);
    }
    if (password) {
      if (password.length > 6) {
        await updatePassword(authCtx.token, password);
      } else {
        setError("Vui lòng nhập mật khẩu mới trên 6 kí tự");
      }
    }
    navigation.goBack();
  }
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colors.background,
      }}
    >
      <View style={{ marginTop: 100 }}>
        <Text style={{ color: colors.text }}>Họ tên</Text>
        <TextInput
          style={[styles.input, { color: colors.text }]}
          placeholder={authCtx.data.displayName}
          placeholderTextColor={colors.text}
          onChangeText={(text) => setDisplayName(text)}
        />
      </View>
      <View>
        <Text style={{ color: colors.text }}>Mật khẩu mới</Text>
        <TextInput
          style={[styles.input, { color: colors.text }]}
          onChangeText={(text) => setPassword(text)}
        />
        {error ? <Text>{error}</Text> : ""}
      </View>
      <Button children={"Thay đổi"} onPress={Change} />
    </View>
  );
}
export default SettingUser;
const styles = {
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
    marginVertical: 10,
  },
};
