delete console.table;
require("console.table");

// http://cseweb.ucsd.edu/~kube/cls/100/Lectures/lec16/lec16.html

const hash = function(key) {
    let hashVal = 0,
        len = key.length,
        i;
    for (i = 0; i < len; i += 1) {
        hashVal += key.charCodeAt(i);
    }
    return hashVal;
};

// console.log(hash("Lesley Montilla"));

const hashCode = function(string) {
    let h = 0,
        len = string.length,
        i;

    for (i = 0; i < len; i += 1) {
        h = 31 * h + string.charCodeAt(i);
        h = h & h;
    }

    return Math.abs(h);
};

// console.log(hashCode("Lesley Montilla"));

/** java code unable to translate to javascript
long hash(char* key) {
	long hashVal = 0;
	while (*key != ’/0’) {
		hashVal = (hashVal << 4) + *(key++);
		long g = hashval & 0xF0000000L;
		if (g != 0) hashVal ^= g >>> 24;
		hashVal &= ~g;
	}
	return hashVal;
}		
*/

function exerciseOne() {
    /**
     * Simple hash method H(K) = K mod M
     * Where M is the length of the model
     * K is the key
     *
     * The hash is simple as key modules
     *
     * Note: this hash will create many collisions
     */

    function Map() {
        this.table = new Array(7);
    }

    Map.prototype.simpleHash = function(k) {
        return k % this.table.length;
    };

    Map.prototype.set = function(k) {
        let hash = this.simpleHash(k);
        this.table[hash] = k;
    };

    const keys = [701, 145, 217, 19];
    const hashMap = new Map();

    for (let i = 0; i < keys.length; i += 1) {
        hashMap.set(keys[i]);
    }

    console.table(hashMap);
}

// exerciseOne();

function exerciseTwo() {
    /**
	 * Linear probing: inserting a key
	 * M = 7, H(K) = K mod M
	 * insert these keys 701, 145, 217, 19, 13, 749
	 * 
	 * @Link http://cseweb.ucsd.edu/~kube/cls/100/Lectures/lec16/lec16-20.html
	 */

    function Map() {
        this.table = new Array(7);
    }

    Map.prototype.simpleHash = function(k) {
        return k % this.table.length;
    };

    Map.prototype.set = function(k) {
		let hash = this.simpleHash(k);
		let length = this.table.length;

		while(this.table[hash % length] !== undefined) {
			if(this.table[hash % length] === k) return;
			hash+=1;
		}

		this.table[hash % length] = k;
	};

	// http://cseweb.ucsd.edu/~kube/cls/100/Lectures/lec16/lec16-22.html
	Map.prototype.find = function(k) {
		let hash = this.simpleHash(k);
		let length = this.table.length;

		let i;
		for(i = 0; i < length; i+=1) {
			if(this.table[hash % length] === undefined) {
				return "Not Found";
			}
			else if (this.table[hash % length] === k) {
				return "Found Key"
			}
		}

		return "Not Found";
	}

	Map.prototype.delete = function(k) {
		let hash = this.simpleHash(k);
		let length = this.table.length;

		let i;
		for(i = 0; i < length; i+=1) {
			if(this.table[hash % length] === undefined) {
				return "Not Found";
			}
			else if (this.table[hash % length] === k) {
				this.table[hash % length] = undefined;
				return "Delete Key";
			}
		}

		return "Not Found";
	}


    const keys = [701, 145, 217, 19, 13, 749];
    const hashMap = new Map();

    for (let i = 0; i < keys.length; i += 1) {
        hashMap.set(keys[i]);
    }

	console.table(hashMap);

	console.log(hashMap.find(702));
	console.log(hashMap.find(701));

}

// exerciseTwo();

function exerciseThree() {
	/**
	 * Double hashing
	 * 
	 * M, H 2 (K) 
	 * H2(K) = 1 + ( (K/M) mod (M-1) )
	 * 
	 * @Link http://cseweb.ucsd.edu/~kube/cls/100/Lectures/lec16/lec16-23.html
	 */

	function Map() {
        this.table = new Array(7);
    }

    Map.prototype.simpleHash = function(k) {
        return k % this.table.length;
	};
	
	Map.prototype.offset = function(k) {
		let length = this.table.length;
		return (1 + (k / length) % (length - 1));
	}

    Map.prototype.set = function(k) {
		let hash = this.simpleHash(k);
		let length = this.table.length;
		let index = 0;

		if(this.table[hash] === undefined) {
			this.table[hash] = k;
			return;
		}
		else if (this.table[hash] === k) {
			return;
		}
		else {
			//Double the hash
			while(this.table[hash % length] !== undefined) {
				let index = (~~(hash + this.offset(k))) % length;
				if(this.table[index] === undefined) {
					this.table[index] = k;
				}
			}
		}

		return "Table out of room";

	};


	const keys = [701, 145, 217, 19, 13, 749];
    const hashMap = new Map();

    for (let i = 0; i < keys.length; i += 1) {
        hashMap.set(keys[i]);
    }

	console.table(hashMap);
}

// exerciseThree();

function exerciseFour() {
	// TODO http://cseweb.ucsd.edu/~kube/cls/100/Lectures/lec16/lec16-30.html
}