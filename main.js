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
    `A ${getNoun()} in Texas was arrested this morning after he ${getVerb()}ed a ${getNoun()} in front of a ${getNoun()}. ${getName()} had a history of ${getVerb()}ing, but no one-not even his ${getNoun()}-ever imagined he'd ${getVerb()} with a ${getNoun()}. Credit: MadLibs`,
    `${getName()} ${getVerb()}ed the habits of ${getNoun()} and ${getPronoun()} advised ${getVerb()}ing till ${getPronoun()} were ${getVerb()} on the ${getNoun()} when the ${getNoun()} before long would ${getVerb()} ${getPronoun()} to sleep. ${cap(getPronoun())} must then ${getVerb()} to ${getVerb()} off the ${getNoun()} and ${getVerb()} on the ${getNoun()}. Credit: The Mysterious Island by Jules Verne`
];

getStory();