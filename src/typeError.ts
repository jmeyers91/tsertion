export type TypeError = Error & { statusCode?: number };

export default function typeError(
  expectedType: string,
  value: unknown,
  message?: string
): TypeError {
  const error: TypeError = new Error(
    `Expected ${message ||
      'value'} to be of type ${expectedType}. Got ${value}.`
  );

  error.statusCode = 400;

  return error;
}
