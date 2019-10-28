module.exports = marketCap => {
  let marketCapStr = String(marketCap);
  let readableForm = "";
  let lastDigts = "";

  if ((marketCapStr.length - 3) % 12 === 0) {
    readableForm = marketCapStr.substring(0, 3);
    lastDigts = marketCapStr.substring(3);
  } else if ((marketCapStr.length - 3) % 11 === 0) {
    readableForm = marketCapStr.substring(0, 2);
    lastDigts = marketCapStr.substring(2);
  } else if ((marketCapStr.length - 3) % 10 === 0) {
    readableForm = marketCapStr.substring(0, 1);
    lastDigts = marketCapStr.substring(1);
  } else if ((marketCapStr.length - 3) % 9 === 0) {
    readableForm = marketCapStr.substring(0, 3);
    lastDigts = marketCapStr.substring(3);
  } else if ((marketCapStr.length - 3) % 8 === 0) {
    readableForm = marketCapStr.substring(0, 2);
    lastDigts = marketCapStr.substring(2);
  } else if ((marketCapStr.length - 3) % 7 === 0) {
    readableForm = marketCapStr.substring(0, 1);
    lastDigts = marketCapStr.substring(1);
  } else if ((marketCapStr.length - 3) % 6 === 0) {
    readableForm = marketCapStr.substring(0, 3);
    lastDigts = marketCapStr.substring(3);
  } else if ((marketCapStr.length - 3) % 5 === 0) {
    readableForm = marketCapStr.substring(0, 2);
    lastDigts = marketCapStr.substring(2);
  } else if ((marketCapStr.length - 3) % 4 === 0) {
    readableForm = marketCapStr.substring(0, 1);
    lastDigts = marketCapStr.substring(1);
  } else if ((marketCapStr.length - 3) % 3 === 0) {
    readableForm = marketCapStr.substring(0, 3);
    lastDigts = marketCapStr.substring(3);
  } else if ((marketCapStr.length - 3) % 2 === 0) {
    readableForm = marketCapStr.substring(0, 2);
    lastDigts = marketCapStr.substring(2);
  } else if ((marketCapStr.length - 3) % 1 === 0) {
    readableForm = marketCapStr.substring(0, 1);
    lastDigts = marketCapStr.substring(1);
  }

  let howManyZeroes = parseInt(lastDigts.length / 3);

  if (howManyZeroes === 1) {
    readableForm += " Thousand";
  } else if (howManyZeroes === 2) {
    readableForm += " Milion";
  } else if (howManyZeroes === 3) {
    readableForm += " Bilion";
  } else if (howManyZeroes === 4) {
    readableForm += " Trilion";
  }
  return readableForm;
};
