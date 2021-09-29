// for comparisons between two arrays {

// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});
// -- comparison


// REGISTER

// regular expression for email (emailregex.com) lol
const reEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    
// regular expression for username
// all usernames must be 3-25 characters long, must include lowercase letters, -, _
const reUsername = /^([a-z0-9_-]){3,25}$/;

// regular expression for fullname
// all names must be 2-6 words long, all words must include a uppercase letter and 1-24 other characters, and apostrophes
const reFullname = /^(([A-Z])([a-z'àèìòù]|'[A-Z]){1,24}( )){1,5}(([A-Z])([a-z'àèìòù]|'[A-Z]){1,24})$/;    

// regular expression for password
// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


function pwSecure(password) {
    
    return re.test(password);
}

function fieldsSecure(obj) {
    
    // conditions
    if (!(Object.keys(obj).equals(['email', 'username', 'password', 'fullName', 'newsletter']))) {return 1;}
    if (!reUsername.test(obj.username)) {return 2;}
    if (!reFullname.test(obj.fullName)) {return 3;}

    return 0;
}

// it works!
myObj = {
    email: "email.leo.2000@gmail.com",
    username: "leo-bianconi",
    password: "elchApo&33A",
    fullName: "Leonardo Giovanni Dell'Arco Bianconi",
    newsletter: false
}
console.log(Object.keys(myObj));
console.log(fieldsSecure(myObj) === 0);
console.log(pwSecure(myObj.password))

module.exports = { pwSecure, fieldsSecure };