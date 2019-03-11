import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import { Constants } from 'expo';

StatusBar.setHidden(true);

const MyCard = props => (
  <View style={styles.boxCard}>
    {/* console.log("QUESTO E' IMG: ", props.title, '-', props.image) */}
    <Image style={styles.image} source={props.image} />
    <Text style={styles.text}>{props.title}</Text>
  </View>
);

const ListImage = [
  {title:"Ciao, sono Javascript!", image:require("./assets/js.png")},
  {title:"Ciao, sono Java!", image:require("./assets/java.jpg")},
  {title:"Ciao, sono React-Native!", image:require("./assets/react_native.png")},
  {title:"Ciao, sono C++!", image:require("./assets/c_plus_plus.jpg")}
];

export default class App extends React.Component {

  extrapolationList = () => (
    ListImage.map((obj,index) => (<MyCard title={obj.title} image={obj.image} key={index}></MyCard>))
  )
  
  render(){
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.extrapolationList()}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    //padding: 8,
  },
  boxCard: {
    width: 400,
    height: 300,
    backgroundColor: 'darkturquoise',
    alignItems: 'center',
    borderWidth: 2,
    paddingTop:20,
    borderRadius:10

  },
  text: {
    marginTop: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "black"
  },
  image:{
    width: 200,
    height: 200,
    borderRadius: 10
  }
});
