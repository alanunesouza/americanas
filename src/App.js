import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import ListProductScreen from './screens/ListProductScreen';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true, smartphones: [], notebooks: [], tvs: [], productSelected: [] }
  }

  componentDidMount() {
    this.callSmartPhones();
    this.callNotebooks();
    this.callTvs();
  }

  callSmartPhones() {
    return fetch('https://apiadapter.ad5track.com/v2/ads/americanas?api=b2wads&category_id=229187&referer=https%3A%2F%2Fwww.americanas.com.br%2Fcategoria%2Fcelulares-e-smartphones%3Fchave%3Dprf_hm_0_at_06_bf17&sgs=VEPAT%3AVEPAT%7CMUTC%3AMUTC&size=10&term=Celulares%20e%20Smartphones&userAgent=Mozilla%2F5.0%20%28Macintosh%3B%20Intel%20Mac%20OS%20X%2010_13_6%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F70.0.3538.110%20Safari%2F537.36&userId=va_201823593318_340.72613719251285')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.products);
        this.setState({
          isLoading: false,
          smartphones: responseJson.products,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  callTvs() {
    return fetch('https://apiadapter.ad5track.com/v2/ads/americanas?api=b2wads&category_id=227707&referer=https%3A%2F%2Fwww.americanas.com.br%2Fcategoria%2Ftv-e-home-theater%2Ff%2Ftag-acom-tag-direcionamentotv%3Fchave%3Dprf_hm_0_at_09_bf17&sgs=VEPAT%3AVEPAT%7CMUTC%3AMUTC&size=10&term=TV%20e%20Home%20Theater&userAgent=Mozilla%2F5.0%20%28Macintosh%3B%20Intel%20Mac%20OS%20X%2010_13_6%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F70.0.3538.110%20Safari%2F537.36&userId=va_201823593318_340.72613719251285')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.products);
        this.setState({
          isLoading: false,
          tvs: responseJson.products,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }


  callNotebooks() {
    return fetch('https://apiadapter.ad5track.com/v2/ads/americanas?api=b2wads&category_id=228190&referer=https%3A%2F%2Fwww.americanas.com.br%2Fcategoria%2Finformatica%3Fchave%3Dprf_hm_0_at_08_bf17&sgs=VEPAT%3AVEPAT%7CMUTC%3AMUTC&size=10&term=Inform%C3%A1tica&userAgent=Mozilla%2F5.0%20%28Macintosh%3B%20Intel%20Mac%20OS%20X%2010_13_6%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F70.0.3538.110%20Safari%2F537.36&userId=va_201823593318_340.72613719251285')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.products);
        this.setState({
          isLoading: false,
          notebooks: responseJson.products,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  callProduct(product) {
    this.setState({ productSelected: product});
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./images/logo.png')}/>
        <Text style={styles.category}>Categorias</Text>
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.callProduct(this.state.smartphones)
          }><View>
            <Text style={styles.buttonTitle}>Smartphones</Text></View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.callProduct(this.state.notebooks)
          }>
            <Text style={styles.buttonTitle}>Notebooks</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.callProduct(this.state.tvs)
          }>
            <Text style={styles.buttonTitle}>Tvs</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ListProductScreen products={this.state.productSelected}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
  },
  logo: {
    height: 80,
    width: 300,
    marginTop: 200
  },
  category: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  menu: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: '#bd0000',
    borderRadius: 10,
  },
  buttonTitle: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontSize: 13,
  }
});
