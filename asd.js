const fetch = require('node-fetch');
var randomize = require('randomatic');

const functionRegist = () => new Promise((resolve, reject) => {
    const bodys = {
        "message":"dopamine Sun Aug 29 2021 15:26:22 GMT+0800",
        "address":`bc1q33tdu282duz8hr${randomize('a0', 25)}`,
        "signature":`${randomize('Aa0', 14)}/${randomize('Aa0', 14)}/${randomize('Aa0', 14)}+${randomize('Aa0', 14)}+Q=`,
        "referred_from_referral_code":"E7B8J4F7",
        "unique_device_id":randomize('Aa0', 16)
    }
   
       fetch('https://api.blockchain-infos.com/api/v1/sign-up/bitcoin', {
       
        method: 'POST', 
        body: JSON.stringify(bodys),
        headers: {
            'Host': 'api.blockchain-infos.com',
            'accept': 'application/json',
            'content-type': 'application/json',
            'content-length': 30,
            'accept-encoding': 'gzip',
            'user-agent': 'okhttp/3.12.12'
        }
       })
       .then(res => res.json())
       .then(result => {
           resolve(result);
       })
       .catch(err => reject(err))
});

(async () => {
    for (var i = 0; i < 1000; i++){
        try {
            const regist = await functionRegist()
            if(regist.meta.message == 'You are successfully logged in.'){
                console.log(`[+] Reff sukses !`)
            } else {
                console.log(`[!] Reff gagal !`)
            }
        } catch (e) {
            console.log(`[!] Error : ${e}`)
        }
    }
})();