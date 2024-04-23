class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Function to traverse the Trie
    traverse() {
        const results = [];
        this._dfs(this.root, '', results);
        return results;
    }

    // Helper function for DFS
    _dfs(node, path, results) {
        if (node.isEndOfWord) {
            results.push(path);
        }

        Object.keys(node.children).forEach(char => {
            this._dfs(node.children[char], path + char, results);
        });
    }

    insert(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }

    autocomplete(prefix) {
        let results = [];
        let current = this.root;

        // Find the node which represents the last letter of the prefix
        for (let char of prefix) {
            if (!current.children[char]) {
                return results;
            }
            current = current.children[char];
        }

        // Helper function to recursively find all words from this node
        const collectWords = (node, currentPrefix) => {
            console.log('--')
            if (node.isEndOfWord) {
                results.push(currentPrefix);
            }
            for (let char in node.children) {
                // console.log(node.children)
                console.log(char)
                console.log(currentPrefix)
                collectWords(node.children[char], currentPrefix + char);
            }
        };
        
        collectWords(current, prefix);
        return results;
    }
}

let trie = new Trie();
let keywords = ["pool", "clubhouse", "heated driveway", "walk-in pantry", "wall oven"];

keywords.forEach(word => trie.insert(word));


let prefix = "wa";
let matches = trie.autocomplete(prefix);
console.log(`Autocomplete results for "${prefix}":`, matches);
// console.log(trie.traverse())
// console.log(trie)
