# Typia Cached Fucntion Benchmark

This repository is benchmarked when caching with Typia's create* functions.

https://github.com/samchon/typia/issues/1190

| (index) | Task Name           | ops/sec     | Average Time (ns)  | Margin   | Samples |
| ------- | ------------------- | ----------- | ------------------ | -------- | ------- |
| 0       | 'cached - OK'       | '9,340,070' | 107.06557722464086 | '±0.65%' | 4670036 |
| 1       | 'no cached - OK'    | '2,336,021' | 428.07816022288165 | '±0.67%' | 1168011 |
| 2       | 'cached - Error'    | '4,019,449' | 248.79030713192148 | '±0.33%' | 2009725 |
| 3       | 'no cached - Error' | '1,069,736' | 934.8094580170683  | '±0.61%' | 534869  |
