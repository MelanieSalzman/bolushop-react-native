import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import LoginModal from "../../components/LoginModal";
import ProductImageDetail from "../../components/ProductImageDetail";
import colors from "../../constants/colors";
import CostBg from "../../components/CostBg";
import { FontAwesome } from "@expo/vector-icons";
import { UserContext } from '../../context/UserProvider';

const ProductDetails = ({ route, navigation }) => {
  let user = useContext(UserContext)
  console.log(user.signed)
  const [product, setProduct] = useState(route.params?.Item);
  const [showModal, setShowModal] = useState(false);

  const [id, setId] = useState(product._id);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [details, setDetails] = useState(product.details);
  const [web, setWeb] = useState(product.web);

  const [token, setToken] = useState("");

  const goToUrl = () => {
    Linking.openURL(web);
  }


  const onLoginPress = () => {
    setShowModal(false);
  };

  const onRegisterPress = () => {
    setShowModal(false);
  };

  const onForgotPassword = () => {
    setShowModal(false);
    props.navigation.navigate("ForgotPassword");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <ProductImageDetail />
          <CostBg containerStyle={styles.priceContainer} text={price} />
        </View>
        <View style={styles.productNameContainer}>
          <Text style={styles.productNameText}>{product.name}</Text>
        </View>
        <View style={styles.productDescriptionContainer}>
          <Text style={styles.productDescriptionText}>
            {product.description}
          </Text>
        </View>
        <View style={styles.productLocationContainer}>
          <FontAwesome name="map-marker" size={24} color="black" />
          <Text style={styles.productLocationText}>
            Capital Federal, Buenos Aires
          </Text>
        </View>
        <View style={styles.buyButtonPositionConainer}>
          <TouchableOpacity
            style={styles.buyButtonContainer}
            onPress={() => goToUrl()}
          >
            <Text style={styles.buyButtonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.bolupremioContainer}>
        <View style={styles.imageCactusContainer}>
          <Image
            style={styles.cactusImage}
            source={require("../../../assets/images/cactus.png")}
          />
        </View>
        <View style={styles.bolupremioTextsContainer}>
          <Text style={styles.bolupremioTexts}>
            ¿Se merece el BoluPremio del año?
          </Text>
          <View style={styles.bolupremioActionsContainer}>
            <TouchableOpacity style={styles.bolupremioActionLeftContainer}>
              <Image
                style={styles.bolupermioActionImage}
                source={require("../../../assets/images/caritaFelizHeader.png")}
              />
              <Text
                style={[styles.bolupremioTexts, styles.bolupermioActionText]}
              >
                Sí, es re bolu*
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bolupremioActionRightContainer}>
              <Image
                style={styles.bolupermioActionImage}
                source={require("../../../assets/images/caritaTriste.png")}
              />
              <Text
                style={[styles.bolupremioTexts, styles.bolupermioActionText]}
              >
                No, aburre
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <LoginModal
        isVisible={showModal}
        onLoginPress={onLoginPress}
        onRegisterPress={onRegisterPress}
        onForgotPassword={onForgotPassword}
      />
    </View>
  );
};
        
  export const ProductDetailsNavOptions = (props) => ({
    headerTitle: "Detalle Producto",
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
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.defaultBackground,
  },
  imageContainer: {
    marginHorizontal: 50,
    height: 200,
  },
  priceContainer: {
    bottom: 20,
    right: 0,
  },
  productNameContainer: {
    marginTop: 12,
    backgroundColor: colors.passwordInputBorder,
  },
  productNameText: {
    marginLeft: 15,
    margin: 5,
    fontSize: 18,
  },
  productDescriptionContainer: {
    marginTop: 30,
    marginLeft: 22,
  },
  productDescriptionText: {
    fontSize: 16,
  },
  productLocationContainer: {
    marginTop: 24,
    marginLeft: 24,
    flexDirection: "row",
  },
  productLocationText: {
    marginLeft: 10,
  },
  buyButtonPositionConainer: {
    alignItems: "flex-end",
    marginRight: 30,
    marginTop: 25,
  },
  buyButtonContainer: {
    width: 130,
    borderRadius: 65,
    backgroundColor: "#FFD739",
  },
  buyButtonText: {
    fontSize: 16,
    marginHorizontal: 30,
    marginVertical: 10,
  },
  bolupremioContainer: {
    flexDirection: "row",
  },
  bolupremioTextsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    backgroundColor: colors.passwordInputBorder,
    marginTop: 20
  },
  bolupremioTexts: {
    fontSize: 16,
  },
  bolupremioActionsContainer: {
    marginTop: 15,
    flexDirection: "row",
  },
  bolupremioActionLeftContainer: {
    flexDirection: "row",
  },
  bolupremioActionRightContainer: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
  },
  bolupermioActionText: {
    fontWeight: "bold",
  },
  bolupermioActionImage: {
    marginRight: 10,
    height: 20,
    width: 20,
  },
  imageCactusContainer: {
    marginLeft: 12,
  },
  cactusImage: {
    height: 125,
    width: 80,
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

export default ProductDetails;
