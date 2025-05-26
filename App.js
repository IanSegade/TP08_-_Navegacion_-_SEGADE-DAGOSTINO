import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

function ScreenA1({ navigation }) {
  return (
    <View style={styles.stackA}>
      <Text style={styles.text}>Pantalla A1</Text>
      <Button title="Ir a A2" onPress={() => navigation.navigate('ScreenA2')} />
    </View>
  );
}

function ScreenA2() {
  return (
    <View style={styles.stackA}>
      <Text style={styles.text}>Pantalla A2</Text>
      <TextInput placeholder="Escribí algo" style={styles.input} />
      <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width: 50, height: 50 }} />
    </View>
  );
}

const StackA = createNativeStackNavigator();
function StackANav() {
  return (
    <StackA.Navigator>
      <StackA.Screen name="ScreenA1" component={ScreenA1} />
      <StackA.Screen name="ScreenA2" component={ScreenA2} />
    </StackA.Navigator>
  );
}

function ScreenB1({ navigation }) {
  return (
    <View style={styles.stackB}>
      <Text style={styles.text}>Pantalla B1</Text>
      <Button title="Ir a B2" onPress={() => navigation.navigate('ScreenB2')} />
    </View>
  );
}

function ScreenB2() {
  return (
    <View style={styles.stackB}>
      <Text style={styles.text}>Pantalla B2</Text>
      <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width: 50, height: 50 }} />
    </View>
  );
}

const StackB = createNativeStackNavigator();
function StackBNav() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="ScreenB1" component={ScreenB1} />
      <StackB.Screen name="ScreenB2" component={ScreenB2} />
    </StackB.Navigator>
  );
}

function ScreenC1({ navigation }) {
  const [nombre, setNombre] = React.useState('');
  const [telefono, setTelefono] = React.useState('');

  return (
    <View style={styles.stackC}>
      <Text style={styles.text}>Nombre:</Text>
      <TextInput style={styles.input} onChangeText={setNombre} value={nombre} />
      <Text style={styles.text}>Teléfono:</Text>
      <TextInput style={styles.input} onChangeText={setTelefono} value={telefono} keyboardType="phone-pad" />
      <Button title="Enviar" onPress={() => navigation.navigate('ScreenC2', { nombre, telefono })} />
    </View>
  );
}

function ScreenC2({ route }) {
  const { nombre, telefono } = route.params || {};
  return (
    <View style={styles.stackC}>
      <Text style={styles.text}>Nombre: {nombre}</Text>
      <Text style={styles.text}>Teléfono: {telefono}</Text>
    </View>
  );
}

const StackC = createNativeStackNavigator();
function StackCNav() {
  return (
    <StackC.Navigator>
      <StackC.Screen name="ScreenC1" component={ScreenC1} />
      <StackC.Screen name="ScreenC2" component={ScreenC2} />
    </StackC.Navigator>
  );
}


function ScreenD1({ navigation }) {
  return (
    <View style={styles.stackD}>
      <Text style={styles.text}>Pantalla D1</Text>
      <Button title="Ir a D2" onPress={() => navigation.navigate('ScreenD2')} />
    </View>
  );
}

function ScreenD2() {
  return (
    <View style={styles.stackD}>
      <Text style={styles.text}>Pantalla D2</Text>
      <TextInput placeholder="Otra entrada" style={styles.input} />
    </View>
  );
}

const StackD = createNativeStackNavigator();
function StackDNav() {
  return (
    <StackD.Navigator>
      <StackD.Screen name="ScreenD1" component={ScreenD1} />
      <StackD.Screen name="ScreenD2" component={ScreenD2} />
    </StackD.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            switch (route.name) {
              case 'TabA': iconName = 'home'; break;
              case 'TabB': iconName = 'search'; break;
              case 'TabC': iconName = 'person'; break;
              case 'TabD': iconName = 'settings'; break;
            }
            return <Ionicons name={iconName} size={24} color={color} />;
          },
        })}
      >
        <Tab.Screen name="TabA" component={StackANav} />
        <Tab.Screen name="TabB" component={StackBNav} />
        <Tab.Screen name="TabC" component={StackCNav} />
        <Tab.Screen name="TabD" component={StackDNav} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    width: 200,
    borderRadius: 5,
  },
  stackA: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCCCC',
  },
  stackB: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCFFCC',
  },
  stackC: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCCCFF',
  },
  stackD: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFCC',
  },
});