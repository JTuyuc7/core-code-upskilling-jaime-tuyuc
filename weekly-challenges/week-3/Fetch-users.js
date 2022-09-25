import React, { useState, useEffect } from 'react';
/*
    React code to fetch from this API random users. You should display the Name, website, email and phone of a random user. Also there should be a Reset button to fetch a new user (For this you need to generate a random number from 1 to 10).
*/

const FecthUsersComponent = () => {

    const [ randomN, setRandomN ] = useState(1);
    const [ randomUser, setRandomUser ] = useState({})

    const generateNewNumber = () => {
        const randomNumber = Math.floor( Math.random() * 10 );
        setRandomN(randomNumber)
    }

    const fetchRandomUser = () => {
        let url = `https://jsonplaceholder.typicode.com/users/${randomN}`;

        fetch(url).then( (res) => res.json()).then( (data) => setRandomUser(data) )
        
    }

    useEffect(() => {
        fetchRandomUser()
    }, [randomN])

    console.log(randomUser, 'random');
    return(
        <div>
            <h1>Fetch Random users</h1>

            <button style={{ padding: '20px', backgroundColor: 'purple', color: 'white', fontWeight: 'bold', borderRadius: '10px'}} onClick={generateNewNumber}>Get new user</button>
            <div>
                <h2>User Data</h2>
                <h3>Name: <span style={{ fontWeight: 'normal' }}> {randomUser.name}</span> </h3>
                <h3>Website: <span style={{ fontWeight: 'normal' }}> {randomUser.website}</span> </h3>
                <h3>Email: <span style={{ fontWeight: 'normal' }}> {randomUser.email}</span> </h3>
                <h3>Phone: <span style={{ fontWeight: 'normal' }}> {randomUser.phone}</span> </h3>
            </div>
        </div>
    )
}

export default FecthUsersComponent;