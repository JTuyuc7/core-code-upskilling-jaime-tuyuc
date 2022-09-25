

import React, { useState } from 'react';

/*
React code to build a simple search filter functionality to display a filtered list based on the search query entered by the user.
*/

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