[![Build Status](https://travis-ci.org/yc-angular/ratio.svg?branch=master)](https://travis-ci.org/yc-angular/ratio.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/yc-angular/ratio/badge.svg?branch=master)](https://coveralls.io/github/yc-angular/ratio?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# @yca/ratio

## Installation

1. Install the Ionic plugin
```
 npm i -S @yca/ratio
```

2. Add it to your app’s NgModule.

```typescript
// Import your library
import { RatioModule } from '@yca/ratio';

@NgModule({

  ...

  imports: [

    ...

    // Specify your library as an import
    RatioModule.forRoot()
  ],
  
  ...

})
export class AppModule { }
```

## Usage
Once your library is imported, you can use its directive in your Angular application:

```xml
<div [ycaRatio]="1"></div>
```

## Inputs
```ts
@Input() ratio: number = 1; // height = width * ratio
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

## License

MIT © [Yu Chen](mailto:yu.chen@live.ie)

