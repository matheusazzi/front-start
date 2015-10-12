import Home from 'scripts/modules/home'

describe('Home', () => {
  let subject

  beforeEach(() => {
    subject = new Home()
  })

  describe('#initialize', () => {
    it('call #sayHello', () => {
      spyOn(subject, 'sayHello')
      subject.initialize()

      expect(subject.sayHello).toHaveBeenCalled()
      subject.sayHello.calls.reset()
    })
  })

  describe('#sayHello', () => {
    it('return module message', () => {
      subject.message = 'Foo'
      expect(subject.sayHello()).toMatch('Foo')
    })
  })
})
