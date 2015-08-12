import Home from 'scripts/modules/home';

describe('Home', () => {
  it('#sayHello log module message', () => {
    const subject = new Home();
    expect(subject.sayHello()).toMatch('Hello from Home Module');
  });
});
