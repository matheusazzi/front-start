import Home from 'scripts/modules/home'

describe('Home', () => {
  let subject

  beforeEach(() => {
    subject = new Home()
  })

  describe('#initialize', () => {
    it('call #sayHello', () => {
      sinon.spy(subject, 'sayHello')
      subject.initialize()

      expect(subject.sayHello).to.have.been.called
      subject.sayHello.restore()
    })
  })

  describe('#sayHello', () => {
    it('return module message', () => {
      subject.message = 'Foo'
      expect(subject.sayHello()).to.equal('Foo')
    })
  })
})
