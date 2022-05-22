import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, StyleSheet, ToastAndroid } from 'react-native'
import Blog from './Blog'
import Octicons from 'react-native-vector-icons/Octicons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect } from 'react'
import AddBlog from './AddBlogScreen'

let index = [];
const Stack = createNativeStackNavigator();

export default function BlogScreen(props) {
  const isNight = props.isNight;
  const root = "api.pphui8.me";
  const [blogs, setBlogs] = useState([]);
  // 获取列表
  const getIndex = () => {
    fetch(`https://` + root + `/index`, {
      method: `GET`,
      mode: `cors`
    })
      .then(response => response.json())
      .then(res => setBlogs(eval("(" + res.index + ")")))
      .catch(_err => {
        ToastAndroid.show("网络错误", ToastAndroid.SHORT);
      });
  }

  useEffect(() => {
    getIndex();
  }, []);

  const upate = () => {
    for(let blog of blogs) {
      let is_f = false;
      for(let i = 0; i < index.length; ++i) {
        if(index[i].id === blog.id) {
          is_f = true;
          break;
        }
      }
      if(!is_f) {
        index.push(blog);
      }
    }
    index.sort((a, b) => {
      return b.id - a.id
    })
  }

  return (
  <Stack.Navigator initialRouteName="home">
    <Stack.Screen name="SettingScreen" options={{
      headerShown: false,
    }}>
      {({navigation}) => {
        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerText}>主页</Text>
            </View>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
              <View style={styles.addBlogContainer}>
                <View style={styles.addBlogIcon}>
                  <Octicons name='diff-added' color='#000' size={40} />
                </View>
                <View style={styles.addBlogHint} >
                  <Text style={styles.addBlogHintText} onPress={() => {
                    navigation.navigate('AddBlog')
                  }}>添加一条Blog</Text>
                </View>
              </View>
              {
                upate()
              }
              {
                index.map((elem) => {
                  return <Blog key={elem.id} title={elem.name} desc={elem.descript} tag={elem.tag}></Blog>
                })
              }
            </ScrollView>
          </SafeAreaView>
        )
      }}
    </Stack.Screen>
    <Stack.Screen name="AddBlog" >
      {()=> <AddBlog />}
    </Stack.Screen>
  </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
  },
  header: {
    height: 50,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 20,
    lineHeight: 50,
    marginLeft: 16,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  addBlogContainer: {
    backgroundColor: '#fff',
    height: 65,
    overflow: 'hidden',
    marginVertical: 8,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderColor: '#000',
    borderWidth: 1,
    flexDirection: 'row',
  },
  addBlogIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBlogHint: {
    flex: 3,
  },
  addBlogHintText: {
    fontSize: 16,
    paddingTop: 20,
  }
});