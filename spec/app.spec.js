const { replace, add } = require('../natural_chisla');

describe('A spec', () => {
  beforeEach(() => {
    this.num = 1314;
    this.num += '';
    this.num = this.num.split('');
  });

  it('can use the `this` to share state', () => {
    expect(replace(this.num)).toEqual(4311);
  });
  it('can use the `this` to share state', () => {
    expect(add(this.num)).toEqual(113141);
  });
});
