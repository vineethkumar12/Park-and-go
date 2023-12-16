import React, { Component } from 'react';

class WithNavigationGuard extends Component {
  componentDidMount() {
    this.setupBeforeUnloadListener();
  }

  componentWillUnmount() {
    this.removeBeforeUnloadListener();
  }

  setupBeforeUnloadListener() {
    window.addEventListener('beforeunload', this.beforeUnloadListener);
  }

  removeBeforeUnloadListener() {
    window.removeEventListener('beforeunload', this.beforeUnloadListener);
  }

  beforeUnloadListener = (e) => {
    // Display a confirmation message to the user
    e.returnValue = 'Are you sure you want to leave this page?';
  };

  render() {
    return this.props.children;
  }
}

export default WithNavigationGuard;
