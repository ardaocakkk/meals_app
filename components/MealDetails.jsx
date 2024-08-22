import {Text, View, StyleSheet} from 'react-native';

function MealDetails({duration, complexity, affordability, style, text}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, text]}>{duration}m</Text>
      <Text style={[styles.detailItem, text]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, text]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    marginHorizontal: 4,
  },
});

export default MealDetails;
