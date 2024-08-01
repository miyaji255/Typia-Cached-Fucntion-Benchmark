import { Bench } from "tinybench";
import typia, { tags } from "typia";

interface IMember {
  id: string & tags.Format<"uuid">;
  name: string;
  age: number &
  tags.Type<"uint32"> &
  tags.Minimum<20> &
  tags.ExclusiveMaximum<100>;
}

const noCacheValidator = (input: unknown): typia.IValidation<IMember> => {
  const errors = [] as any[];
  const __is = (input: any): input is IMember => {
    return (
      "object" === typeof input &&
      null !== input &&
      "string" === typeof (input as any).id &&
      /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
        (input as any).id,
      ) &&
      "string" === typeof (input as any).name &&
      "number" === typeof (input as any).age &&
      Math.floor((input as any).age) === (input as any).age &&
      0 <= (input as any).age &&
      (input as any).age <= 4294967295 &&
      20 <= (input as any).age &&
      (input as any).age < 100
    );
  };
  if (false === __is(input)) {
    const $report = (typia.createValidate as any).report(errors);
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is IMember => {
      const $vo0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        [
          ("string" === typeof input.id &&
            (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
              input.id,
            ) ||
              $report(_exceptionable, {
                path: _path + ".id",
                expected: 'string & Format<"uuid">',
                value: input.id,
              }))) ||
          $report(_exceptionable, {
            path: _path + ".id",
            expected: '(string & Format<"uuid">)',
            value: input.id,
          }),
          "string" === typeof input.name ||
          $report(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name,
          }),
          ("number" === typeof input.age &&
            ((Math.floor(input.age) === input.age &&
              0 <= input.age &&
              input.age <= 4294967295) ||
              $report(_exceptionable, {
                path: _path + ".age",
                expected: 'number & Type<"uint32">',
                value: input.age,
              })) &&
            (20 <= input.age ||
              $report(_exceptionable, {
                path: _path + ".age",
                expected: "number & Minimum<20>",
                value: input.age,
              })) &&
            (input.age < 100 ||
              $report(_exceptionable, {
                path: _path + ".age",
                expected: "number & ExclusiveMaximum<100>",
                value: input.age,
              }))) ||
          $report(_exceptionable, {
            path: _path + ".age",
            expected:
              '(number & Type<"uint32"> & Minimum<20> & ExclusiveMaximum<100>)',
            value: input.age,
          }),
        ].every((flag: boolean) => flag);
      return (
        ((("object" === typeof input && null !== input) ||
          $report(true, {
            path: _path + "",
            expected: "IMember",
            value: input,
          })) &&
          $vo0(input, _path + "", true)) ||
        $report(true, {
          path: _path + "",
          expected: "IMember",
          value: input,
        })
      );
    })(input, "$input", true);
  }
  const success = 0 === errors.length;
  return {
    success,
    errors,
    data: success ? input : undefined,
  } as any;
};
const cacheValidator = (() => {
  const __is = (input: any): input is IMember => {
    return (
      "object" === typeof input &&
      null !== input &&
      "string" === typeof (input as any).id &&
      /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
        (input as any).id,
      ) &&
      "string" === typeof (input as any).name &&
      "number" === typeof (input as any).age &&
      Math.floor((input as any).age) === (input as any).age &&
      0 <= (input as any).age &&
      (input as any).age <= 4294967295 &&
      20 <= (input as any).age &&
      (input as any).age < 100
    );
  };
  const $vo0 = (
    $report: any,
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): boolean =>
    [
      ("string" === typeof input.id &&
        (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
          input.id,
        ) ||
          $report(_exceptionable, {
            path: _path + ".id",
            expected: 'string & Format<"uuid">',
            value: input.id,
          }))) ||
      $report(_exceptionable, {
        path: _path + ".id",
        expected: '(string & Format<"uuid">)',
        value: input.id,
      }),
      "string" === typeof input.name ||
      $report(_exceptionable, {
        path: _path + ".name",
        expected: "string",
        value: input.name,
      }),
      ("number" === typeof input.age &&
        ((Math.floor(input.age) === input.age &&
          0 <= input.age &&
          input.age <= 4294967295) ||
          $report(_exceptionable, {
            path: _path + ".age",
            expected: 'number & Type<"uint32">',
            value: input.age,
          })) &&
        (20 <= input.age ||
          $report(_exceptionable, {
            path: _path + ".age",
            expected: "number & Minimum<20>",
            value: input.age,
          })) &&
        (input.age < 100 ||
          $report(_exceptionable, {
            path: _path + ".age",
            expected: "number & ExclusiveMaximum<100>",
            value: input.age,
          }))) ||
      $report(_exceptionable, {
        path: _path + ".age",
        expected:
          '(number & Type<"uint32"> & Minimum<20> & ExclusiveMaximum<100>)',
        value: input.age,
      }),
    ].every((flag: boolean) => flag);
  const report = ((
    $report: any,
    input: any,
    _path: string,
    _exceptionable: boolean = true,
  ): input is IMember => {
    return (
      ((("object" === typeof input && null !== input) ||
        $report(true, {
          path: _path + "",
          expected: "IMember",
          value: input,
        })) &&
        $vo0($report, input, _path + "", true)) ||
      $report(true, {
        path: _path + "",
        expected: "IMember",
        value: input,
      })
    );
  })
  return (input: unknown): typia.IValidation<IMember> => {
    const errors = [] as any[];
    if (false === __is(input)) {
      const $report = (typia.createValidate as any).report(errors);
      report($report, input, "$input", true);
    }
    const success = 0 === errors.length;
    return {
      success,
      errors,
      data: success ? input : undefined,
    } as any;
  };
})()

const bench = new Bench();
bench.add("cached - OK", () => {
  cacheValidator({
    id: "urn:uuid:00000000-0000-0000-0000-000000000000",
    name: "John Doe",
    age: 30,
  });
})
bench.add("no cached - OK", () => {
  noCacheValidator({
    id: "urn:uuid:00000000-0000-0000-0000-000000000000",
    name: "John Doe",
    age: 30,
  });
})
bench.add("cached - Error", () => {
  cacheValidator({
    id: "urn:uuid:00000000-0000-0000-0000-000000000000",
    name: "John Doe",
    age: 10,
  });
})
bench.add("no cached - Error", () => {
  noCacheValidator({
    id: "urn:uuid:00000000-0000-0000-0000-000000000000",
    name: "John Doe",
    age: 10,
  });
})

await bench.warmup();
await bench.run();

console.table(bench.table());