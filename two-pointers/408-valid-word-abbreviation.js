const validWordAbbreviation = (word, abbr) => {
    let i = 0, j = 0;
    while (i < word.length && j < abbr.length) {
        let cw = word[i];
        let ca = abbr[j];
        if (ca == 0) return false;

        if (!isNaN(ca)) {
            let num = Number(ca);
            while ((j + 1) < word.length && !isNaN(abbr[j + 1])) {
                num = num * 10 + Number(abbr[j + 1]);
                j++;
            };

            i += num;
            j++;

        } else {
            if (cw != ca) return false;
            i++;
            j++;
        }
    }

    return (i == word.length && j == abbr.length);
}

//? Input: word = "internationalization", abbr = "i12iz4n"
//? Output: true
//? Explanation: The word "internationalization" can be abbreviated as "i12iz4n" ("i nternational iz atio n").

//? Input: word = "apple", abbr = "a2le"
//? Output: false
//? Explanation: The word "apple" cannot be abbreviated as "a2e".