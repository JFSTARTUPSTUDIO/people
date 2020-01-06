import React from 'react';
import { Text, View, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native';

const PeopleListItem = props =>{
    //people é a propriedade do componente sendo passada
    const {people, navigatorToPage} = props;
    const {first, last} = people.name;
    
    return (
      
      <TouchableOpacity onPress={()=>{
          navigatorToPage({ people });
      }}>
        <View style={style.contato} key={first}>
            <Image style={style.avatar} source={ { uri: people.picture.thumbnail }}></Image>
            <Text style={style.nome}>{first} {last}</Text>
        </View>
      </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    contato:{
      height: 60,
      borderBottomWidth: 1,
      borderBottomColor: '#bbb',
      alignItems: 'center',
      flexDirection: 'row',
    },
    nome:{
      fontSize: 20,
      paddingLeft: 15,
      flex: 7,
    },
    avatar:{
        flex: 1,
        aspectRatio: 1,
        marginLeft: 15,
        borderRadius: 50,
    }
});

export default PeopleListItem;