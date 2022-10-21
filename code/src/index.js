web3js = new Web3(web3.currentProvider);

startApp();

const userAccount = "0xA40ca7348298C657F5944332a72a5d2ae7A10417";

/*------------------------------------------------------------------------*/
function startApp() {
    var myContractAddress = "0xea9D0688B39e8b25589Af25014924604c414DEe4";
    var myABI = JSON.parse(`[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_scNetworkDataNonce",
				"type": "uint256"
			}
		],
		"name": "setscNetworkDataNonce",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_scNetworkTimestamp",
				"type": "uint256"
			}
		],
		"name": "setscNetworkTimestamp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_UserData",
				"type": "string"
			}
		],
		"name": "setscUserData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_scUserDataNonce",
				"type": "uint256"
			}
		],
		"name": "setscUserDataNonce",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_UserEmail",
				"type": "string"
			}
		],
		"name": "setscUserEmail",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_UserName",
				"type": "string"
			}
		],
		"name": "setscUserName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_scUserPubKey",
				"type": "uint256"
			}
		],
		"name": "setscUserPubKey",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_scUserTimestamp",
				"type": "uint256"
			}
		],
		"name": "setscUserTimestamp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_Sign1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Sign2",
				"type": "string"
			}
		],
		"name": "setSign",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_Sign1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Sign2",
				"type": "string"
			}
		],
		"name": "setSignNetwork",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "addressTostring",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes20",
				"name": "val",
				"type": "bytes20"
			}
		],
		"name": "bytes20ToString",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNetworkSign1",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNetworkSign2",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getscAddr",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getscAdress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getscHashCalc",
		"outputs": [
			{
				"internalType": "bytes20",
				"name": "",
				"type": "bytes20"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getscHashCalcStr",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getscHashCalcStrNetwork",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getscNetworkDataNonce",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getscNetworkTimestamp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getscUserData",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getscUserDataNonce",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getscUserEmail",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getscUserName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getscUserPubKey",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getscUserTimestamp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getSignature",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTimeStamp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUserAdd",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUserSign1",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUserSign2",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValSigns",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "scNetworkDataNonce",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "scNetworkTimestamp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "scUserData",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "scUserDataNonce",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "scUserEmail",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "scUserName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "scUserPubKey",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "scUserTimestamp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "scValSigns",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sign",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_i",
				"type": "uint256"
			}
		],
		"name": "uint2str",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
]`);
    contract = new web3js.eth.Contract(myABI, myContractAddress);

    var accountInterval = setInterval(function() { 
          if (web3.eth.accounts[0] !== userAccount) {
            userAccount = web3.eth.accounts[0];
          }
        }, 100);

}
/*------------------------------------------------------------------------*/


function getscUserEmail(){
    return contract.methods.getscUserEmail().call();
}
/*------------------------------------------------------------------------*/
function getscUserData(){
    return contract.methods.getscUserData().call();
}
/*------------------------------------------------------------------------*/
function getscAddr(){
    return contract.methods.getscAddr().call();
}
/*------------------------------------------------------------------------*/
function getUserAdd(){
    return contract.methods.getUserAdd().call();
}
/*------------------------------------------------------------------------*/
function getTimeStamp(){
    //attention, current block timestamp as seconds since unix epoch
    return contract.methods.getTimeStamp().call();
}
/*------------------------------------------------------------------------*/
function getscHashCalcStr(){
    return contract.methods.getscHashCalcStr().call();
}
/*------------------------------------------------------------------------*/
function sha1(msg) {
    function rotate_left(n,s) {
        var t4 = ( n<<s ) | (n>>>(32-s));
        return t4;
    };
    function lsb_hex(val) {
        var str='';
        var i;
        var vh;
        var vl;
        for( i=0; i<=6; i+=2 ) {
            vh = (val>>>(i*4+4))&0x0f;
            vl = (val>>>(i*4))&0x0f;
            str += vh.toString(16) + vl.toString(16);
        }
        return str;
    };
    function cvt_hex(val) {
        var str='';
        var i;
        var v;
        for( i=7; i>=0; i-- ) {
            v = (val>>>(i*4))&0x0f;
            str += v.toString(16);
        }
        return str;
    };
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g,'\n');
        var utftext = '';
        for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    };
    var blockstart;
    var i, j;
    var W = new Array(80);
    var H0 = 0x67452301;
    var H1 = 0xEFCDAB89;
    var H2 = 0x98BADCFE;
    var H3 = 0x10325476;
    var H4 = 0xC3D2E1F0;
    var A, B, C, D, E;
    var temp;
    msg = Utf8Encode(msg);
    var msg_len = msg.length;
    var word_array = new Array();
    for( i=0; i<msg_len-3; i+=4 ) {
        j = msg.charCodeAt(i)<<24 | msg.charCodeAt(i+1)<<16 |
        msg.charCodeAt(i+2)<<8 | msg.charCodeAt(i+3);
        word_array.push( j );
    }
    switch( msg_len % 4 ) {
        case 0:
            i = 0x080000000;
            break;
        case 1:
            i = msg.charCodeAt(msg_len-1)<<24 | 0x0800000;
            break;
        case 2:
            i = msg.charCodeAt(msg_len-2)<<24 | msg.charCodeAt(msg_len-1)<<16 | 0x08000;
            break;
        case 3:
            i = msg.charCodeAt(msg_len-3)<<24 | msg.charCodeAt(msg_len-2)<<16 | msg.charCodeAt(msg_len-1)<<8 | 0x80;
            break;
    }
    word_array.push( i );
    while( (word_array.length % 16) != 14 ) word_array.push( 0 );
    word_array.push( msg_len>>>29 );
    word_array.push( (msg_len<<3)&0x0ffffffff );

    for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {
        for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];
        for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);
        A = H0;
        B = H1;
        C = H2;
        D = H3;
        E = H4;
        for( i= 0; i<=19; i++ ) {
            temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }
        for( i=20; i<=39; i++ ) {
            temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }
        for( i=40; i<=59; i++ ) {
            temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }
        for( i=60; i<=79; i++ ) {
            temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }
        H0 = (H0 + A) & 0x0ffffffff;
        H1 = (H1 + B) & 0x0ffffffff;
        H2 = (H2 + C) & 0x0ffffffff;
        H3 = (H3 + D) & 0x0ffffffff;
        H4 = (H4 + E) & 0x0ffffffff;
    }
    var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
	
	//console.log("Result sha1 : " + temp.toLowerCase());
    return temp.toLowerCase();
}
/*------------------------------------------------------------------------*/
function getRandomKey(length) {
	var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var result = '';
	for ( var i = 0; i < length; i++ ) {
    	result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
	}
	//console.log("Result getRandomKey : " + result);
	return result;
}

