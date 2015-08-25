import message from './message';

class Home {
  constructor() {
    this.message = message;
  }

  initialize() {
    this.sayHello();
  }

  sayHello() {
    return this.message;
  }
}

export default Home;
