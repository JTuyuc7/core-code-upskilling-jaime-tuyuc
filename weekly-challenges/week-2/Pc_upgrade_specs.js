/*
    Challenge
You're building a new feature on your e-commerce site which displays two computer specs - basic and pro.

The PcDisplay component is already built and expects 5 props. { title, price, cpu, ram, ssd }

You will need to build a withPriceModel HOC and using that to manage the price of the BasicModel and ProModel components.

Build a HOC called withPriceModel which takes the PcDisplay component for first param and price increase number for the second param.

withPriceModel will manage the price and must set a default price of 50.

BasicModel should use the default price set by withPriceModel

ProModel should use withPriceModel to increase the price by 60. Total price should be 110.

Since the withPriceModel is responsible for managing the price, ensure that it can't be overritten by passing in a price prop.
*/
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