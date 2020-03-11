import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import { fetchAllProducts } from "../store/actions/productAction";
import ProductCard from "../components/ProductCard";

export default function Home(props) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.allProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <SafeAreaView style={styles.safeView}>
      <View>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductCard {...props} product={item} />}
          keyExtractor={item => String(item.id)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1
  },
  scrollView: {
    flex: 1
  }
});
