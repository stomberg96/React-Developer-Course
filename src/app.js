console.log('App.js is runnung');

//JSX - Javascript XML
const myApp = {
    title: 'Adams React App',
    subtitle: 'I am learning react',
    options: ['One', 'Two']
};
const template = (
    <div>
        <h1>{myApp.title}</h1>
        {myApp.subtitle && myApp.subtitle}
        <p>{myApp.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
        <li>One</li>
        <li>Two</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    console.log('addOne');
}
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
    </div>
);
console.log(templateTwo);


// const user = {
//     name: "Adam",
//     age: 23,
//     location: "RI"
// };
// function getLocation(location) {
//     if(location){
//         return <p>Location: {location}</p>;
//     }
// }
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// )


const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);