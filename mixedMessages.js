const returnRandomBase = input => {
    let random = Math.floor(Math.random() * input.length);
    return random;
}
const randomSentance = () => {

  let sentance = ''
  
const fanChoice = () => {
  const fanboys = ['for', 'and', 'nor', 'but', 'or', 'yet', 'so'];
  
    let choice = (fanboys[returnRandomBase(fanboys)])
    return choice;
  }

const proChoice = () => {
  const pronouns = ['He', 'he', 'She', 'she', 'they', 'them', 'They', 'Them', 'His', 'Hers', 'his', 'hers', 'theirs', 'Theirs', 'Me', 'me', 'my', 'My', 'Mine', 'mine', 'I'];
  
    let pros = (pronouns[returnRandomBase(pronouns)])
    return pros;
  }

const adjChoice = () => {
  const adjective = ['green', 'blue', 'slippery', 'rugged', 'tough', 'enormous', 'pitiful', 'fantastic', 
'beautiful', 'gassy', 'slight', 'chalky', 'stinky', 'foul', 'metallic', 'shameful', 'festive',
'twelve', '10^e^6.016', 'wet', 'audible', 'balmy', 'calloused', 'deaf', 'enlarged', 'fragrent', 'gutted',
'haggered', 'insatiable', 'japanese', 'korean', 'laotian', 'malaysain', 'north american', 'oceanic', 'pearl', 'quite', 'realistic',
'sumptuous', 'tall', 'ultra-violet', 'venusian', 'watertight', 'yellow', 'zilch'];

    let adjs = ''
    adjs = adjective[returnRandomBase(adjective)]
    return adjs;
  }

const verbChoice = () => {
  const verbs = ['sacking', 'programming', 'pondering', 'alloting', 'bashing', 'crafting', 'deceiving', 
'eating', 'fumbling', 'grabbing', 'hambone', 'inking', 'jousting', 'klondiking', 'lementing', 'moaning', 'nagging',
'ordering', 'partying', 'queueing', 'roosting', 'stamping', 'terraforming', 'upchucking', 'vilifying',
'weakening', 'x-raying', 'yapping', 'zapping', 'adore', 'buttered', 'closed', 'dotted', 'effaced', 'flopped', 'gasped', 'held', 'ingrained',
'jabbed', 'killed', 'lingered', 'moralized', 'nicked', 'opened', 'patronize', 'quarter', 'retailate', 'summed',
'turned', 'unloaded', 'vitrify', 'wanking', 'yoddeling'];
  
    let verb = (verbs[returnRandomBase(verbs)])
    return verb;
  }

const objChoice = () => {
  const objects = ['amphorah', 'basketball', 'cat', 'Doug', 'emerald', 'fan', 'garden', 'hoes', 'Ian', 
'job', 'klienbottle', 'lamintator', 'Megan', 'Nigel', 'open-source', 'picometer', 'quarters', 'resin', 'Stanford', 'turmeric',
'uvula', 'Vareena', 'xylophone', 'zebra', 'algebra', 'brisket', 'caludron', 'dictionary', 'eggs', 'forest', 'gremlin',
'hostel', 'inquiry', 'Jakob', 'knife', 'ladder', 'morels', 'nettles', 'onions', 'port', 'quintessence', 'rubber-band',
'sliver', 'turntable', 'upside down duck', 'vanity', 'wrinkles', 'xenocide', 'yo-yo', 'zoologist'];
 
    let objs = (objects[returnRandomBase(objects)])
    return objs;
  }

  const greet = () => {
  const greetings = ['Hello', 'Bonjour', 'Guten Tag', 'Marhaba', 'Ahoj', 'Hej', 'Salam', 'Dia dhuit', 
'Geia', 'Namaste', 'Ciao', 'Konichiwa', 'Anyeong haseyo', 'Salve', 'Ni hao', 'Namaskara', 'Privet',
'Hola', 'Halla', 'Swasdi', 'Assalamu Alaykum'];

    let greets = greetings[returnRandomBase(greetings)]
    return greets;
  }

const joined = () => {
const joiners = [
    ' may be ',
    ' could do ',
    ' will have ',
    ' should be ',
    ' won\'t have ',
    ' could have ',
    ' will be ',
    ' couldn\'t have ',
    ' wouldn\'t be ',
    ' wouldn\'t have ',
    ' shall not ',
    ' shall not have ',
    ' shall not be ',
    ' will not have ',
    ' will have ',
    ' may not ',
    ' could not ',
    ' are not ',
    ' are ',
    ' can be ',
    ' cannot be ',
    ' can do ',
    ' cannot do ',
    ' is a ',
    ' is not a ',
    ' is ',
    ' is not ',
]
    let join = joiners[(returnRandomBase(joiners))]
    return join
}

sentance += greet();
sentance += ', ';
sentance += proChoice()
sentance += joined();
sentance += adjChoice() + ' '
sentance += fanChoice()
sentance += " a "
sentance += verbChoice() + ' '
sentance += objChoice()

return sentance;
}
const randomAstrology = () => {

    let newRandom = Math.floor(Math.random() * 365)

    const astrologicalFun = [
        'While is it true that creatures of this sign have severe disabilites, do not misjudge their ability to feel.  That\'s bad too.',
        'Naturally known for being good in social situations, they are the life of the party.  They are however dead, in bed.',
        'It\'s honestly hard to take your eyes off these creatures.  They are usually horribly misshapen.',
        'Today is not the day you should be a dick.  Unbind those anuses.',
        'Run.',
        'Formally netural, they suffer from severe internal battles.  Get a drink you alcoholic.',
        'My eighth ball says you will be, quote, "Aight dawg".',
        'Careful, you\'re probably about to get a papercut.',
        'These creatures may seem like hunched over dorks, and you\'re right, but don\'t say it.',
        'Seemingly dumb, and also not attractive, they do accel at things that have no tangible value.',
        'You need a support animal.  Probably just a stuffed one.',
        'These creatures likely have a stick hanging out their rears.  Help them out, kick it all the way up.',
        'Go check your ruler, something got bigger.. or smaller, depending on what you\'re looking for.',
        'Naturally known to be the most deviant of any living creature.  They will unknowningly to you play with your soul until it can feast upon the meal it spends so long cooking.',
        'Creatures born betwixth these dates are alarmingly good in their sense of determination.  This is a double edge blade as they are likely to be determined to engage in relationships with q-tips.',
        'GET DOWN!  Sorry.. I thought there was a Pices standing behind you.  That would have been absolutely terrifying.',
        'It has never been fair the way you judge other peoples saggy bits.  They are people as well, and maybe one day, you will be just as saggy, you saggy sog sandwich.',
        'It is a collective objective that all known creatures born between these dates are in high likelihood to be stoners of any type.  Feel how you want about it.',
        'Most frequently known for getting lost in funhouse mirror houses.  These creatures are in general of average intelligence.  Once in a while though, a real nitwit makes it in.',
        'These outdoorsy folks are commonly not known for ever having heard of their astrological sign, nor the common signs of skin cancer.  At least they are having fun.',
        'It is typically unclear what spectrum these creatures belong on.  Dangerous: AVOID.',
        'Most of these creatures have a hard time telling the difference between left and right.  So congratulations on not getting t-boned today...  Yet.',
        'The perculiar medical conditions, high blood flow nipples (resulting in very purple areolas during arousal), affect both male and female alike.',
        'Firey at heart, these creatures will happy cuddle you, you fall into the sweet loving and warm oblivion of their warm embrace.  It is not advised to stay in that embrace long, as they are known to melt your flesh into theirs.',
        'Born among the cold early nights (or days) creatures hailing from these time frames are not the most warm of heart.  Highly intelligent they are, because the cold enhances their natural processing powers.'
    ]

    if(newRandom >= 356 || newRandom <= 18) {
        return `
        Capricorns:\n
        Born Dec 22 - Jan 19: \n
        ${astrologicalFun[(returnRandomBase(astrologicalFun))]}
        `
    }else if(newRandom >= 19 && newRandom <= 48) {
        return `
        Aquarius:\n
        Born Jan 20 - Feb 18:\n
        ${astrologicalFun[(returnRandomBase(astrologicalFun))]}
        `
    }else if(newRandom >= 49 && newRandom <= 79) {
        return `
        Pices: \n
        Born Feb 19 - Mar 20: \n
        ${astrologicalFun[(returnRandomBase(astrologicalFun))]}
        `
    }else if(newRandom >= 80 && newRandom <= 109) {
        return `
        Aries: \n
        Born Mar 21 - Apr 19: \n
        ${astrologicalFun[(returnRandomBase(astrologicalFun))]}
        `
    }else if(newRandom >= 110 && newRandom <= 140) {
       return `
        Taurus: \n
        Born Apr 20 - May 20: \n
        ${astrologicalFun[(returnRandomBase(astrologicalFun))]}
        `
    }else if(newRandom >= 141 && newRandom <= 171) {
        return `
        Gemini: \n
        Born May 21 - Jun 20: \n
        ${astrologicalFun[(returnRandomBase(astrologicalFun))]}
        `
    }else if(newRandom >= 172 && newRandom <= 203) {
        return `
        Cancer: \n
        Born Jun 21 - Jul 22: \n
        ${astrologicalFun[(returnRandomBase(astrologicalFun))]}
        `
    }else if(newRandom >= 204 && newRandom <= 234) {
        return `
        Leo: \n
        Born Jul 23 - Aug 22: \n
        ${astrologicalFun[(returnRandomBase(astrologicalFun))]}
        `
    }else if(newRandom >= 235 && newRandom <= 265) {
       return `
        Virgo: \n
        Born Aug 23 - Sep 22: \n
        ${astrologicalFun[(returnRandomBase(astrologicalFun))]}
        `
    }else if(newRandom >= 266 && newRandom <= 295) {
        return `
        Libra: \n
        Born Sep 23 - Oct 22: \n
        ${astrologicalFun[(returnRandomBase(astrologicalFun))]}
        `
    }else if(newRandom >= 296 && newRandom <= 325) {
        return `
        Scorpio: \n
        Born Oct 23 - Nov 21: \n
        ${astrologicalFun[(returnRandomBase(astrologicalFun))]}
        `
    }else if(newRandom >= 325 && newRandom <= 355) {
        return `
        Sagittarius: \n
        Born Nov 22 - Dec 21: \n
        ${astrologicalFun[(returnRandomBase(astrologicalFun))]}
        `
    }else {
        console.log('Random Number out of boundry');
    }

}

