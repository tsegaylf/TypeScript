class Customer {
    private id: number;
    private name: string;

    get Id() { return this.id; }
    set Id(id: number) { this.id = id;}

    get Name(): string { return this.name; }
    set Name(name: string) {
        this.name = name;
    }

    constructor(id: number, name: string, public sales: number)
    // can set default values in constructor [public sales: number = 5000]
    {
        // can define properties in the constructor
        this.id = id;
        this.name = name;
        this.sales = sales;
    }

    log(): void {//methode just has the name and paran
        console.log(`Id is ${this.id}` 
            + `and name is ${this.Name}` +
        `and sales is ${this.sales}`);
    }
}
let c: Customer = new Customer(1, "Max", 1000);
c.log();

let custs: Customer[] = [];
// the type here is an array of customer instances
custs.push(c);

for (let cust of custs) {
    cust.log();
}