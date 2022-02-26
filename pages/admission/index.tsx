import React, { FunctionComponent, useEffect, useState } from "react";
import { Box, Grid, Line } from "../../components/Grid";
import Image from 'next/image'
import axios from 'axios'
import { Typography, User } from "../../components/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    width: '442px',
    height: '493px',
    margin: '0 16px 0 18px',
    padding: '126px 16px 19px 20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.3)',
    backgroundColor: 'var(--white-0)',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  image: {
    padding: '0 0 1px',
    objectFit: 'contain',
  },
  circle: {
    width: "29px",
    height: "29px",
    margin: "0 8px",
    padding: "1px 9px 0 11px",
    backgroundColor: "#d8d8d8",
  },
  activeCircle: {
    width: "29px",
    height: "29px",
    margin: "0 8px",
    padding: "1px 9px 0 11px",
    backgroundColor: "var(--greenish-teal)"
  },
  triangle: {
    width: '9px',
    height: '14px',
    margin: '18.5px 18.5px 21.5px 2.5px',
    backgroundColor: '#48b6a3'
  }
});

const Admission: FunctionComponent = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    try {
      axios.get('https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json').then(response => {
        if (response) {
          setData(response?.data)
        }
      })
    } catch (error) {
      console.log('error >> ', error)
    }

  }, [])
  console.log('data :: ', data)
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.card}>
        <Box className={classes.title}>
          <Box>
            <Image src="/icons/engi.png" width="80px" height="86px" className={classes.image} />
          </Box>
          <Box>
            <Typography variant="h1">{data[2]?.faculty?.name}</Typography>
            <Typography variant="h2">{data[2]?.name}</Typography>
            <Typography variant="h3">{data[2]?.faculty?.university?.name}</Typography>
          </Box>
        </Box>
        <Line />

        <Grid container>
          <Grid item>
            <Typography variant="body2">รอบที่เปิด</Typography>
            {data[2]?.roundSeats?.map((item, index) => <Box className={item > 0 ? classes.activeCircle : classes.circle} key={index}>{index + 1}</Box>)}

          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <Typography variant="body1">รอบที่ 4 : {data[2]?.score?.scoreType}</Typography>
          </Grid>
          <Grid item >
            <Typography variant="body1">แก้ไขคะแนน <Image src="/icons/editScore.png" width="20px" height="20px" className={classes.image} /></Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item>
            <Image src="/icons/star.png" width="20px" height="20px" className={classes.image} />
          </Grid>
          <Grid item >
            <Typography variant="h3">คะแนนของคุณคือ</Typography>
            <Typography variant="body2">{data[2]?.score?.id}</Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item>
            <Typography variant="body2">{data[2]?.score?.min}</Typography>
            <Typography variant="body2">คะแนนต่ำสุด 60</Typography>

          </Grid>
          <Grid item>
            <Typography variant="body2">{data[2]?.score?.avg}</Typography>
            <Typography variant="body2">คะแนนเฉลี่ย 60</Typography>

          </Grid>
          <Grid item>
            <Typography variant="body2">{data[2]?.score?.max}</Typography>
            <Typography variant="body2">คะแนนสูงสุด 60</Typography>

          </Grid>
        </Grid>
        <Line />
        <Box className={classes.title}>
          <Box className={classes.triangle} />

          <Box>
            <Typography variant="caption">ดูสัดส่วนคะแนน</Typography>
          </Box>
        </Box>

        <Line />

        <Box className={classes.title}>
          <Box>
            <User />
            <Typography variant="caption">{data[2]?.likes}</Typography>
          </Box>
          <Box>
            <Typography variant="caption">คนที่สนใจ</Typography>
          </Box>
          <Box>
            <Image src="/icons/share.png" width="20px" height="20px" className={classes.image} />
          </Box>
        </Box>

      </Box>
    </Box>

  );
};

export default Admission;
