class Person{
    constructor(){
        this.streetAddress = this.postcode = this.city = ''
        this.companyName = this.position = ''
        this.annualIncome = 0
    }

    toString(){
        return `Person lives at ${this.streetAddress}, ${this.city}, ${this.postcode}\n`
            + `and works at ${this.companyName} as a ${this.position} eraning ${this.annualIncome}`
    }
}

class PersonBuilder{
    constructor(person = new Person()){
        this.person = person
    }

    get lives(){
        return new PersonAddressBuilder(this.person)
    }

    get works(){
        return new PersonJobBuilder(this.person)
    }
    
    build(){
        return this.person
    }
}

class PersonJobBuilder extends PersonBuilder{
    constructor(person){
        super()
    }

    at(companyName){
        this.person.companyName = companyName
        return this
    }
    asA(position){
        this.person.position = position
        return this
    }
    earning(annualIncome){
        this.person.annualIncome = annualIncome
        return this
    }
}