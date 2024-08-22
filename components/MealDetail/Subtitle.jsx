import { Text, View, StyleSheet } from "react-native";

function Subtitle({children}) {
  return (

  <View style={styles.subTitleContainer}>
    <Text style={styles.subTitle}>{children}</Text>
  </View>
    )

}

const styles = StyleSheet.create({
  subTitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitleContainer: {
    marginHorizontal: 24,
    marginVertical: 6,
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
})
export default Subtitle;
