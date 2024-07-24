import { registerRootComponent } from 'expo';
import AppNavigator from './navigation/Navigator';
function App() {
  return <AppNavigator />;
}

export default registerRootComponent(App);
