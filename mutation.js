const rand = () => {
    let randomNumber = Math.floor(Math.random() * 9);
    return randomNumber;
}

const genes = ['A', 'T', 'C', 'G'];
const geneSequence = () => {
    const smallRandom = () => {
        let small = Math.floor(Math.random() * 3);
        return small;
    }

    let geneProfile = [];
    let num = 0;

    for(let gl = 0; gl < 15; gl++) {
        num = smallRandom();

        if(num > 2){
             geneProfile[gl] = genes[3];
        }else 
        geneProfile[gl] = genes[num];
    }

    return geneSequence;
}

console.log(geneSequence(rand()));