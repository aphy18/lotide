function assertEqual (actual,expected) {
  const fail = String.fromCodePoint(0x274C);
  const pass = String.fromCodePoint(0x2705);
  if (actual === expected) {
    console.log(`${pass} Assertion Passed:[actual] === [expected]`);
  } else {
    console.log(`${fail} Assertion Failed: [actual] !== [expected]`);
  }
};

// this is making a replica of the console.assert() method

module.exports = assertEqual;