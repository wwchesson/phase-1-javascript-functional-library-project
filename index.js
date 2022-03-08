const isCollection = function (collection) {
  if (Array.isArray(collection) === true) {
    return collection;
  } else {
    return Object.values(collection);
  }
};

const myEach = function (collection, callback) {
  const checkCollection = isCollection(collection);
  for (let i = 0; i < checkCollection.length; i++) {
    callback(checkCollection[i]);
  }
  return collection;
};

const myMap = function (collection, callback) {
  const checkCollection = isCollection(collection);
  const mappedArray = [];
  for (let i = 0; i < checkCollection.length; i++) {
    mappedArray.push(callback(checkCollection[i]));
  }
  return mappedArray;
};

const myReduce = function (collection, callback, acc) {
  let checkCollection = isCollection(collection);
  if (!acc) {
    acc = checkCollection[0];
    checkCollection = checkCollection.slice(1);
  }

  for (let i = 0; i < checkCollection.length; i++) {
    acc = callback(acc, checkCollection[i], checkCollection);
  }
  return acc;
};

const myFind = function (collection, predicate) {
  let checkCollection = isCollection(collection);
  for (let i = 0; i < checkCollection.length; i++) {
    if (predicate(checkCollection[i])) return checkCollection[i];
  }
  return undefined;
};

const myFilter = function (collection, predicate) {
  let checkCollection = isCollection(collection);
  let filteredCollection = [];

  for (let i = 0; i < checkCollection.length; i++) {
    if (predicate(checkCollection[i]))
      filteredCollection.push(checkCollection[i]);
  }
  return filteredCollection;
};

const mySize = function (collection) {
  let checkCollection = isCollection(collection);

  return checkCollection.length;
};

const myFirst = function (array, n) {
  let newArray = [];
  if (!n) {
    return array[0];
  } else {
    for (let i = 0; i < n; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
};

// const myFirst = function (array, n = false) {
//   return n ? array.slice(0, n) : array[0];
// };

const myLast = function (array, n = false) {
  return n
    ? array.slice(array.length - n, array.length)
    : array[array.length - 1];
};

const myKeys = function (object) {
  let keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
};

const myValues = function (object) {
  let values = [];
  for (let value in object) {
    values.push(object[value]);
  }
  return values;
};
