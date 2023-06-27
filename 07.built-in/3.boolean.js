// Boolean
const isTrue = true; // new Boolean(true);
console.log(isTrue.valueOf());

/**
 * Falsy
 * 0
 * -0
 * null
 * NaN
 * undefined
 * ''
 */
const bNoParam = new Boolean();
const bZero = new Boolean(0);
const bNull = new Boolean(null);
const bEmptyString = new Boolean('');
const bFalse = new Boolean(false);

/**
 * Truthy
 * 1
 * -1
 * '0'
 * 'false'
 * []
 * {}
 */
const bTrue = new Boolean(true);
const bTrueString = new Boolean('true');
const bFlaseString = new Boolean('false');
const bEffy = new Boolean('Effy');
const bArrayProto = new Boolean([]);
const bObjProto = new Boolean({});
