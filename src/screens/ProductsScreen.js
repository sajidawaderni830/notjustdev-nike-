
import { StyleSheet, Text, View ,Image, FlatList} from 'react-native';
import products from "../data/products";
const ProductsScreen = () => {
    return (
<FlatList  data={products} renderItem={({item})=> 
        (<View style={styles.itemContainer}>
          <Image source={{uri:item.image}} style={styles.image}/>
          </View>)
        } 
        numColumns={2} // Définit toujours 2 colonnes
        key={2} // Utilisez une clé statique pour éviter les changements dynamiques
        keyExtractor={(item) => item.id} // Assurez-vous que chaque élément a un id unique
       
        />
      
    );
}
const styles = StyleSheet.create({
   
    image:{
      width:"100%",aspectRatio:1
    },
    itemContainer:{
  width:"50%",
  padding:1,
    }
  });
  export default ProductsScreen;