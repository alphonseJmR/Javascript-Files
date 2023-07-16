const returnRandomBase = input => {
    let random = Math.floor(Math.random() * input.length);
    return random;
}

/*

    This program is to create a mad-lib style response based on several different
    predetermined factors words.

*/

const randomSentance = () => {

let sentance = ''

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

sentance += greet();
sentance += ', ';
sentance += proChoice()
sentance += " may be "
sentance += adjChoice() + ' '
sentance += fanChoice()
sentance += " a "
sentance += verbChoice() + ' '
sentance += objChoice()
return sentance;
}

console.log(randomSentance())


const randomAstrology = () => {

    let newRandom = Math.floor(Math.random() * 365)
    console.log(newRandom)

    if(newRandom >= 356 || newRandom <= 18) {
        console.log('Capricorns:');
        console.log('Born Dec 22 - Jan 19:');
        console.log('Naturally known to be the most deviant of any living creature.  They will unknowningly to you play with your soul until it can feast upon the meal it spends so long cooking.');
    }else if(newRandom >= 19 && newRandom <= 48) {
        console.log('Aquarius');
        console.log('Born Jan 20 - Feb 18:');
        console.log('Creatures born betwixth these dates are alarmingly good in their sense of determination.  This is a double edge blade as they are likely to be determined to engage in relationships with q-tips.')
    }else if(newRandom >= 49 && newRandom <= 79) {
        console.log('Pices');
        console.log('Born Feb 19 - Mar 20:')
        console.log('GET DOWN!  Sorry.. I thought there was a Pices standing behind you.  That would have been absolutely terrifying.');
    }else if(newRandom >= 80 && newRandom <= 109) {
        console.log('Aries');
        console.log('Born Mar 21 - Apr 19:')
        console.log('It has never been fair the way you judge other peoples saggy bits.  They are people as well, and maybe one day, you will be just as saggy, you saggy sog sandwich.');
    }else if(newRandom >= 110 && newRandom <= 140) {
        console.log('Taurus');
        console.log('Born Apr 20 - May 20:')
        console.log('It is a collective objective that all known creatures born between these dates are in high likelihood to be stoners of any type.  Feel how you want about it.')
    }else if(newRandom >= 141 && newRandom <= 171) {
        console.log('Gemini');
    }else if(newRandom >= 172 && newRandom <= 203) {
        console.log('Cancer');
    }else if(newRandom >= 204 && newRandom <= 234) {
        console.log('Leo');
    }else if(newRandom >= 235 && newRandom <= 265) {
        console.log('Virgo');
    }else if(newRandom >= 266 && newRandom <= 295) {
        console.log('Libra');
    }else if(newRandom >= 296 && newRandom <= 325) {
        console.log('Scorpio');
    }else if(newRandom >= 325 && newRandom <= 355) {
        console.log('Sagittarius');
    }else {
        console.log('Random Number out of boundry');
    }

}
 
console.log(randomAstrology())