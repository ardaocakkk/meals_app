import { Image, Text, View, StyleSheet, ScrollView, Button } from "react-native";
import {MEALS} from '../data/data';
import meal from '../models/meal';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { useLayoutEffect, useState } from "react";
function MealDetailScreen({route, navigation}) {
  const mealId = route.params.mealId;
  const theMeal = MEALS.find(meal => meal.id === mealId);

  const [isFavorite, setIsFavorite] = useState(false);
  function handleIsFavorite() {
    if(isFavorite) {
      setIsFavorite(false)
    }
    else if(!isFavorite) {
      setIsFavorite(true);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          isFavorite={isFavorite}
          name="star"
          onPress={handleIsFavorite}
        />
      ),
    });
  }, [navigation]);
  return (
    <>
      <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{uri: theMeal.imageUrl}} />
        <Text style={styles.title}>{theMeal.title}</Text>
        <MealDetails
          duration={theMeal.duration}
          affordability={theMeal.affordability}
          complexity={theMeal.complexity}
          text={styles.detailtText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={theMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={theMeal.steps} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 24,
    textAlign: 'center',
    color: 'white',
  },
  detailtText: {
    color: 'white',
  },
  listContainer: {
    maxWidth: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});

export default MealDetailScreen;
