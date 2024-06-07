const crypto = require('crypto');
const fs = require('fs');

const AccountData = {
	"authToken": "TOKEN",
	"userData":
	{
		"uid": "123456",
		"userName": "foobar@gmail.com",
		"token": "TOKEN",
		"adjustUuid": "abc123",
		"deviceId": "abc123",
		"isGuest": false,
		"isNewUser": false,
		"isFirstTimeOpen": false,
		"bindInfo":
		{
		},
		"iOSPendingPurchases": [],
		"androidPendingPurchases": [],
		"configuration":
		{
			"image": ""
		},
		"priceInNg": 0,
		"goldAmount": 0,
		"boundGoldAmount": 0,
		"vipLevel": 0,
		"usdRate": "",
		"gameRoleId": "",
		"gameRoleName": "",
		"gameRoleLevel": "",
		"gameRoleServerName": ""
	}
}

const jsonString = JSON.stringify(AccountData);

const rawDataSize = Buffer.byteLength(jsonString, 'utf8');

const encryptionKey = Buffer.from('xxxxxxxxxxx', 'utf8');
const cipher = crypto.createCipheriv('aes-128-ecb', encryptionKey, null);
let encrypted = cipher.update(jsonString, 'utf8', 'base64');
encrypted += cipher.final('base64');

const outputObject = {
    rawDataSize: rawDataSize,
    encryptedBase64: encrypted
};

fs.writeFile('AccountData', JSON.stringify(outputObject, null, 2), (err) => {
    if (err) throw err;
    console.log('The data has been saved to AccountData file.');
});