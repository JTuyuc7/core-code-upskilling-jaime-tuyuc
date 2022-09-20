
# Challenges week - 2

* Is palindrome [File solution](./Palindrome.js)
```javascript
function isPalindrome(line) {
    let lower = line.toString().toLowerCase()
    const forward = lower
    const back = lower.split('').reverse().join('')
    return forward === back
}

console.log(isPalindrome('anna'))
console.log(isPalindrome('walter'))
console.log(isPalindrome(12321))
console.log(isPalindrome(123456))

// Output
// true
// false
// true
// false
```

* Well of ideas [File solution](./GoodBadIdeas.js)
```javascript
function well(x){
    let gIdeas = 0
    
    for(ele in x) {
        if(x[ele] === 'good') {
            gIdeas += 1
        }
    }
    
    if(gIdeas === 0 ){
        return 'Fail!'
    } else if ( gIdeas > 0 && gIdeas <= 2) {
        return 'Publish!'
    } else {
        return 'I smell a series!'
    }
    
}

console.log(well(['bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))

// Output
// Fail!
// Publish!
// I smell a series!
```

* Managing Events [File solution](./ManagingEvents.js)

```javascript
import React from 'react';

export class Counter extends React.Component {
    constructor(props) {
        // Your state
        super(props)
        this.state = {counter : 0}
    }
    
    // Your event handlers 
    handleIncCount = () => this.setState({counter: this.state.counter + 1})
    
    handleDecCount = () =>  this.setState({counter: this.state.counter - 1})
    
    render() {
        return (
        <div>
            <h1 id="counter">{this.state.counter}</h1>
            <button onClick={this.handleDecCount} id="decrement" type="button">
                Decrement
            </button>
            <button onClick={this.handleIncCount} id="increment" type="button">
                Increment
            </button>
        </div>
        )
    }
}
```

* Wish list [Solution file](./WhishList.js)

```javascript
const React = require("react");

class WishlistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', wish: '', priority: 1 };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleWishChange = this.handleWishChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleNameChange(e) {
        this.setState({name: e.target.value});
    }
    
    handleWishChange(e) {
        this.setState({wish: e.target.value});
    }
    
    
    handlePriorityChange(e) {
        this.setState({priority: e.target.value});
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.send(this.state);
    }
    
    
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
        <label>Name</label> <input type="text" id="name" value={this.state.name} onChange={this.handleNameChange}/>

        <label>Wish</label>
        <textarea id="wish" value={this.state.wish} onChange={this.handleWishChange} />
        <br />
        Wish Priority:
        <select value={this.state.priority} id="priority" onChange={this.handlePriorityChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
        </form>
        );
    }
};
```

* Easter Egg List [File solution](./EasterEggList.js)

```javascript
import React from 'react';

export const EggList = (props) => {
    return <ul >{props.eggs.map( (egg, i) => <EasterEgg name={egg} key={i} /> ) }</ul>
};

export const EasterEgg = (props) => {

    return <li key={props.i} >{props.name}</li>
};
```

* Pc upgrade specs [File solution](./Pc_upgrade_specs.js)

```javascript
const React = require('react');

// Don't change PcDisplay
const PcDisplay = (props) => {
    return (<div>
    <h1>{props.title}</h1>
    <p id="price">£{props.price}</p>
    <ul>
        <li><label>CPU</label> <span>{props.cpu}</span></li>
        <li><label>RAM</label> <span>{props.ram}</span></li>
        <li><label>SSD</label> <span>{props.ssd}</span></li>
    </ul>
    </div>);
};

let withPriceModel = (Component, price) => {
    return (props) => {
        return <Component
        title={ props.title }
        price={ 50 + price}
        cpu={ props.cpu}
        ram={props.ram}
        ssd={ props.ssd}
        />
    }
}

// Build basic and pro model components using `withPriceModel`
let BasicModel = withPriceModel(PcDisplay, 0)

let ProModel = withPriceModel(PcDisplay, 60)
```