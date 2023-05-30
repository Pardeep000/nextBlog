import styles from './page.module.css'
import fs from 'fs'
import path from 'path'

export default function Home() {
  
  const dir = path.join(process.cwd(),'app/blogposts')
  const fileNames = fs.readdirSync(dir);
  console.log("fileNames: ",fileNames)

  return (
    <main className={styles.main}>
      home page is here
    </main>
  )
}
