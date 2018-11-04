import { StackNavigator } from 'react-navigation';
// Components
import { StartPage, ShowDays, ShowImage } from './source/Pages';


export default App = StackNavigator({
    StartPage: { screen: StartPage },
    ShowDays:  { screen: ShowDays },
    ShowImage: { screen: ShowImage },
});
