import {StyleSheet, Text, View} from 'react-native';

function List({data}) {
  return data.map(dataPoint => {
    return (
      <View style={styles.listItem}>
        <Text key={dataPoint} style={styles.itemText}>
          {dataPoint}
        </Text>
      </View>
    );
  });
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});

export default List;
