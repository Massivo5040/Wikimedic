// const fs = require("fs");
// const sect = [
//   {
//     fileName: "pediatria",
//     name: "PEDIATRIA",
//     title1: "A IMPORTÂNCIA DOS CUIDADOS PEDIÁTRICOS",
//     title2: "MEDICAMENTOS PEDIÁTRICOS",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices convallis lectus, a varius orci gravida quis. Nunc non velit non neque lobortis dignissim. Phasellus efficitur mi mattis commodo ultricies.",
//     header_bg: "../img/pediatria_bg.png",
//     img1: "../img/pediatria1.png",
//     img2: "../img/pediatria2.png",
//     img3: "../img/pediatria3.png",
//   },
//   {
//     fileName: "fitoterapicos",
//     name: "FITOTERÁPICOS",
//     title1: "A IMPORTÂNCIA DOS CUIDADOS PEDIÁTRICOS",
//     title2: "MEDICAMENTOS PEDIÁTRICOS",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices convallis lectus, a varius orci gravida quis. Nunc non velit non neque lobortis dignissim. Phasellus efficitur mi mattis commodo ultricies.",
//     header_bg: "../img/fitoterapicos_bg.png",
//     img1: "../img/pediatria1.png",
//     img2: "../img/pediatria2.png",
//     img3: "../img/pediatria3.png",
//   },
//   {
//     fileName: "genericos",
//     name: "GENÉRICOS",
//     title1: "A IMPORTÂNCIA DOS CUIDADOS PEDIÁTRICOS",
//     title2: "MEDICAMENTOS PEDIÁTRICOS",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices convallis lectus, a varius orci gravida quis. Nunc non velit non neque lobortis dignissim. Phasellus efficitur mi mattis commodo ultricies.",
//     header_bg: "../img/genericos_bg.png",
//     img1: "../img/pediatria1.png",
//     img2: "../img/pediatria2.png",
//     img3: "../img/pediatria3.png",
//   },
//   {
//     fileName: "homeopaticos",
//     name: "HOMEOPÁTICOS",
//     title1: "A IMPORTÂNCIA DOS CUIDADOS PEDIÁTRICOS",
//     title2: "MEDICAMENTOS PEDIÁTRICOS",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices convallis lectus, a varius orci gravida quis. Nunc non velit non neque lobortis dignissim. Phasellus efficitur mi mattis commodo ultricies.",
//     header_bg: "../img/homeopaticos_bg.png",
//     img1: "../img/pediatria1.png",
//     img2: "../img/pediatria2.png",
//     img3: "../img/pediatria3.png",
//   },
//   {
//     fileName: "similares",
//     name: "SIMILARES",
//     title1: "A IMPORTÂNCIA DOS CUIDADOS PEDIÁTRICOS",
//     title2: "MEDICAMENTOS PEDIÁTRICOS",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices convallis lectus, a varius orci gravida quis. Nunc non velit non neque lobortis dignissim. Phasellus efficitur mi mattis commodo ultricies.",
//     header_bg: "../img/similares_bg.png",
//     img1: "../img/pediatria1.png",
//     img2: "../img/pediatria2.png",
//     img3: "../img/pediatria3.png",
//   },
//   {
//     fileName: "alopaticos",
//     name: "ALOPÁTICOS",
//     title1: "A IMPORTÂNCIA DOS CUIDADOS PEDIÁTRICOS",
//     title2: "MEDICAMENTOS PEDIÁTRICOS",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices convallis lectus, a varius orci gravida quis. Nunc non velit non neque lobortis dignissim. Phasellus efficitur mi mattis commodo ultricies.",
//     header_bg: "../img/alopaticos_bg.png",
//     img1: "../img/pediatria1.png",
//     img2: "../img/pediatria2.png",
//     img3: "../img/pediatria3.png",
//   },
// ];

