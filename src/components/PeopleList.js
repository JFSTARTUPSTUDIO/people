import React from 'react';
import {View} from 'react-native';
import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
  const {peoples, onPressItem} = props;
   const items = peoples.map(people => {
    const {first} = people.name;
    return (
      <PeopleListItem key={first} people={people} navigatorToPage={onPressItem}/>
    );
  });

  return (
    <View>
      {items}
    </View>
  );
};

export default PeopleList;
