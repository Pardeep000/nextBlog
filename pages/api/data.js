import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  //
  const fullPath = path.join(process.cwd(), 'app/blogposts/data.json')
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  res.status(200).json({content:JSON.parse(fileContent)});
}