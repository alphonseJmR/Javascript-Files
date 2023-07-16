const returnRandomBase = input => {
    let random = Math.floor(Math.random() * input.length);
    return random;
}

/*

    This program is to create a mad-lib style response based on several different
    predetermined factors words.

*/

const fanboys = ['for', 'and', 'nor', 'but', 'or', 'yet', 'so'];
const fanChoice = () => {
    let choice = (fanboys[returnRandomBase(fanboys)])
    return choice;
}

const pronouns = ['He', 'he', 'She', 'she', 'they', 'them', 'his', 'hers', 'theirs'];
const proChoice = () => {
    let pros = (pronouns[returnRandomBase(pronouns)])
    return pros;
}

const adjective = ['green', 'blue', 'slippery', 'rugged', 'tough', 'enormous', 'pitiful', 'fantastic', 
'beautiful', 'gassy', 'slightly', 'chalky', 'stinky', 'foul', 'metallic', 'shameful', 'festive',
'twelve', '10^e^6.016', 'wet', 'audible', 'balmy', 'calloused', 'deaf', 'enlarged', 'fragrent', 'gutted',
'haggered', 'insatiable', 'japanese', 'korean', 'laotian', 'malaysain', 'north american', 'oceanic', 'pearl', 'quite', 'realistic',
'sumptuous', 'tall', 'ultra-violet', 'venusian', 'watertight', 'yellow', 'zilch'];
const adjChoice = () => {
    let adjs = ''
    adjs = adjective[returnRandomBase(adjective)]
    return adjs;
}


const verbs = ['sacking', 'programming', 'pondering', 'alloting', 'bashing', 'crafting', 'deceiving', 
'eating', 'fumbling', 'grabbing', 'hambone', 'inking', 'jousting', 'klondiking', 'lementing', 'moaning', 'nagging',
'ordering', 'partying', 'queueing', 'roosting', 'stamping', 'terraforming', 'upchucking', 'vilifying',
'weakening', 'x-raying', 'yapping', 'zapping'];
const verbChoice = () => {
    let verb = (verbs[returnRandomBase(verbs)])
    return verb;
}

const objects = ['amphorah', 'basketball', 'cat', 'Doug', 'emerald', 'fan', 'garden', 'hoes', 'Ian', 
'job', 'klienbottle', 'lamintator', 'Megan', 'Nigel', 'open-source', 'picometer', 'quarters', 'resin', 'Stanford', 'turmeric',
'uvula', 'Vareena', 'xylophone', 'zebra'];
const objChoice = () => {
    let objs = (objects[returnRandomBase(objects)])
    return objs;
}

const greetings = ['Hello', 'Bonjour', 'Guten Tag', 'Marhaba', 'Ahoj', 'Hej', 'Salam', 'Dia dhuit', 
'Geia', 'Namaste', 'Ciao', 'Konichiwa', 'Anyeong haseyo', 'Salve', 'Ni hao', 'Namaskara', 'Privet',
'Hola', 'Halla', 'Swasdi', 'Assalamu Alaykum'];
const greet = () => {
    let greets = greetings[returnRandomBase(greetings)]
    return greets;
}


/*

    Madlib

        [greetings], 


*/

console.log(greet() + ', ' + proChoice(), adjChoice(), fanChoice(), verbChoice(), objChoice())