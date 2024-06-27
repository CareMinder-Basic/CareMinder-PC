export function validateBusinessNumber(businessNumber: string | null | undefined): boolean {
  if (!businessNumber || businessNumber.trim().length === 0) {
    return false;
  }

  businessNumber = businessNumber.replace(/-/g, "");
  if (businessNumber.length !== 10) {
    return false;
  }

  const numberValue = Array.from(businessNumber, Number);
  const multiply = [1, 3, 7, 1, 3, 7, 1, 3, 5];

  const checkSum =
    multiply.reduce((sum, multiplier, index) => sum + multiplier * numberValue[index], 0) +
    Math.floor((multiply[8] * numberValue[8]) / 10);

  return (10 - (checkSum % 10)) % 10 === numberValue[9];
}
