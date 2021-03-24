const _ = {
    clamp(number, lowerBound, upperBound) {
        const lowerClampedValue = Math.max(number, lowerBound);
        const clampedValue = Math.min(lowerClampedValue, upperBound);
        return clampedValue;
    },
    inRange(number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }

        if (start > end) {
            let temp = end;
            end = start;
            start = temp;
    }
    let isInRange = start <= number && number < end;

    return isInRange;

    },
    words(aString) {
        
        let strin = aString.trim();
        let stri = strin.replace(/,/g, '');
        let str = stri.replace(" & ", " ");
        let string = str.replace(" and ", " ");
   
        // let stri = aString.replaceAll(",", "");
        const wordArray = string.split(" ");
        return wordArray;
    },
    pad(string, length) {
        
        const startingPaddingLength = Math.floor(Math.abs(string.length - length) / 2);
        const endPaddingLength = length - startingPaddingLength - string.length;
        const paddedstring = " ";
        if (string.length >= length) {
            return string;
        } 
        return paddedstring.repeat(startingPaddingLength) + string + paddedstring.repeat(endPaddingLength);
    },
    has(object, key) {
        return object[key] !== undefined ? true : false;
    },
    invert(object) {
        const invertedObject = {};
        for (const key in object) {
            const value = object[key];
            invertedObject[value] = key;
        }
        return invertedObject;
    },
    findKey(object, predicate) {
        for (const key in object) {
            const value = object[key];
            const predicateReturnValue = predicate(value);
            if (predicateReturnValue) {
                return key;
            }
        }
        return undefined;
    },
    drop(array, number) {
        if (number === undefined) {
            number = 1;
        }
        return array.slice(number, array.length);
    },
    dropWhile(array, predicate) {
        const dropNumber = array.findIndex((element, index) => {
            return !predicate(element, index, array);
        })
        const droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },
    chunk(array, size) {
        if (size === undefined) {
            size = 1;
        }
        let arrayChunks = [];
        for (let i = 0; i < array.length; i += size) {
           let arrayChunk = array.slice(i, i+size);
           arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }
}


// Do not write or modify code below this line.
module.exports = _;