const randomArrayValue = array => {
    let arrayIndex = Math.floor(Math.random() * array.length);
    return array[arrayIndex];
};

const getStory = () => console.log(randomArrayValue(stories));

const getName = () => randomArrayValue(names);
const getNoun = () => randomArrayValue(nouns);
const getVerb = () => randomArrayValue(verbs);
const getAdjective = () => randomArrayValue(adjectives);
const getAdverb = () => randomArrayValue(adverbs);
const getPronoun = () => randomArrayValue(pronouns);

const getPastVerb = () => {
    let verb = randomArrayValue(verbs);
    if (verb[verb.length -1] === 'e') {
        return `${verb}d`
    } else {
        return `${verb}ed`
    };
};

const getPreVerb = () => {
    let verb = randomArrayValue(verbs);
    if (verb[verb.length - 1] === 'e') {
        return `${verb.slice(0, (verb.length - 1))}ing`
    } else {
        return `${verb}ing`
    };
};

const getPluralN = () => {
    let noun = randomArrayValue(nouns);
    if (noun[noun.length - 1] === 's' || noun[noun.length - 1] === 'z' || noun[noun.length - 1] === 'x') {
        return `${noun}es`;
    } else if (noun.slice(noun.length - 2) === 'ss' || noun.slice(noun.length - 2) === 'sh' || noun.slice(noun.length - 2) === 'ch') {
        return `${noun}es`;
    } else {
        return `${noun}s`;
    };
};

// capitalize first letter of string
const cap = string => string.charAt(0).toUpperCase() + string.slice(1);

const names = [
    'Beyonce', 'Simon Cowell', 'Uhtred son of Uhtred', 'Nancy Pelosi', 'Henry Cisneros'
]

const nouns = [
    'jackal', 'sandwich', 'scooter', 'crayon', 'microphone', 'monkey', 'fish', 'motorcycle', 'lizard', 'xylophone'
]

const verbs = [
    'announce', 'bake', 'collect', 'dance', 'exercise', 'fly', 'guess', 'help', 'jump', 'laugh'
]

const adjectives = [
    'abrasive', 'greasy', 'reprehensible', 'harmless', 'rhythmic', 'scrappy', 'imaginary', 'biased', 'charming', 'tepid'
]

const adverbs = [
    'bravely', 'cheerfully', 'deftly', 'gracefully', 'warmly', 'lazily', 'rudely', 'wearily', 'quickly', 'leisurely'];

const pronouns = [
    'he', 'she', 'they', 'we', 'it', 'I', 'you'];

const stories = [
    `A ${getNoun()} in Texas was arrested this morning after he ${getPastVerb()} a ${getNoun()} in front of a ${getNoun()}. ${getName()} had a history of ${getPreVerb()}, but no one-not even his ${getNoun()}-ever imagined he'd ${getVerb()} with a ${getNoun()}. Credit: MadLibs`,
    `${getName()} ${getPastVerb()} the habits of ${getNoun()} and ${getPronoun()} advised ${getPreVerb()} till ${getPronoun()} were ${getPreVerb()} on the ${getNoun()} when the ${getPluralN()} before long would ${getVerb()} ${getPronoun()} to sleep. ${cap(getPronoun())} must then ${getVerb()} to ${getVerb()} off the ${getNoun()} and ${getVerb()} on the ${getPluralN()}. Credit: The Mysterious Island by Jules Verne`
];

getStory();