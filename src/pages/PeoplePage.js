import React, { Component } from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../components/Header';
import PeopleList from '../components/PeopleList';

import axios from 'axios';

export default class PeoplePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };

  }

  componentDidMount(){
    axios
      .get("https://randomuser.me/api/?nat=br&results=20")
      .then(response => {
        const {results} = response.data;
        this.setState({
          people: results,
        });
      });
  }

  render() {
    
    return (
      <View>
        <ScrollView>
          <PeopleList 
            peoples={this.state.people}
            onPressItem={()=>{
              //  this.props.navigation.navigate('PeopleDetail', state);
              this.props.navigation.navigate('PeopleDetail');
            }}
          />
        </ScrollView>
          
      </View>
    );
  }
}
