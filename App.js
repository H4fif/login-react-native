import React, { useState } from 'react';
import { View, Image, Text, StatusBar, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#dbe4f3' }}>
      <StatusBar backgroundColor={'#dbe4f3'} barStyle="light-content" />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('./src/images/insia.png')}
          style={{ height: 100, width: 100 }}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}>
          Code<Text style={{ color: '#2396f2' }}>insia</Text>
        </Text>

        <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Login</Text>
      </View>

      <Icon name="envelope" size={30} color="#900" />
      <TextInput
        defaultValue={form?.email}
        placeholder="Email"
        style={{
          backgroundColor: '#fff',
          marginHorizontal: 20,
          borderRadius: 15,
        }}
      />
    </View>
  );
};

export default App;
