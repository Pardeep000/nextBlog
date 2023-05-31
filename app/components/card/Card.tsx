import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Avatar } from "@mui/material"
//
import styles from './page.module.css'

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

interface Props {
    title:String
    desc:String
    author:String
    date:String
    img:String
}

// : React.FC<Props>
 const RecipeReviewCard:React.FC<Props> = ({title,desc,author,date,img})=> {
console.log("pic",img)
    return (
        <>
            <Card sx={{ maxWidth: 445}}>
                <CardMedia
                    sx={{ height: "238px" }}
                    image={`${img}`}
                    title="green iguana"
                />
            </Card>
            <Card sx={{ maxWidth: 445, boxShadow: 'none', cursor: "pointer"}}>
                <CardContent sx={{paddingLeft:"0px",paddingRight:"0px",}}>
                    <Typography className={styles.title}>
                        {title}
                    </Typography>
                    <Typography variant="body2" className={styles.desc}>
                        {desc}
                    </Typography>
                    <Box sx={{ display: "flex", marginTop: "10px", alignItems: "center", justifyContent: "space-between", width: "65%" }}>
                        <Avatar src="/media/jobs.jpeg" style={{ width: 23, height: 23 }}></Avatar>
                        <Typography variant="body2" color="text.secondary" className={styles.rowText}>
                            {author}
                        </Typography>
                        <div className={styles.dot} />
                        <Typography variant="body2" color="text.secondary" className={styles.rowText}>
                            {date}
                        </Typography>
                    </Box>
                </CardContent>
            </Card></>
    );
}

export default RecipeReviewCard