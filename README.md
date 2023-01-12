# NestJS Project with ESM Module setting

With this repository's configuration, transpiled source codes will be in ESM format import syntax.

이 리포지토리의 설정들을 사용하면, 트랜스파일된 소스코드들은 ESM 형식의 import 구문을 사용하게 될 것이다.

## Changed Settings - 바뀐 설정들

### `tsconfig.json`

```diff
{
  "compilerOptions": {
+   "module": "node16",
-   "module": "commonjs",
...
```

### `package.json`

```diff
{
  "name": "nest-esm",
+ "type": "module",
  "scripts": {
...
```

### `src/app.module.ts` and other Typescript source files - `src/app.module.ts` 와 다른 타입스크립트 파일들

Source code's import syntax is changed. Local typescript files should be imported with `.js` extension.

소스코드의 import 구문이 바뀌었다. `.js` 확장자를 붙여서 import 해야 한다.

source (출처): [Typescript Blog](https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#esm-nodejs:~:text=This%20code%20works,this%20for%20you.)

```diff
import { Module } from '@nestjs/common';
+ import { AppController } from './app.controller.js';
+ import { AppService } from './app.service.js';
- import { AppController } from './app.controller';
- import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## Additional Information - 추가 정보

- This repository uses Yarn Berry (v3) as package manager. - 이 리포지토리는 패키지 매니저로 Yarn Berry (v3) 를 사용한다.
- Yarn Berry's Plug'n'Play is enabled in this repository. - 이 리포지토리에서는 Yarn Berry의 Plug'n'Play 가 활성화되어 있다.
