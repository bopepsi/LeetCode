/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {

    function Trie() {
        this.children = Array(26);
        this.isWord = false;
        this.word = '';
    }

    Trie.prototype.insert = function (word) {
        let node = this;
        for (const char of word) {
            let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!node.children[index]) {
                node.children[index] = new Trie();
            }
            node = node.children[index]
        }
        node.isWord = true;
        node.word = word;
    }

    Trie.prototype.search = function (word) {
        let node = this;
        for (const char of word) {
            let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!node.children[index]) {
                return word;
            }
            if (node.children[index]?.isWord) {
                return node.children[index].word;
            }
            node = node.children[index];
        }
        return word;
    }

    let root = new Trie();
    let ans = []
    for (const ele of dictionary) {
        root.insert(ele);
    }

    const wArr = sentence.split(' ');
    for (const w of wArr) {
        ans.push(root.search(w));
    }

    return ans.join(' ');

};

const dictionary = ["cat", "bat", "rat"], sentence = "the cattle was rattled by the battery"
console.log(replaceWords(dictionary, sentence))

//? Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
//? Output: "the cat was rat by the bat"

//? Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
//? Output: "a a b c"