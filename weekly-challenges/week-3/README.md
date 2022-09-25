# Challenges week - 3

* Build search filter in React
[Solution file](./Filter-react.js)

```javascript
import React, { useState } from 'react';

const Componente = (props) => {

    const tempList = [
        { id: 1, name: 'Banana'},
        { id: 2, name: 'Orange'},
        { id: 3, name: 'Pineapple'},
        { id: 4, name: 'Peach'},
        { id: 5, name: 'Watermelon'}
    ]

    const [ filter, setFilter ] = useState('');
    const [ list, setList ] = useState(tempList);

    const handleChange = (e) => {
        setFilter(e.target.value)
    }

    const filteredData = list.filter( (ele) => ele.name.toLowerCase().indexOf( filter.toLowerCase()) > -1 )

    return(
        <>
            <div>
                <input 
                    style={{
                        borderRadius: '10px',
                        padding: '15px'
                    }}
                    placeholder='Search something'
                    value={filter}
                    onChange={handleChange}
                />

                <div>
                    <ul
                        style={{ listStyle: 'none'}}
                    >
                        {filteredData.map( (ele) => (
                            <li key={ele.id}>{ele.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Componente;

// Output
## Image
![filterReact](https://user-images.githubusercontent.com/50525507/192135666-bf5b3add-582b-48b8-bdd4-4809139da8c2.png)

```

* Fetch Random Users
[File solution](./Fetch-users.js)

```javascript
import React, { useState, useEffect } from 'react';

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
// Output
## Image
![usersfetch2](https://user-images.githubusercontent.com/50525507/192135679-b0e65e4c-7881-4e0c-8ec8-ce762564364d.png)


```

* React Route blog
```javascript
    // Since this challenge uses more than 1 file and it uses also the react router dome packages, here will be only upload the video test
    
    
## Video test
https://user-images.githubusercontent.com/50525507/192135684-dcadafa0-b9c7-4af6-8bcc-d7b817182474.mp4



```

* Redux Lecture
```javascript
    // Lesson completed about redux, and also a recap about Context API
```
