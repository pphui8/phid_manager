import { View, Text, StyleSheet, Image, Switch, StatusBar } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ServerSetting from './ServerSetting'

const Stack = createNativeStackNavigator();

export default function Settings(props) {
  const isNight = props.isNight;
  const setNight = props.setNight;

  return (
      <Stack.Navigator initialRouteName="SettingScreen">
        <Stack.Screen name="SettingScreen" options={{
          headerTitle: '设置',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: isNight ? '#fff' : '#2e2e2e',
          },
          headerTitleStyle: {
            color: isNight ? '#000' : '#fff',
          },
        }}>
          {({navigation}) => {
            return (
              <View style={styles.container}>
                <View style={styles.profileContainer}>
                  <View style={[styles.profile, {backgroundColor: isNight ? '#fff' : '#2e2e2e'}]}>
                    <Image source={{uri:'https://q1.qlogo.cn/g?b=qq&nk=1292750686&s=640'}} style={styles.profileImg}></Image>
                  </View>
                </View>
                <View style={[styles.settingsContainer, {backgroundColor: isNight ? 'silver' : '#2e2e2e'}]}>
                  <View style={[styles.settingTipContainer, {backgroundColor: isNight ? '#fff' : '#595959'}]} onTouchEnd={() => {
                    navigation.navigate('ServerSetting')
                  }} >
                    <Text style={[styles.settingTip, {color: isNight ? 'gray' : '#fff'}]}>服务器设置</Text>
                  </View>
                  <View style={[styles.isNightSettingContainer, {backgroundColor: isNight ? '#fff' : '#595959'}]}>
                    <View style={{flex: 5}}><Text style={[styles.isNightSetting, {color: isNight ? 'gray' : '#fff'}]}>夜间模式</Text></View>
                    <View style={{flex: 2}}><Switch style={styles.switch}
                      onValueChange={(value) => {
                        setNight(!value);
                        StatusBar.setBarStyle(isNight ? 'light-content' : 'dark-content', true);
                        StatusBar.setBackgroundColor(isNight ? '#2e2e2e' : '#fff', true);
                      }}
                      value={!isNight}
                      thumbColor={isNight ? '#000' : '#fff'}
                      trackColor={isNight ? '#000' : '#fff'}
                    ></Switch></View>
                  </View>
                </View>
              </View>
            )
          }}
        </Stack.Screen>
        <Stack.Screen name="ServerSetting" >
          {()=> <ServerSetting />}
        </Stack.Screen>
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  profile: {
    flex: 1,
    alignItems: 'center',
  },
  profileImg: {
    width: 80,
    height: 80,
    marginTop: 30,
    borderRadius: 50,
    resizeMode: 'stretch',
    backgroundColor: '#fff',
  },
  settingsContainer: {
    flex: 4,
  },
  settingTipContainer: {
    height: 80,
    backgroundColor: '#fff',
  },
  settingTip: {
    marginLeft: 20,
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
  },
  isNightSettingContainer: {
    height: 80,
    marginTop: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  isNightSetting: {
    marginLeft: 20,
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
  },
  switch: {
    marginTop: 30,
    marginRight: 28,
  }
});