import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import Title from "../../components/TextH1";
import ProductItem from "../../components/ProductItem";
import RectangleButton from "../../components/LongRectangleButton";
import LoadingOverlay from "../../components/LoadingOverlay";
import Banner from "../../components/Banner";
import colors from "../../constants/colors";
import { getProducts } from "../../api/productAPI";
import { MaterialIcons } from "@expo/vector-icons";

const HomeScreen = (props) => {
  const bannerDescription =
    "Publicita tu producto en Bolushop y obtene mayor cantidad de ventas \n \n ¡Que crezca tu negocio ya!";

  const [product1, setProduct1] = useState("");
  const [product2, setProduct2] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const setterProducts = async () => {
      setLoading(true);
      const data = await getProducts();
     setProduct1(data[7]);
      setProduct2(data[6]);

      setLoading(false);
    };
    setterProducts();
  }, []);

  return (
    <View style={styles.container}>
      <LoadingOverlay visible={isLoading} />

      <Title
        style={{ flex: 1, alignItems: "flex-start" }}
        text="Candidatos a BoluPremio del año"
      />

      <ProductItem item={product1} navigation={props.navigation} />

      <ProductItem item={product2} navigation={props.navigation} />

      <RectangleButton
        text="Ver todos los boluproductos"
        screen="ProductList"
        navigation={props.navigation}
      />

      <Banner
        title="Para vos comerciante"
        description={bannerDescription}
        navigation={props.navigation}
        screen="MyProducts"
      />
    </View>
  );
};

export const HomeNavOptions = (props) => ({
  headerTitle: "Bolushop",
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
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.defaultBackground,
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

export default HomeScreen;
