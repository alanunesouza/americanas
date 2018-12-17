import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList, Image, ScrollView} from 'react-native';

export default class ListProductScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { products: this.props.products };
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.products}
          contentContainerStyle={{paddingBottom: 200}}
          renderItem={
            ({item}) =>
            <View style={styles.items}>
              <Image
                style={styles.images}
                source={{uri: item.img}}
              />
              <Text style={styles.price}>R$ {item.price}</Text>
              <Text style={styles.description}>{item.name}</Text>
              </View>
            }
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  items: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    textAlign: 'center'
  },
  images: {
    width: 75,
    height: 75,
  }
});
