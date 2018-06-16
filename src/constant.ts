export enum ErrorCode {
  A,
  B
}

function getEnumKeys<T extends any>(sourceEnum: T): Array<keyof T> {
  const result: Array<keyof T> = [];

  Object.keys(sourceEnum).forEach((key: any) => {
    const value: any = sourceEnum[key];
    if (typeof value === 'string') {
      result.push(value);
    }
  });

  return result;
};

export const errorCodes = getEnumKeys(ErrorCode);

console.log(errorCodes);
