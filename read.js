const crypto = require('crypto');
const fs = require('fs');

fs.readFile('AccountData', 'utf8', (err, data) => {
    if (err) throw err;

    const parsedData = JSON.parse(data);
    const rawDataSize = parsedData.rawDataSize;
    const encryptedBase64 = parsedData.encryptedBase64;

    const encryptionKey = Buffer.from('xxxxxxxxxxxxxxxx', 'utf8');
    const decipher = crypto.createDecipheriv('aes-128-ecb', encryptionKey, null);
    let decrypted = decipher.update(encryptedBase64, 'base64', 'utf8');
    decrypted += decipher.final('utf8');

    console.log('Decrypted Data:', decrypted);
    console.log('Raw Data Size:', rawDataSize);
});
