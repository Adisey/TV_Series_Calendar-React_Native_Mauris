import { StackNavigator } from 'react-navigation';
// Components
import { StartPage, ShowDays } from './source/Pages';


export default App = StackNavigator({
    StartPage: { screen: StartPage },
    ShowDays:  { screen: ShowDays },
});
