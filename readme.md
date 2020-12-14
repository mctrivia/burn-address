# burn-address

## Installation
``` bash
npm install burn-address
```

## Usage
``` javascript
const BurnAddress=require('burn-address');
let data=Buffer.from('a24cb6db1300b680fae12817ad68128459c12fa0f0e6b9d9243da6eea80367f5','hex');
let address=BurnAddress(data):
console.log(address);
```