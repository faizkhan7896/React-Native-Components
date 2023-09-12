import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TextFormatted from './TextFormated';
import {theme} from '../utils/theme';

export default function Button({
  borderRadius,
  ButtonText,
  onPress,
  loading,
  source,
  sourceTwo,
  paddingVertical,
  marginTop,
  marginBottom,
  disabled,
}) {
  return (
    <TouchableOpacity
      style={{
        marginTop: marginTop,
        marginBottom: marginBottom,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.65,

        elevation: 6,
        borderRadius: 12,
      }}
      onPress={loading ? null : onPress}
      disabled={disabled}>
      <LinearGradient
        colors={[
          theme.colors.Linear_first,
          theme.colors.Linear_second,
          theme.colors.Linear_third,
        ]}
        start={{x: 0.3, y: 0}}
        end={{x: 0.5, y: 5}}
        style={{
          paddingVertical: paddingVertical || 15,
          alignItems: 'center',
          // paddingBottom: 30,
          borderRadius: 12,
          marginBottom: marginBottom,
        }}>
        {/* <Image
            style={{
              height: 30,
              width: 30,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
            // source={require('../assets/gif/loading.gif')}
            source={{
              uri: 'https://gifimage.net/wp-content/uploads/2018/11/transparent-loading-gif-free-1.gif',
            }}
          /> */}
        {loading ? (
          <ActivityIndicator size={'small'} style={{margin: 2}} color="#fff" />
        ) : (
          <TextFormatted
            style={{
              fontWeight: '600',
              color: theme.colors.primary,
              fontSize: 17,
            }}>
            {ButtonText}
          </TextFormatted>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

var styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontWeight: '700',
  },
});
