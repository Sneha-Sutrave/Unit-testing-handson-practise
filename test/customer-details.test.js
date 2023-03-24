import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  it('checks for the Accessible', async () => {
    expect(obj).to.be.accessible; 
  });
  it('checks for the spy to _toEmidetails', () => {
    const SpyMethod = Sinon.spy(obj, '_toEmidetails');
    obj._toEmidetails();
    expect(SpyMethod.calledOnce).to.be.true;
  });
});
