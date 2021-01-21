import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

var dataCheck = 1;
const Home = () => {
  const navigation = useNavigation();
  const [dataNumber, setDataNumber] = React.useState([dataCheck]);
  const HandleIncrease = () => {
    dataCheck++;
    setDataNumber(dataNumber.concat(dataCheck));
  };
  const handleNavigate = (e) => {
    navigation.navigate('HomeDetail', {e});
  };
  return (
    <View>
      <View style={styles.wrapperHeader}>
        {dataNumber.map((e) => (
          <TouchableOpacity
            key={e}
            style={styles.wrapperBtnNumber}
            onPress={() => {
              handleNavigate(e);
            }}>
            <Text>{e}</Text>
          </TouchableOpacity>
        ))}
        {/* <TouchableOpacity
            style={styles.wrapperBtnNumber}
            onPress={() => {
              handleNavigate(e);
            }}
            key={e}>
            {e}
          </TouchableOpacity> */}
      </View>
      <View style={styles.wrapperMain}>
        <TouchableOpacity style={styles.wrapperBtn} onPress={HandleIncrease}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapperBtn}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperMain: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 500,
  },
  wrapperBtn: {
    height: 35,
    width: 35,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    borderColor: '#009966',
  },
  wrapperHeader: {
    alignItems: 'center',
    marginTop: 100,
  },
  wrapperBtnNumber: {
    height: 30,
    width: '100%',
    borderBottomWidth: 1,
  },
});

export default Home;
