const Api = {
     post: (url = '', params = {}, header) => {
        const post = new Promise((resolve, reject) => { 
            fetch(url, {
                method: 'POST',
                headers: header ? header : {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            })
            .then(res => {
                if(typeof res === 'object') {
                    reject(res);
                } else {
                    resolve(res.json());
                }
            })
            .catch(err => {
                reject(err);
            })
        });
        return post;
    }
/*
    get(url, params) {

    }

    put(url, params) {

    }

    delete(url, params) {

    }
*/
};

export default Api;