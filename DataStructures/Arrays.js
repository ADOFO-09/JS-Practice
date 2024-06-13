const strings = ['a','b','c','d']

//push
strings.push('e'); // O(1)

//pop
strings.pop();  // O(n)

strings.unshift('f'); // O(n)

// O(n/2) but according to the rules of big O we remove constants
// making the time complexity O(n)
strings.splice(2,0, 'alien');   // splice

