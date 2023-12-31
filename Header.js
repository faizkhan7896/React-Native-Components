import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {theme} from "../utils/theme";
import TextFormatted from "./TextFormated";

export default function Header({
  backimage,
  onPress,
  Headertext,
  sourcetwo,
  onPressTwo,
  backgroundColor,
  sourcethree: sourceforge,
  skippress,
  color,
  navigation,
  backonPress,
  opacity,
  tintColor,
  loading
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        backgroundColor: backgroundColor,
        paddingVertical: 13,
        alignItems: "center",
      }}>
      <TouchableOpacity
        onPress={() => {
          backonPress || navigation.goBack();
        }}>
        <Image
          style={{
            height: 40,
            width: 40,
            resizeMode: "contain",
            opacity: opacity,
          }}
          source={backimage || require("../assets/Back_arrow.png")}
          // source={backimage}
        />
      </TouchableOpacity>
      <TextFormatted
        style={{
          color: color || theme.colors.Black,
          fontSize: 15,
          fontWeight: "700",
        }}>
        {Headertext}
      </TextFormatted>

      {loading ? (
        <ActivityIndicator
          size={"small"}
          style={{paddingHorizontal: 5}}
          color={theme.colors.yellow}
        />
      ) : (
        <TouchableOpacity onPress={onPressTwo}>
          <Image
            style={{
              height: 24,
              width: 24,
              resizeMode: "contain",
              tintColor: tintColor,
              // backgroundColor: theme.colors.green,
              // paddingVertical: 15,
              // paddingHorizontal: 15,
            }}
            source={sourcetwo}
          />
        </TouchableOpacity>
      )}
      {!!sourceforge && (
        <TouchableOpacity onPress={skippress}>
          <Image
            style={{height: 80, width: 80, resizeMode: "contain"}}
            source={sourceforge}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
