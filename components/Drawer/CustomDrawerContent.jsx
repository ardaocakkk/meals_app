import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';

export default function CustomDrawerContent({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{paddingLeft: 10}}>
        <Text style={styles.nameTextColor}>Havva Nur UzunSoyad</Text>
        <View style={styles.scoreContainer}>
          <Text style={{fontSize: 16}}>Puan</Text>
          <Text style={styles.scoreText}>2050 Biz</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.screensContainer}>
          <View style={styles.screensItem}>
            <Text style={styles.screensItemText}>Ana Sayfa</Text>
            <Image source={require('../../assets/right_arrow.png')} />
          </View>
          <View style={styles.screensItem}>
            <Text style={styles.screensItemText}>Profilim</Text>
            <Image source={require('../../assets/right_arrow.png')} />
          </View>
          <View style={styles.screensItem}>
            <Text style={styles.screensItemText}>Siparişlerim</Text>
            <Image source={require('../../assets/right_arrow.png')} />
          </View>
          <View style={styles.screensItem}>
            <Text style={styles.screensItemText}>Sepetim</Text>
            <Image source={require('../../assets/right_arrow.png')} />
          </View>
          <View style={styles.screensItem}>
            <Text style={styles.screensItemText}>Favorilerim</Text>
            <Image source={require('../../assets/right_arrow.png')} />
          </View>
          <View style={styles.screensItem}>
            <Text style={styles.screensItemText}>Duyurular</Text>
            <Image source={require('../../assets/right_arrow.png')} />
          </View>
          <View style={styles.screensItem}>
            <Text style={styles.screensItemText}>Hakkında</Text>
            <Image source={require('../../assets/right_arrow.png')} />
          </View>
          <View style={styles.screensItem}>
            <Text style={styles.screensItemText}>SSS</Text>
            <Image source={require('../../assets/right_arrow.png')} />
          </View>
          <View style={[styles.screensItem, styles.screenLogOut]}>
            <Text style={styles.screensItemText}>Çıkış Yap</Text>
          </View>
          <View style={styles.qrContainer}>
            <Image source={require('../../assets/qr.png')} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  nameTextColor: {
    color: '#FC4640',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 18,
    color: '#000000',
    marginLeft: 16,
    fontWeight: 'bold',
  },
  screensContainer: {
    marginTop: 40,
  },
  screensItem: {
    height: height * 0.06,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomColor: '#EBF0F1',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  screensItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  screenLogOut: {
    backgroundColor: '#EBF0F1',
  },
  qrContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});
