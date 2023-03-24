import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
 it('Check for the Accessible', async () => {
    expect(obj).to.be.accessible();
  });

  it('Spy on the _toHome ', async () => {
    const mySpyMethod = Sinon.spy(obj, '_toHome');
    obj._toHome();
    expect(mySpyMethod.calledOnce).to.be.true;
  });
});

describe('error screen', () => {
  it('Checks for the Accessible', async () => {
    expect(obj2).to.be.accessible();
  });
  it('Spy on the _toHome', async () => {
    const obj2 = await fixture(html`<loan-error></loan-error>`);
    const spyMethod = Sinon.spy(obj2, '_toHome');
    obj2._toHome();
    expect(spyMethod.calledOnce).to.be.true;
  });
});
