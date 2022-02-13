import './App.css';
import Simpson from './components/Simpson';

const simpsons = [
    {
        id: 1,
        name: 'bart',
        pic: 'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif',
        styleClass: 'foo'
    },
    {
        id: 2,
        name: 'homer',
        pic: 'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png',
        styleClass: 'bar'
    },
    {
        id: 3,
        name: 'lisa',
        pic: 'https://chpic.su/_data/stickers/l/lisasimpsonstickers/lisasimpsonstickers_005.webp',
        styleClass: 'foo'
    }
]

function App() {
    return (
        <div className="App">
            <h1>react intro lesson</h1>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet, autem commodi, doloribus eligendi eos
                eveniet expedita inventore itaque molestiae neque officiis possimus praesentium provident quis sint
                sunt, voluptate voluptatum?
            </p>

            {
                simpsons.map(value =>
                    <Simpson
                        key={value.id}
                        name={value.name}
                        pic={value.pic}
                        styleClass={value.styleClass}
                    />)
            }
        </div>
    );
}

export default App;
