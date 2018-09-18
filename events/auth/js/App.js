'use strict';

const AUTH_URL = '/404/auth/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUnauthorized: true,
      user: {}
    }
  }
  auth(user) {
    this.setState({isUnauthorized: false, user});
  }
  render() {
    return (
      <div className="App">
        <Modal isHidden={!this.state.isUnauthorized}>
          <AuthForm onAuth={this.auth.bind(this)} actionUrl={AUTH_URL}/>
        </Modal>
        <ModalResult isHidden={this.state.isUnauthorized}>
          <div className="ModalForm">
            <div className="Input">
              <output data-name>{this.state.user.name}</output>
              <label />
            </div>
            <div className="Input">
              <output data-email>{this.state.user.email}</output>
              <label />
            </div>
            <div className="Input">
              <output data-password>{this.state.user.password}</output>
              <label />
            </div>
          </div>
        </ModalResult>
      </div>
    );
  }
}
