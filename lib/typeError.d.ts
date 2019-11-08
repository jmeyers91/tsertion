export declare type TypeError = Error & {
    statusCode?: number;
};
export default function typeError(expectedType: string, value: unknown, message?: string): TypeError;
//# sourceMappingURL=typeError.d.ts.map