//générer la clé privée:
const privateKey = getRandomKey(64); 
/*------------------------------------------------------------------------*/
function setPubKey(){
	var hash = sha1(privateKey).substring(0, 31);
	var pubKey = ethers.utils.formatBytes32String(hash);
    //var pubKey = web3.utils.asciiToHex(sha1(privateKey));
	contract.methods.setscUserPubKey(pubKey).send({ from: userAccount }).on("receipt", function(receipt) {
		console.log("Cle publique : " + pubKey);
    })
    .on("error", function(error) {
        // Si la transaction a échouée, on en informe l'utilisateur
        $("#txStatus").text(error);
    });
}
/*------------------------------------------------------------------------*/
function setUserName(name){
	contract.methods.setscUserName(name).send({ from: userAccount }).on("receipt", function(receipt) {
		console.log(name);
    })
    .on("error", function(error) {
        // Si la transaction a échouée, on en informe l'utilisateur
        $("#txStatus").text(error);
    });
}
/*------------------------------------------------------------------------*/
setscNetworkTimestamp
function setscNetworkTimestamp(timestamp){
	contract.methods.setscNetworkTimestamp(timestamp).send({ from: userAccount }).on("receipt", function(receipt) {
		console.log(timestamp);
    })
    .on("error", function(error) {
        // Si la transaction a échouée, on en informe l'utilisateur
        $("#txStatus").text(error);
    });
}
/*------------------------------------------------------------------------*/
function setscUserTimestamp(scUserTimestamp){
	contract.methods.setscUserTimestamp(scUserTimestamp).send({ from: userAccount }).on("receipt", function(receipt) {
		console.log("le timestamp généré dans le index.js"+scUserTimestamp);
    })
    .on("error", function(error) {
        // Si la transaction a échouée, on en informe l'utilisateur
        $("#txStatus").text(error);
    });
}
/*------------------------------------------------------------------------*/
function setUserEmail(email){
	contract.methods.setscUserEmail(email).send({ from: userAccount }).on("receipt", function(receipt) {
		console.log(email);
    })
    .on("error", function(error) {
        // Si la transaction a échouée, on en informe l'utilisateur
        $("#txStatus").text(error);
    });
}
/*------------------------------------------------------------------------*/
function setUserData(data){
	contract.methods.setscUserData(data).send({ from: userAccount }).on("receipt", function(receipt) {
		console.log(data);
    })
    .on("error", function(error) {
        // Si la transaction a échouée, on en informe l'utilisateur
        $("#txStatus").text(error);
    });
}
/*------------------------------------------------------------------------*/
function setscUserDataNonce(dataNonce){
	contract.methods.setscUserDataNonce(dataNonce).send({ from: userAccount }).on("receipt", function(receipt) {
		console.log(dataNonce);
    })
    .on("error", function(error) {
        // Si la transaction a échouée, on en informe l'utilisateur
        $("#txStatus").text(error);
    });
}
/*------------------------------------------------------------------------*/
function getscUserDataNonce(){
    return contract.methods.getscUserDataNonce().call();
}
/*------------------------------------------------------------------------*/
function strcmp(a, b) {
    if (a.toString() < b.toString()) return -1;
    if (a.toString() > b.toString()) return 1;
    return 0;
}
/*------------------------------------------------------------------------*/
function toHex(str) {
    var result = '';
    for (var i=0; i<str.length; i++) {
      result += str.charCodeAt(i).toString(16);
    }
    return result;
}
/*------------------------------------------------------------------------*/
function isEmpty(object) {
  for (const property in object) {
    return false;
  }
  return true;
}
/*------------------------------------------------------------------------*/
function setHash1(a) {
    hash1=a;
}


