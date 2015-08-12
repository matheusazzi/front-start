class Home {
  constructor() {
    this.message = 'Hello from Home Module';
  }

  initialize() {
    this.sayHello();
  }

  sayHello() {
    return this.message;
  }
}

export default Home;
