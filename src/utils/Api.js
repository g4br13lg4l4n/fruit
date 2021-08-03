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
                if(res.status === 200 || res.status === 201) {
                    resolve(res.json());
                } else {
                    reject(res);
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