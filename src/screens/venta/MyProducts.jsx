import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { Text, View } from "native-base";
import MyProductItem from "../../components/MyProductItem";
import LoadingOverlay from "../../components/LoadingOverlay";
import TextH1 from "../../components/TextH1";
import colors from "../../constants/colors";
import { getProductsSeller, deleteProduct } from "../../api/productAPI";
import { MaterialIcons } from "@expo/vector-icons";

const MyProducts = (props) => {
  const [products, setProducts] = useState("");
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(undefined);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
   //setLoading(true);
    const setterMyProducts = async () => {
      const data = await getProductsSeller();
      setProducts(data);
      console.log("paso por aca")
     // setLoading(false);
    };
    setterMyProducts();
  }, [products]);

  const deleteItem = () => {
    const deleted = deleteProduct(itemToDelete);
    setProducts(products.filter((item) => item._id !== itemToDelete));
    setIsDeleteModalVisible(false);
  };

  const onItemRemovePress = (itemId) => {
    setIsDeleteModalVisible(true);
    setItemToDelete(itemId);
  };

  const onItemEditPress = (item) => {
    props.navigation.navigate("UpdateProduct", { editItem: item });
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <LoadingOverlay visible={isLoading} />
      <FlatList
        style={styles.title}
        data={products}
        renderItem={({ item }) => (
          <MyProductItem
            item={item}
            onItemEditPress={onItemEditPress}
            onItemRemovePress={onItemRemovePress}
          />
        )}
        extraData={products}
        keyExtractor={(item) => item._id.toString()}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("AddProduct")}>
        <View style={styles.addProductContainer}>
          <Text>Agregar un nuevo producto</Text>
        </View>
      </TouchableOpacity>

      <Modal visible={isDeleteModalVisible} transparent>
        <View style={styles.modalBackground}>
          <View style={styles.modalCard}>
            <Text>¿Seguro queres eliminar este producto?</Text>
            <View style={styles.deleteActionsContainer}>
              <TouchableOpacity onPress={() => setIsDeleteModalVisible(false)}>
                <Image
                  style={styles.actionsImage}
                  source={require("../../../assets/images/caritaFeliz.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteItem()}>
                <Image
                  style={styles.actionsImage}
                  source={require("../../../assets/images/caritaTriste.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export const MyProductsNavOptions = (props) => ({
  headerTitle: "Mis Productos",
  headerStyle: {
    backgroundColor: colors.passwordInputBorder,
  },
  headerRight: () => (
    <View style={styles.headerImageContainer}>
      <Image
        style={styles.headerImage}
        source={require("../../../assets/images/caritaFelizHeader.png")}
      />
    </View>
  ),
  headerLeft: () => (
    <MaterialIcons
      style={styles.menu}
      name="menu"
      size={30}
      onPress={() => props.navigation.toggleDrawer()}
    />
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.defaultBackground,
  },
  title: {
    marginTop: 20,
  },
  addProductContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    marginHorizontal: 35,
    marginBottom: 35,
    borderRadius: 20,
    backgroundColor: colors.passwordInputBorder,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: colors.modalAuthBackground,
  },
  modalCard: {
    justifyContent: "center",
    padding: 30,
    borderRadius: 20,
    backgroundColor: colors.defaultBackground,
  },
  deleteActionsContainer: {
    marginTop: 60,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  menu: {
    marginLeft: 20,
  },
  headerImageContainer: {
    justifyContent: "center",
    marginRight: 20,
  },
  headerImage: {
    height: 40,
    width: 40,
  },
});

export default MyProducts;
