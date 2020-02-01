import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { Container, Header, Title, Content, Card, CardItem, Badge, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, SafeAreaView, Alert} from 'react-native';
import Constants from 'expo-constants';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => Alert.alert('Simple Button pressed')}>
              <Icon name='menu' />

            </Button >
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>


          <Card>
            <CardItem>
              <Body>
                <Text>
                   This is the article's title!
                   Then this would be the description!
                </Text>
              </Body>
            </CardItem>
          </Card>

            <Text>This is the content page</Text>
          <Button iconLeft dark>
            <Icon name='cog' />
            <Text>Settings</Text>
          </Button>


          <Button>
            <Text>Click Me!</Text>
          </Button>
          <Button rounded light>
            <Text>Light</Text>
          </Button>

          <Badge primary>
            <Text>123</Text>
          </Badge>

        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
