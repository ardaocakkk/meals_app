import {
  Pressable,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  Platform,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
function CategoryGridTile({title, color, onPress}) {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View style={[styles.gridItem, {height: height * 0.2}]}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}>
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white', //for adding shadow to ios
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
});

export default CategoryGridTile;
