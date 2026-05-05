function checkForSpam(message) {
    const lowMessage = message.toLowerCase();
    const bulWord1 = "spam";
    const bulWord2 = "sale";

    const hasWord1 = lowMessage.includes("spam");
    const hasWord2 = lowMessage.includes("sale");
    const hasbulWords = hasWord1 || hasWord2;

    return hasbulWords;
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
