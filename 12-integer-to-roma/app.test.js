var intToRoman = require('./app');

describe('intToRoman', () => {

  it('1500 -> MD', () => {
    expect(intToRoman(1500)).toEqual('MD')
  });
  it('1600 -> MDC', () => {
    expect(intToRoman(1600)).toEqual('MDC')
  });
  it('1700 -> MDCC', () => {
    expect(intToRoman(1700)).toEqual('MDCC')
  });
  it('1800 -> MDCCC', () => {
    expect(intToRoman(1800)).toEqual('MDCCC')
  });
  it('1900 -> MCM', () => {
    expect(intToRoman(1900)).toEqual('MCM')
  });


  it('1550 -> MDL', () => {
    expect(intToRoman(1550)).toEqual('MDL')
  });
  it('1660 -> MDCLX', () => {
    expect(intToRoman(1660)).toEqual('MDCLX')
  });
  it('1770 -> MDCCLXX', () => {
    expect(intToRoman(1770)).toEqual('MDCCLXX')
  });
  it('1880 -> MDCCCLXXX', () => {
    expect(intToRoman(1880)).toEqual('MDCCCLXXX')
  });
  it('1990 -> MCMXC', () => {
    expect(intToRoman(1990)).toEqual('MCMXC')
  });


  it('1100 -> MCM', () => {
    expect(intToRoman(1100)).toEqual('MC')
  });
  it('1200 -> MCC', () => {
    expect(intToRoman(1200)).toEqual('MCC')
  });
  it('1300 -> MCCC', () => {
    expect(intToRoman(1300)).toEqual('MCCC')
  });
  it('1400 -> MCD', () => {
    expect(intToRoman(1400)).toEqual('MCD')
  });



  //   it('1500 -> MD', () => {
  //     expect(intToRoman(1500)).toEqual('MD')
  //   });
  //   it('3 -> III', () => {
  //     expect(intToRoman(3)).toEqual('III')
  //   });
  //   it('4 -> IV', () => {
  //     expect(intToRoman(4)).toEqual('IV')
  //   });
  //   it('9 -> IX', () => {
  //     expect(intToRoman(9)).toEqual('IX')
  //   });
  //   it('58 -> LVIII Explanation L = 50, V = 5, III = 3.', () => {
  //     expect(intToRoman(58)).toEqual('LVIII')
  //   });
  //   it('1994 -> MCMXCIV Explanation M = 1000, CM = 900, XC = 90 and IV = 4.', () => {
  //     expect(intToRoman(58)).toEqual('MCMXCIV')
  //   });
});