let test = {
    "Key1": "1",
    "Key2": {
        "a": "2",
        "b": "3",
        "c": {
            "d": { "x": { "y": "10" } },
            "e": "1"
        }
    }
}

const flat = obj => {
    let res = {};
    for (let k1 in obj) {
        if (typeof obj[k1] === 'object') {
            let flattedObj = flat(obj[k1]);
            for (let k2 in flattedObj) {
                res[k1 + '.' + k2] = flattedObj[k2];
            }
        } else {
            res[k1] = obj[k1];
        }
    }
    return res;
}

const flattenObj = obj => {

    let flat = {}
    for (let i in obj) {

        if (typeof obj[i] == 'object') {
            let flatObj = flattenObj(obj[i])
            for (let x in flatObj) {
                flat[i + "." + x] = flatObj[x]
            }
        } else {
            flat[i] = obj[i]
        }
    }

    return flat

}

console.log(flattenObj(test))

const readFilePromise = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, options, (err, data) => {
            if (err) return reject(err)
            resolve(data)
        })
    })
}

// const asyncUpperCase = (name, callback) => {
// 	setTimeout(() => {
// 		if (!name) return callback(new Error('no first name passed in!'))
// 		return callback( name.toUpperCase())
// 	}, 2000)
// }

const asyncUpperCase = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!name) return reject(new Error('no name!'))
            return resolve(name);
        }, 1000)
    })
}

const prettyPrint = (word) => {
    console.log(`lala${word}lala`)
}

let p = asyncUpperCase('BB').then(val => prettyPrint(val));
console.log(p);
