export function toNumber(value: any): number {
  // Use Number() constructor to make sure the string is a complete number
  // Don't use parseInt() as it's less strict and also parses text like '1abc' to 1, which we don't want
  const num = Number(value);
  if (!value || isNaN(num)) {
    throw Error(`Value is not a number: '${value}'`);
  } else {
    return num;
  }
}

export function toNumberList(value: any): number[] {
  if (value) {
    if (typeof value === 'number') {
      return [value];
    } else if (typeof value === 'string') {
      const numList = value.split(',');
      return numList.map((numValue) => toNumber(numValue));
    }
  }
  throw Error(`Value is not a list of numbers: '${value}'`);
}
