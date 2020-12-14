require('nodeunit');
const BurnAddress = require('../index');

module.exports = {
    'pot address': async function(test) {
        let address=BurnAddress(Buffer.from('a24cb6db1300b680fae12817ad68128459c12fa0f0e6b9d9243da6eea80367f5','hex'));
        test.equal(address,'PBURN9a1c5fccbdb62457aebo7d3jpFxzN');
        test.done();
    }
};

