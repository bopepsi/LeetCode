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