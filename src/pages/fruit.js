import { useParams } from 'react-router'
import {Link} from 'react-router-dom'

export function Fruit() {

    const { fruitId } = useParams()

    const fruits = [
        {
            name: 'manzana',
            id: 1
        },
        {
            name: 'naranja',
            id: 2
        },
        {
            name: 'banana',
            id: 3
        }
    ]


    function getFruit(fruitId) {
        if(fruitId){
            const myFruit = fruits.find((fruit) => fruit.name === fruitId)
            return myFruit;
        }
    }

    return (
        <main>
            <h1>Tus Frutas</h1>
            <p>{getFruit(fruitId).name}</p>
            {
                fruits.map(
                    fruit => <button><Link to={`/fruit/${fruit.name}`}>Fruta{fruit.name}</Link></button>
                )
            }
        </main>
    )
}