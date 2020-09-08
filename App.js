import React from 'react';
import {Image} from "react-native";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { AppLoading } from 'expo';
import * as Font from "expo-font";
export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      isLoading: true
    }
  }

async componentDidMount(){
  await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isLoading: false});
  }

  render(){
    if(this.state.isLoading){
      return <AppLoading/>;
    }
  return (
    <Container>
    <Header />
    <Content>
      <Card style={{flex: 0}}>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'https://images.pexels.com/photos/4603779/pexels-photo-4603779.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}} />
            <Body>
              <Text>Retr0</Text>
              <Text note>Androi dev, React Native</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image source={{uri: 'https://images.pexels.com/photos/5008835/pexels-photo-5008835.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}} style={{height: 400, width: 400, flex: 1}}/>
            <Text>
              Testing
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent textStyle={{color: '#87838B'}}>
              <Icon name="logo-github" />
              <Text>1,926 stars</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    </Content>
  </Container>

  );
  }
}