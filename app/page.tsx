"use client"
import styles from './page.module.css'
import React, { useEffect, useState } from 'react'
import { Grid, Box, ListItem } from '@mui/material';
import CardComp from "./components/card/Card"
import { CircularProgress } from '@mui/material';



interface dataProp {
  title: String
  desc: String
  author: String
  date: String
  img: String
  position: String
}

export default function Home() {

  const [blogdata, setBlogdata] = useState<null | dataProp[]>(null)

  useEffect(() => {
    fetch("http://www.localhost:3000/api/data").then(result => result.json()).then(data => setBlogdata(data.content))
  }, [])

  return (
    <main className={styles.main}>
      <Box>
        <Grid container spacing={2}>
          {blogdata === null ? <CircularProgress color="secondary" size={30}/> : blogdata.map(item => <Grid item xs={item.position === "top" ? 6 : 4} style={{ paddingLeft: item.position === "top" ? "8%" : "2%" }}>
            <CardComp title={item.title} desc={item.desc} date={item.date} author={item.author} img={item.img} />
          </Grid>)}
        </Grid>
      </Box>
    </main>
  )
}
