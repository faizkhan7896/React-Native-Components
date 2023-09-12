import {
  View,
  Text,
  Modal,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, {useState} from "react";
import {theme} from "../utils/theme";

export default function ImagePreview({source, modal, setModal}) {
  //   const [modal, setModal] = useState(true);
  const dimensions = useWindowDimensions();

//   alert(JSON.stringify(source));
  return (
    <Modal
      animationType="fade"
      visible={modal}
      onDismiss={() => {
        setModal(false);
      }}
      transparent
      style={{}}>
      <TouchableOpacity
        onPress={() => {
          setModal(false);
        }}
        activeOpacity={1}
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          backgroundColor: theme.colors.Black + "99",
          width: dimensions.width,
          height: dimensions.height,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            // backgroundColor: theme.colors.primary,
            width: dimensions.width - 60,
            height: dimensions.height / 1.7,
            alignItems: "center",
            // marginBottom: dimensions.width / 3.5,
            borderRadius: 20,
            borderColor: theme.colors.Light_Gray,
          }}>
          <Image
            style={{
              width: dimensions.width - 60,
              height: dimensions.height / 1.7,
              resizeMode: "cover",
              borderRadius: 20,
            }}
            source={source}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}
