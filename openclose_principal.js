let Color = Object.freeze({
    red: 'red',
    green: 'green',
    blue: 'blue'
})

let Size = Object.freeze({
    small:'small',
    medium:'medium',
    large:'large',
})

class Product{
    constructor(name, color, size){
        this.name = name
        this.color = color
        this.size = size
    }
}

// define a simple filter for products
class ProductFilter{
    filterByColor(products, color){
        return products.filter(p => p.color === color)
    }
    filterBySize(products, size){
        return products.filter(p => p.size === size)
    }

    // Avoid as the SOLID principal - open for extension, closed for modification
    // state space explosion
    filterBySizeAndColor(products, size, color){
        return products.filter(p => p.size === size && p.color === color)
    }
}

// the better approach is divide filters into single class  
class ColorSpecification{
    constructor(color){
        this.color = color
    }
    isSatisfied(item){
        return item.color === this.color
    }
}

class SizeSpecification{
    constructor(size){
        this.size = size
    }
    isSatisfied(item){
        return item.size === this.size
    }
}

// the and logic for filter
class AndSpecification{
    constructor(...specs){
        this.specs = specs
    }
    isSatisfied(item){
        return this.specs.every(x => x.isSatisfied(item))
    }
}

// define products
let apple = new Product('Apple', Color.green, Size.small)
let tree = new Product('Tree', Color.green, Size.large)
let house = new Product('House', Color.blue, Size.large)
let products = [apple, tree, house]

console.log(`Green products (old):`)
let pf = new ProductFilter()
for (let p of pf.filterByColor(products, Color.green))
    console.log(` * ${p.name} is green`);
    
// Better approach based on SOLID principal
class BetterFilter{
    filter(items, specs){
        return items.filter(x => specs.isSatisfied(x))
    }
}

console.log(`Green products (new):`)
let bf = new BetterFilter();
for (let p of bf.filter(
    products,
    new ColorSpecification(Color.green)))
    console.log(` * ${p.name} is green`);
    
console.log(`Large and green products:`);
let spec = new AndSpecification(
    new ColorSpecification(Color.green),
    new SizeSpecification(Size.large)
)
for (let p of bf.filter(products, spec))
    console.log(` * ${p.name} is large and green`)