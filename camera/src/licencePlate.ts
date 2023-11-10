function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const LicencePlateTypes = {
  1: () =>
    `${generateNumbers(2)}-${generateCharacters(2)}-${generateNumbers(2)}`, // 99-AA-99
  2: () =>
    `${generateCharacters(2)}-${generateNumbers(2)}-${generateCharacters(2)}`, // AA-99-AA
  3: () =>
    `${generateCharacters(2)}-${generateCharacters(2)}-${generateNumbers(2)}`, // AA-AA-99
  4: () =>
    `${generateNumbers(2)}-${generateCharacters(2)}-${generateCharacters(2)}`, // 99-AA-AA
  5: () =>
    `${generateNumbers(2)}-${generateCharacters(2)}-${generateCharacters(2)}`, // 99-AAA-9
  6: () =>
    `${generateNumbers(2)}-${generateCharacters(3)}-${generateNumbers(1)}`, // 9-AAA-99
  7: () =>
    `${generateNumbers(1)}-${generateCharacters(3)}-${generateNumbers(2)}`, // AA-999-A
  8: () =>
    `${generateCharacters(2)}-${generateNumbers(3)}-${generateCharacters(1)}`, // A-999-AA
};

const validLicenseNumberChars: string = 'DFGHJKLNPRSTXYZ';

function generateCharacters(aantal: number) {
  let chars = '';
  for (let i = 0; i < aantal; i++) {
    chars +=
      validLicenseNumberChars[
        randomIntFromInterval(0, validLicenseNumberChars.length - 1)
      ];
  }
  return chars;
}

function generateNumbers(aantal: number) {
  let numbers = '';
  for (let i = 0; i < aantal; i++) {
    numbers += randomIntFromInterval(0, 9);
  }
  return numbers;
}

export function getLicencePlate() {
  const type = randomIntFromInterval(1, 8);
  return LicencePlateTypes[type]();
}
