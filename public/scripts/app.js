'use strict';

console.log('App.js is runnung');

//JSX - Javascript XML
var myApp = {
    title: 'Adams React App',
    subtitle: 'I am learning react',
    options: ['One', 'Two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        myApp.title
    ),
    myApp.subtitle && myApp.subtitle,
    React.createElement(
        'p',
        null,
        myApp.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'One'
        ),
        React.createElement(
            'li',
            null,
            'Two'
        )
    )
);

var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    )
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


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
