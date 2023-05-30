import React from 'react'


type Param = {
params:{
    slug:string
}
}

const page = ({params:{slug}}:Param) => {
  return (
    <div>
      slugging data {slug}
    </div>
  )
}

export default page
