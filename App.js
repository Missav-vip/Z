import React, { useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// SplashScreen Component
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 3000); // 3 detik
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.splashContainer}>
      <Text style={styles.title}>Bitcoin Wallet</Text>
    </View>
  );
};

// HomeScreen Component
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Bitcoin Wallet</Text>
      <Button title="Go to Wallet" onPress={() => navigation.navigate('Wallet')} />
      <Button title="Transactions" onPress={() => navigation.navigate('Transactions')} />
      <Button title="Send Bitcoin" onPress={() => navigation.navigate('SendBitcoin')} />
      <Button title="Receive Bitcoin" onPress={() => navigation.navigate('ReceiveBitcoin')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Buy Coins" onPress={() => navigation.navigate('BuyCoins')} />
    </View>
  );
};

// WalletScreen Component
const WalletScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Bitcoin Balance</Text>
      <Text style={styles.balance}>0.1234 BTC</Text>
    </View>
  );
};

// TransactionsScreen Component
const TransactionsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <Text style={styles.transaction}>- 0.02 BTC - Sent</Text>
      <Text style={styles.transaction}>+ 0.05 BTC - Received</Text>
    </View>
  );
};

// SendBitcoinScreen Component
const SendBitcoinScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Bitcoin</Text>
      <TextInput style={styles.input} placeholder="Recipient Address" />
      <TextInput style={styles.input} placeholder="Amount (BTC)" keyboardType="numeric" />
      <Button title="Send" onPress={() => alert('Bitcoin sent!')} />
    </View>
  );
};

// ReceiveBitcoinScreen Component
const ReceiveBitcoinScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receive Bitcoin</Text>
      <Text style={styles.address}>Your Wallet Address: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</Text>
      <Button title="Copy Address" onPress={() => alert('Address copied!')} />
    </View>
  );
};

// ProfileScreen Component
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Text>Name: John Doe</Text>
      <Text>Email: john.doe@example.com</Text>
    </View>
  );
};

// BuyCoinsScreen Component
const BuyCoinsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buy Coins</Text>
      <TextInput style={styles.input} placeholder="Amount (USD)" keyboardType="numeric" />
      <Button title="Buy Bitcoin" onPress={() => alert('Bitcoin purchased!')} />
      <Button title="Buy Ethereum" onPress={() => alert('Ethereum purchased!')} />
      <Button title="Buy Litecoin" onPress={() => alert('Litecoin purchased!')} />
    </View>
  );
};

// App Navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="Transactions" component={TransactionsScreen} />
        <Stack.Screen name="SendBitcoin" component={SendBitcoinScreen} />
        <Stack.Screen name="ReceiveBitcoin" component={ReceiveBitcoinScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="BuyCoins" component={BuyCoinsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styles
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: '#000000',
    marginBottom: 20,
  },
  balance: {
    fontSize: 36,
    color: '#FFA500',
  },
  transaction: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 20,
    padding: 8,
    width: '80%',
  },
});

export default App;
