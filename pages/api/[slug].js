import fs from 'fs'
import path from 'path'

export default async function handler(req, res) {

  const {query} = req
  const filename = query.slug
  const dir = path.join(process.cwd(), 'app/blogposts')
  const fileNames = fs.readdirSync(dir);

  const fullPath = path.join(dir, filename+".json");
  //
  // const fileContents = fs.readFileSync(fullPath, 'utf8');
  try {
    const fileContents = await fs.promises.readFile(fullPath, 'utf8');
    // Handle the file contents here
    res.status(200).json({result:JSON.parse(fileContents)});
  } catch (error) {
    // Handle the error here
    console.error('Error reading file:', error);
    res.status(404).json({result:"No such file exists"});
  }
}