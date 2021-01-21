import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

const HomeDetail = () => {
  const route = useRoute();
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      {route.params.e != null ? <Text>{route.params.e}</Text> : <View></View>}
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeDetail;
