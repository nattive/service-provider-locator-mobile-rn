import 'react-native-gesture-handler';

import React from 'react';
import Splash from './components/Splash';
import AuthRouteNavigation from './components/patials/AuthRouteNavigation';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {isLoading: true};
  }

  render() {
    if (this.state.isLoading === true) {
      return <Splash />;
    }
    return <AuthRouteNavigation />;
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
