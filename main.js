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
    `A ${getNoun()} in Texas was arrested this morning after he ${getVerb()}ed a ${getNoun()} in front of ${getNoun()}. ${getName()}, had a history of ${getVerb()}, but no one-not even his ${getNoun()}-ever imagined he'd ${getVerb()} with a ${getNoun()}.`
];