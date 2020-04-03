import 'react-native-gesture-handler';


import React from 'react';
import Splash from './components/Splash';
import {Text} from 'react-native';
import SignOn from './components/SignOn';
import SliderScreen from './components/SliderScreen';

class App extends React.Component {
  constructor() {
    super();
    this.state = {isLoading: true};
  }

  render() {
    if (this.state.isLoading === true) {
      return <Splash />;
    }
    return (
      <>
        <SliderScreen />
        {/* <SignOn /> */}
      </>
    );
  }

  resetLoadingState = async () => {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 2000);
  };

  async componentDidMount() {
    const data = await this.resetLoadingState();
  }
}

export default App;
