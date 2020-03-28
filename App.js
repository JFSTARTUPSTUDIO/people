import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetalhes from './src/pages/PeopleDetalhes';

const AppNavigator = createStackNavigator({
    //Configuração da página Main
    Main:{
        screen: PeoplePage,
        
    },
    //Configuração de outras Páginas
    PeopleDetail:{
        screen: PeopleDetalhes,
        //Configuração do header da página especifica em formato de função para tornar dinamico
        navigationOptions: ({ navigation }) => {
            return({
                title: 'Detalhes',
                //Estilização do titulo do header
                headerTitleStyle:{
                    color: 'white',
                    fontSize: 30,
                }
            })
        }
    },
}, 
    {
        //Configuração do header padrão, todo as páginas terão esse header.
        defaultNavigationOptions:{
            //Titulo da Página Main
            title: 'Contatos',
            //Cor do botão de voltar
            headerTintColor: 'white',
            
            //Estilo do header padrão, todas as páginas terão esse header.
            headerStyle:{
                backgroundColor: '#6ca2f7',
                borderBottomWidth: 1,
                borderBottomColor: '#C5C5C5',
            },
            //Estilo do titulo do header padrão, todas as páginas terão esse header.
            headerTitleStyle:{
                color: 'white',
                fontSize: 30,
                flexGrow: 1,
                textAlign: "center",
            },
        }
    }

);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;