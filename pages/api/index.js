import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  //
  const dir = path.join(process.cwd(), 'app/blogposts')
  const fileNames = fs.readdirSync(dir);
  console.log("fileNames: ", fileNames)
  //
  let wholedata = []
  //
  fileNames.map((fileName) => {

    const fullPath = path.join(dir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    console.log("fileContents",fileContents)
    //
    let obj = {}
    obj[fileName] = JSON.parse(fileContents)
    wholedata.push(obj)
  })
  res.status(200).json(wholedata);
}