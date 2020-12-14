const base58check=require('base58check');
const bs58 = require('bs58');
const crypto = require('crypto');

const coins={
    pot:    {
        prefix: "PBURN",
        hex:    "37"
    }
}



/**
 * Creates a burn address.  prefix is hex string.  '37'=P
 * @param {string} coin
 * @param {Buffer} value
 * @return {string}
 */
module.exports=(value,coin="pot")=>{
    let index=crypto.createHash('sha256').update(value).digest('hex').substr(0,23).padStart(23,'0').replace(/[0]/g,'o');

    // noinspection JSCheckFunctionSignatures
    let testStr=coins[coin].prefix+index+'oooooo';
    let bytes=bs58.decode(testStr);
    let hex='';
    for (let i=1;i<21;i++) hex+=bytes[i].toString(16).padStart(2,'0');
    return base58check.encode(hex,coins[coin].hex);
}