const color = require('./color')
const fs = require("fs")
const http = require("http")
// color.getPalette("102-5000x5000.jpg")
//      .then((palette) => {   // 1.convert to JSON
//       console.log(palette)
//       return  {
//               json: JSON.stringify(palette),
//             //   image_name:  ??  
//           }
//      })
//      .then((palette) => {   // 2.SAVE
//         // 1. create file "102-300x300.jpg.json"
//         // 2. save to file "palette"
//         fs.writeFile("../public/images_data/102-5000x5000.jpg.json", palette.json, null)
//      })
//      .then ( () =>{
//        //   Dupa SAVE
//         console.log("DONE!")
//      })

const server = http.createServer((req, res) => {
      if (result = req.url.match(/\/image\/(.*\.jpg)/)) {
        try {
          var data = fs.readFileSync(`../public/images/${result[1]}`)
          res.write(data)
        } catch (err) {
          res.end("Not Found")
        }
      } else if (result = req.url.match(/\/data\/(.*\.json)/)) {
        try {
          var data = fs.readFileSync(`../public/images_data/${result[1]}`)
          res.end(data)
        } catch (err) {
          res.end("Not Found")
        }
      } else if (req.url == "/") {
          try {
            var data = fs.readFileSync("../public/index.html")
            res.write(data)
          } catch (err) {
            res.end("Not Found")
          }
        } else {
          res.end("ALL GOOD!")
        }

      })

    server.listen(3000);