// sect.forEach((drug) => {
//   let htmlContent = `
//   <!DOCTYPE html>
//   <html lang="pt-br">
//     <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <link
//         rel="stylesheet"
//         href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
//       />
//       <link rel="stylesheet" href="../style.css" />
//       <link rel="stylesheet" href="../css/drugs_sect.css" />
//       <title>Wikimedic</title>
//     </head>
//     <body>
//       <header>
//         <div class="logo">
//           <img src="../img/wikimedic.png" alt="Logo da Wikimedic" />
//         </div>
//         <nav>
//           <a href="../index.html">Home</a>
//           <a href="">Em alta</a>
//           <a href="./sobre.html">Sobre nós</a>
//         </nav>
//         <div class="search">
//           <input type="text" />
//           <span class="material-symbols-rounded">search</span>
//         </div>
//         <div class="login">
//           <a href="../html/login.html">Login</a>
//           <nav class="menu">
//             <input type="checkbox" class="menu-faketrigger" />
//             <div class="menu-lines">
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//             <ul>
//               <li><a href="../html/hot_drugs.html">Remédios Populares</a></li>
//               <li><a href="../html/pediatria.html">Pediatria</a></li>
//               <li><a href="../html/fitoterapicos.html">Fitoterápicos</a></li>
//               <li><a href="../html/genericos.html">Genéricos</a></li>
//               <li><a href="../html/homeopaticos.html">Homeopáticos</a></li>
//               <li><a href="../html/similares.html">Similares</a></li>
//               <li><a href="../html/alopaticos.html">Alopáticos</a></li>
//               <li><a href="../index.html">Sobre o projeto</a></li>
//             </ul>
//           </nav>
//         </div>
//       </header>
//       <main>
//         <article class="header">
//           <h1>${drug.name}</h1>
//         </article>

//         <article class="row1">
//           <div>
//             <h2>${drug.title1}</h2>
//             <p>${drug.text}</p>
//             <p>${drug.text}</p>
//           </div>
//           <div>
//             <img src="${drug.img1}">
//           </div>
//         </article>
//         <article class="row2">
//           <div>
//             <img src="${drug.img2}">
//           </div>
//           <div>
//             <h2>${drug.title2}</h2>
//             <p>${drug.text}</p>
//             <p>${drug.text}</p>
//             <img src="${drug.img3}">
//           </div>
//         </article>

//         <article class="carousel">
//           <h3>MAIS POPULARES</h3>
//           <div class="carousel-container">
//             <span class="material-symbols-rounded">
//               chevron_left
//             </span>
//             <figure>
//               <img src="../img/senku.jpg">
//               <figcaption>Senku 3 bilhões de mL</figcaption>
//             </figure>
//             <figure>
//               <img src="../img/senku.jpg">
//               <figcaption>Senku 4 bilhões de mL</figcaption>
//             </figure>
//             <figure>
//               <img src="../img/senku.jpg">
//               <figcaption>Senku 5 bilhões de mL</figcaption>
//             </figure>
//             <figure>
//               <img src="../img/senku.jpg">
//               <figcaption>Senku 6 bilhões de mL</figcaption>
//             </figure>
//             <figure>
//               <img src="../img/senku.jpg">
//               <figcaption>Senku 7 bilhões de mL</figcaption>
//             </figure>
//             <span class="material-symbols-rounded">
//               chevron_right
//             </span>
//           </div>
//         </article>
//       </main>
//       <footer>
//         <div>
//           <article class="about_us">
//             <p>
//               <a href="./html/sobre.html">Sobre nós</a>
//             </p>
//             <p>
//               <a href="./html/sobre.html#mission">Missão</a>
//             </p>
//             <p>
//               <a href="./html/sobre.html#vision">Visão</a>
//             </p>
//             <p>
//               <a href="./html/sobre.html#values">Valores</a>
//             </p>
//           </article>
//           <article class="contact">
//             <p>Contato</p>
//             <p>wikimedic@yourcompany.com</p>
//             <p>(11)-00000-0000</p>
//           </article>
//           <article class="social_media">
//             <a href=""
//               ><img src="../img/facebook_logo.png" alt="Logo do facebook"
//             /></a>
//             <a href=""
//               ><img src="../img/instagram_logo.png" alt="Logo do instagram"
//             /></a>
//             <a href=""
//               ><img src="../img/twitter_logo.png" alt="Logo do twitter"
//             /></a>
//             <p>2023 - © Wikimedic. Todos os Direitos Reservados</p>
//           </article>
//         </div>
//       </footer>
//     </body>
//   </html>
//   `;
//   fs.writeFile(`${drug.fileName}.html`, htmlContent, (err) => {
//     if (err) throw err;
//     console.log(`Arquivo ${drug.fileName}.html criado com sucesso!`);
//   });
// });
