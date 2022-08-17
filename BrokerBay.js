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

const flattenObj = obj => {

    console.log(obj)

    let flat = {}
    for (let i in obj) {
        console.log(i)
        if (typeof obj[i] == 'object') {
            let flatObj = flattenObj(obj[i])
            for (let x in flatObj) {
                flat[i + "." + x] = flatObj[x]
            }
        } else {
            flat[i] = obj[i]
        }
    }
    console.log(flat)
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
