
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, FlatList} from 'react-native';
import ProductsScreen from './src/screens/ProductsScreen'

export default function App() {
 
  return (
    <View style={styles.container}>
    <ProductsScreen/>  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:"100%",aspectRatio:1
  },
  itemContainer:{
width:"50%",
padding:1,
  }
});
