import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Card from '../layouts/card';
import {globalStyles, images} from '../styles/global';

const ReviewDetail = ({route, navigation}) => {
  const item = route.params;
  const url = '../assets/images/rating-' + item.rating + '.png';
  console.log(url);
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{item.title}</Text>
        <Text style={globalStyles.titleText}>{item.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[item.rating]} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});

export default ReviewDetail;
