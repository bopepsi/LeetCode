var Trie = function () {
    this.children = Array(26);
    this.isWord =false;
    this.word = '';
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this;
    for(let i = 0; i<word.length;i++){
        let index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if(!node.children[index]){
            node.children[index] = new Trie()
        }
        node = node.children[index];
    }
    node.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this;
    for(let i = 0; i< word.length;i++){
        let index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if(!node.children[index]){
            return false;
        }
        node = node.children[index];
    }
    return node.isWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this;
    for(let i = 0; i<prefix.length;i++){
        let index = prefix[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if(!node.children[index]){
            return false;
        }
        node = node.children[index];
    }
    return true;
};

const  trie = new Trie();
console.log(trie)
trie.insert("apple");
trie.search("apple");   
trie.search("app");     
trie.startsWith("app"); 
trie.insert("app");
trie.search("app");     

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

//?  Input
//?  ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
//?  [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
//?  Output
//?  [null, null, true, false, true, null, true]
 
//?  Explanation
//?  Trie trie = new Trie();
//?  trie.insert("apple");
//?  trie.search("apple");   // return True
//?  trie.search("app");     // return False
//?  trie.startsWith("app"); // return True
//?  trie.insert("app");
//?  trie.search("app");     // return True
