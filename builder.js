class Tag{
    static get indentSize() {
        return 2
    }
    constructor(name='', text=''){
        this.name = name
        this.text = text
        this.children = []
    }
    toStringImpl(indent){
        let html = []
        let i = ' '.repeat(indent * Tag.indentSize)
        html.push(`${i}<${this.name}>\n`)
        if (this.text.length > 0){
            html.push(' '.repeat(Tag.indentSize * (indent + 1)))
            html.push(this.text)
            html.push('\n')
        }
    }
    toString(){
        return this.toStringImpl(0)
    }
}
class HtmlBuilder{
    constructor(rootName){
        this.root = new Tag(rootName)
        this.rootName = rootName
    }
}
const hello = 'hello'
let html = []
html.push('<p>')
html.push(hello)
html.push('</p>')
console.log(html.join(''));

const words = ['hello', 'world']
html = []
html.push('<ul>\n')
for (let word of words)
    html.push(`  <li>${word}</li>\n`)
html.push('</ul>')
console.log(html.join(''));
