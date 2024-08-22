import { Button, Pressable, Text } from "react-native";
import Icon from 'react-native-ionicons';

function IconButton({onPress, isFavorite}) {
  return (
    <Pressable onPress={onPress}>
      <Button title={isFavorite ? 'Remove' : 'Add'} />
    </Pressable>
  );
}
export default IconButton;
