import { Text, View, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";
function MealItem({id,title, imageUrl, duration, complexity, affordability}) {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate('MealDetail', {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable  android_ripple={{color: "#ccc"}} onPress={handlePress} style={({pressed}) => [
        pressed ? styles.pressed : null,
      ]}>
        <View style={styles.innerContainer}>
          <Image source={{uri: imageUrl}} style={styles.image} />
          <Text style={styles.title}> {title}</Text>
        </View>
        <MealDetails duration={duration} affordability={affordability} complexity={complexity} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  pressed: {
    opacity: 0.5,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white', //for adding shadow to ios
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },


})

export default MealItem;
