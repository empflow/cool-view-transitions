interface Opts {
  errMsg?: string;
}

export default function throwIfNullOrUndefined(val: any, opts?: Opts) {
  const defaultErrMsg = "Value must be not null and not undefined";
  const { errMsg = defaultErrMsg } = opts ?? {};

  if (val === null || val === undefined) {
    throw new Error(errMsg ?? defaultErrMsg);
  }
}