/*------------------------------------------------------------------------*/

var test;
var sign1; var sign2;
async function f() {

var name; var email; var data;
await contract.methods.getscUserName().call({from: userAccount}).then(function(receipt) {
		console.log(typeof receipt);
        console.log(receipt);
		name= receipt;

    }).then(() => console.log("Le name est test "+name));

await contract.methods.getscUserEmail().call({from: userAccount}).then(function(receipt) {
		console.log(typeof receipt);
        console.log(receipt);
		email= receipt;
    }).then(() => console.log("Email est "+email));

await contract.methods.getscUserData().call({from: userAccount}).then(function(receipt) {
		console.log(typeof receipt);
        console.log(receipt);
		data= receipt;
    }).then(() => console.log("data are "+data));

await contract.methods.getscUserDataNonce().call({from: userAccount}).then(function(receipt) {
			//console.log(typeof receipt);
			//console.log(receipt);
			dataNonce = receipt;

		}).then(() => console.log("Le dataNonce est test "+dataNonce));

  hash1 =  "0x" + sha1(name + email+ data+ String(dataNonce));

   var hash2; 

await contract.methods.getscHashCalcStr().call({from: userAccount}).then(function(receipt) {
		console.log(typeof receipt);
        console.log(receipt);
		hash2= receipt;
    }).then(() => console.log("hase2 are "+hash2));


    hash2 = hash2.substring(0, hash1.length);
	
	console.log("Hash1 : " + hash1 + " de type : " + typeof hash1);
	console.log("Hash2 : " + hash2 + " de type : " + typeof hash2);

	var res = strcmp(hash1, hash2);
	console.log("le resultat " +res);
	if (res == 0)
	{
		console.log("je suis la ");
		var sign = web3.eth.accounts.sign(hash2, privateKey);
		//set le time stamp après avoir généré la signature et l'utiliser dans la signature du network
		var timestampN = Math.round(new Date().getTime() / 1000);
		setscNetworkTimestamp(timestampN);
		console.log("time stamp network généré dans l'index.js est : "+timestampN);



	console.log(sign);
	console.log(sign.signature);
	console.log(sign.signature.length);
	console.log(typeof sign["signature"]);

	sign1 = await sign.signature.substring(0, 31);
	sign2 = await sign.signature.substring(32, 61);


	console.log("Dans la fonction "+ sign1 + " et " + sign2);
	}
 
 
}


async function getscUserName(){
	
var name; var email; var data;
await contract.methods.getscUserName().call({from: userAccount}).then(function(receipt) {
		console.log(typeof receipt);
        console.log(receipt);
		a=receipt;
	    console.log("a = "+a);
		name= receipt;

    }).then(() => console.log("Le name est test "+name));
contract.methods.getscUserEmail().call({from: userAccount}).then(function(receipt) {
		console.log(typeof receipt);
        console.log(receipt);
		email= receipt;
    }).then(() => console.log("Email est "+email));



contract.methods.getscUserData().call({from: userAccount}).then(function(receipt) {
		console.log(typeof receipt);
        console.log(receipt);
		data= receipt;
    }).then(() => console.log("data are "+data));



 
}


async function f1(){
	await f();
	await console.log("a l'extérieur "+ sign1 + " et " + sign2);
	//console.log(sign1);
	//console.log(typeof sign1);
	await contract.methods.setSign(sign1, sign2).send({ from: userAccount }).on("receipt", function(receipt) {
		console.log("Receipt" + receipt);
		console.log("setSign marche");
    })
    .on("error", function(error) {
        // Si la transaction a échouée, on en informe l'utilisateur
        $("#txStatus").text(error);
    });
}


console.log("*****");


dataNonce =Math.floor(Math.random() * (65454989898 - 300000 + 1)) + 1; 
setscUserDataNonce(dataNonce);

//correspond au nombre de millisecondes depuis le 1er janvier 1970
//const scUserTimestamp = Date.now();
//setscUserTimestamp(scUserTimestamp);

f1();
console.log("*****");





 /*
console.log("Le name est "+name);
console.log("Le name est test "+test);
*/


var d=f();
/*console.log("hash externe "+hash1);
console.log("d hash "+d);
*/
setUserName("Tom");
setUserEmail("tom.olivier@gmail.com");
setUserData("Ceci sont des données personnelles de Tom.");
setPubKey();

var hash3 = calcHash1().then(alert);
/*console.log("Return Hash 3 constant " + hash3);
console.log("Return Hash 1 variable " + hash1);
console.log("Return Hash 2 variable " + hash2);
console.log(typeof hash1);
*/

var i = 0;
var name = getscUserName();
var email = getscUserEmail();
var data = getscUserData();
while(isEmpty(name) || isEmpty(email) || isEmpty(data)){
	i++;
	console.log(i);
}
//console.log(name);
//console.log(email);
//console.log(data);
var hash1 = "0x" + sha1(name + email + data);
//console.log("Hash1 " + hash1);
