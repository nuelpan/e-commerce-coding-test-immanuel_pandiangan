import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import { fetchAllProducts } from "../store/actions/characterAction";
import constant from "expo-constants";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.allProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [products]);

  return (
    <SafeAreaView style={styles.safeView}>
      <View>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductCard product={item} key={String(item.id)} />
          )}
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
