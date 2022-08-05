const randomArrayValue = array => {
    let arrayIndex = Math.floor(Math.random() * array.length);
    return array[arrayIndex];
}

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
    '${getName()} ${getVerb()}ed the habits of ${getNoun()} and ${getPronoun()} advised ${getVerb()}ing till ${getPronoun()} were ${getVerb()} on the ${getNoun()} when the {getNoun()} before long would ${getVerb()} {getPronoun()} to sleep. ${getPronoun()} must then ${getVerb()} to ${getVerb()} off the ${getNoun()} and ${getVerb()} on the ${getNoun()}'
]