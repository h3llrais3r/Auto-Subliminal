export function displayValue(value: any, defaultValue = '', upperCase = false): string {
  let val = value || defaultValue;
  try {
    val = val ? String(val) : val;
  } catch (error) {
    val = defaultValue;
  }
  return (val && upperCase) ? val.toUpperCase() : val;
}

export function capitalizeFirstChar(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
