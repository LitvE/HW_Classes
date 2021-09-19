
class Author {
    static authorsAmount = 0;
    static worksAmount = 0;

    constructor (name, surname){
        this.name = name;
        this.surname = surname;
        this.works = [];
        Author.authorsAmount++;
    }

    addWork(work){
        if(!this.works.includes(work)){
            this.works.push(work);
            Author.worksAmount++;
        } else {
            console.log('This work is already existed!');
        }
    }

    static getAmount (){
        console.log(`Number of Authors: ${this.authorsAmount} and number of Works: ${this.worksAmount} `);
    }

    printAuthor (){
        console.log(`Author: ${this.name} ${this.surname}`);
    }

    printAuthorWorksAmount (){
        console.log(`Author: ${this.name} ${this.surname}, works number: ${this.works.length}`);
    }

    printAuthorAllWorks (){
        console.log(`Author: ${this.name} ${this.surname}, his works: `);
        this.works.forEach(work => {
            console.log(work); 
         });
    }
}

let testAuthor1 = new Author('Isaac', 'Asimov');

testAuthor1.addWork('Foundation');
testAuthor1.addWork('Foundation and Empire');
testAuthor1.addWork('Second Foundation');
testAuthor1.addWork("Foundation's Edge");
testAuthor1.addWork('Prelude to Foundation');
testAuthor1.addWork('Foundation and Earth');
testAuthor1.addWork('Forward the Foundation');

Author.getAmount();

testAuthor1.printAuthor();

testAuthor1.printAuthorWorksAmount();

testAuthor1.printAuthorAllWorks();


