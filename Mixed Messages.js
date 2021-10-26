// Zodiac Signs, Charcter traits and birth month

// Selecting Zodiac Sign
const zodiacSign = () => {
    const zodiacSignsArray = ['Virgo', 'Cancer', 'Arie', 'Capricon', 'Leo', 'Scorpio'];
    const randomNumber = Math.floor(Math.random() * zodiacSignsArray.length);
    return zodiacSignsArray[randomNumber]
}

// Selecting A Characrter trait
const characterTrait = () => {
    const characterTraitArray = ['Higly Intuitive', 'Bold and Ambitious',
    'Very Balanced', 'Passionate and Vivacious', 'Emotional and Local'];
    const randomNumber = Math.floor(Math.random() * characterTraitArray.length);
     return characterTraitArray[randomNumber]
}

// Selecting a month 
const birthMonth = () => {
    const birthMonthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
    const randomNumber = Math.floor(Math.random() * birthMonthArray.length);
    return birthMonthArray[randomNumber];
}

const mixedMessage = (arg1, arg2, arg3) => {
    console.log(`Your Zodiac sign is the ${arg1} and you are likely to be ${arg2}.\nYou were probably born in the month of ${arg3}. `)
}


mixedMessage(zodiacSign(), characterTrait(), birthMonth());