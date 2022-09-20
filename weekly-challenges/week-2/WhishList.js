/*
Santa wants to simplify his life and offer children the possiblity to enter their wishlist via an online form.

The form should be a React component and should contain:

an input field for the child's name (with id 'name')
a text area to describe the wish (id: 'wish')
a drop-down indicating the priority of the wish, from 1 to 5 - default is 1 (id: 'priority')
the keys in the state to store the corresponding values should be named the same as the element's id
an onSubmit action calling the function handleSubmit
a function called handleSubmit, which
calls send (a function that is already provided as part of the injected properties props)
passes the current state as a parameter to send
calls event.preventDefault
it should be a controlled component (i.e. using onChange to bind input to the component's state)
*/


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
        Name: <input type="text" id="name" value={this.state.name} onChange={this.handleNameChange}/>
        Wish: <textarea rows="10" cols="10" id="wish" value={this.state.wish} onChange={this.handleWishChange} />
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