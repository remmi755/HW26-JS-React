import ReactDOM from 'react-dom';
import './index.css';
import React, {useState} from 'react'

const allWorkers = [
    {
        id: 1,
        name: "Vlad",
        lastName: "BoBs",
        days: 12,
        price: 15
    },
    {
        id: 2,
        name: "Greg",
        lastName: "Bolt",
        days: 25,
        price: 20
    },
    {
        id: 3,
        name: "Alex",
        lastName: "Rex",
        days: 15,
        price: 18
    }
]

const App = () => {

    const [workers, setWorkers] = useState(allWorkers);

    function change(prop, event, id) { // изменение input поля
        setWorkers(workers.map(obj => {
                if (obj.id === id) {
                    return {...obj, [prop]: event.target.value};
                } else {
                    return obj;
                }
            }
        ));
    }

    return <table>
        <thead>
        <tr>
            <td>Name</td>
            <td>LastName</td>
            <td>Days</td>
            <td>Price</td>
            <td>Salary</td>
        </tr>
        </thead>
        <tbody>
        {
            workers.map((obj) =>

                <tr key={obj.id}>
                    <td>{obj.name}</td>
                    <td>{obj.lastName}</td>
                    <td><input type="text" name="days" value={obj.days}
                               onChange={event => change('days', event, obj.id)}/></td>
                    <td><input type="text" name="price" value={obj.price}
                               onChange={event => change('price', event, obj.id)}/></td>
                    <td>{obj.days * obj.price}</td>

                </tr>
            )
        }
        </tbody>
    </table>;
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

export default App;

