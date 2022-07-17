import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AppBar from './../AppBar'
import img1 from './images/1.jpg'
import img2 from './images/2.png'
import img3 from './images/3.JPG'
import img4 from './images/4.jpg'

export default function Centers() {
  return (
    <Container component="main" maxWidth="xs">
        
        <AppBar>

        </AppBar>
       <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            
            </Stack>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={img1}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Popular Diagnostics Centre Badda
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Popular Diagnostic Centre Ltd. is an advanced Centre for diagnostic and medical services. It is one of the prestigious diagnostic complexes of Bangladesh which started its activities in 1983. Popular Diagnostic Centre Ltd. is the largest diagnostic services provider organization in private sector of the country. It is been pioneer in introducing world latest medical equipments and advanced technology to provide round the clock medical investigations and consultancy services.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Contact</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={img2}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Labaid Diagnostics Centre Badda
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Labaid Diagnostic Centre Ltd. is an advanced Centre for diagnostic and medical services. It is one of the prestigious diagnostic complexes of Bangladesh which started its activities in 1983. Popular Diagnostic Centre Ltd. is the largest diagnostic services provider organization in private sector of the country. It is been pioneer in introducing world latest medical equipments and advanced technology to provide round the clock medical investigations and consultancy services.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Contact</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={img3}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Popular Diagnostics Centre Syamoli
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Popular Diagnostic Centre Ltd. is an advanced Centre for diagnostic and medical services. It is one of the prestigious diagnostic complexes of Bangladesh which started its activities in 1983. Popular Diagnostic Centre Ltd. is the largest diagnostic services provider organization in private sector of the country. It is been pioneer in introducing world latest medical equipments and advanced technology to provide round the clock medical investigations and consultancy services.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Contact</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={img4}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        IBN SINA Diagnostics Centre Dhanmondi
        </Typography>
        <Typography variant="body2" color="text.secondary">
        IBN SINA Diagnostic Centre Ltd. is an advanced Centre for diagnostic and medical services. It is one of the prestigious diagnostic complexes of Bangladesh which started its activities in 1983. Popular Diagnostic Centre Ltd. is the largest diagnostic services provider organization in private sector of the country. It is been pioneer in introducing world latest medical equipments and advanced technology to provide round the clock medical investigations and consultancy services.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Contact</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    


    </Container>
 
  );
}