const inspiringWords = () => {
const nonInspirations = [
    'Just stop.  You cannot do it.',
    'People are looking at you weird..  What did you do?',
    'You should really hide and give yourself a whiff.  Did you shower?',
    'Stop deep scratching your bunghole in the library.  You\'ll leave gross fingerprints on the pages.',
    'Dude, stop touching the controlling device.  Your fingers are grossly sticky.',
    'It is pretty clear why your mother doesn\'t love you anymore.',
    'Why did you have that ruler custom printed?  You know the one in your bathroom?',
    'Fine, I\'ll say what everyone is thinking.  Your haircut looks terrible.',
    'Yeesh, you\'re actually wearing that?  If only you could see my face right now.',
    'When you look deep into your eyes in the mirror.. can you see why you have no friends?',
    'The only thing more empty than you is your social circle.',
    'Even pigs feel bad for you.',
    'Your cats wouldn\'t even eat you if you died alone.',
    'It\'s time for you to hear it again.  No one cares.',
    'You, are so amazing.. at being a suckwaffle.',
    'Thrice used toilet paper isn\'t as shitty as you.',
    'The only useful thing you\'ll ever do is feed worms.',
    'It\'s time to be greatful.  For everyone else, knowing they aren\'t you.',
    'Is it normal for you to smell like you bathe in fermented durian fruit and sewage?',
    'You have the personality of a wasp, and the face of an angler fish.',
    'I wish I could apologize to everyone else for having to deal with you.',
    'You\'re as useful as a hydrophobic towel.',
    'You should be thankful the post office exists, the hospital didn\'t deliver you.',
    'You think you\'re lucky that you\'ve never had a flaming bag of poo on your doorstep.  You aren\'t worth the effort.',
    'Alright, give it back.  You\'re wasting that oxygen.',
    'You\'re the reason people say Hell on Earth.'
]

let todaysWords = nonInspirations[(Math.floor(Math.random() * nonInspirations.length))];
return todaysWords;
}

setTimeout(() => '', 850);

const statements = () => {
    return {
        randomSentence: randomSentance(),
        randomAstrology: randomAstrology(),
        randomInspirations: inspiringWords(),
        totalOutput() {
            return `
            \n Your random sentence for the day.\n ${this.randomSentence} \n
            \n Your random astrology fact: \n ${this.randomAstrology}\n
            \n Finally some inspiring words: \n ${this.randomInspirations} \n
            `
        }
    }
}

console.log(statements().totalOutput())