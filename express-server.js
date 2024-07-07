const express = require('express');
const path = require('path');

const app = express();

// app.set('view engine', 'ejs');

// app.get('', (req, res)=>{
//     res.send(`
//         <h1>Hello World</h1>
//         <a href="about">About</a>
//     `);
//     res.send([
//         {
//             name: 'John',
//             age: 30
//         },
//         {
//             name: 'Roshan',
//             age: 21
//         },
//     ]);
// })

// app.get('/about', (req, res)=>{
//     res.send(`
//         <h1>About Page</h1>
//         <a href="/">Home</a>
//     `);

// })

// const publicPath = path.join(__dirname, "public");
// app.use(express.static(publicPath));

app.get('', (req, res)=>{
    res.sendFile(`${publicPath}/index.html`)
});

app.get('/about', (req, res)=>{
    res.sendFile(`${publicPath}/about.html`)
});

app.get('*', (req, res)=>{
    res.sendFile(`${publicPath}/not-found.html`)
});




// app.get('', (req, res)=>{
//     const user = { name: "Roshan", skills: ['Html', 'css', 'js'] }
//     res.render('index', {user});
// });
 

app.listen(80); 