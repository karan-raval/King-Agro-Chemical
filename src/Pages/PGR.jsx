import React from 'react'
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import KingPower from '../assets/images/King-Power.png' 
import KingStar from '../assets/images/King-Star.png' 
import HumiHub from '../assets/images/Humi-Hub.png' 
import KingBlast from '../assets/images/King-Blast.png' 
import Humiking from '../assets/images/Humiking.png' 
import Nutriking from '../assets/images/Nutriking.png' 
import RICHIRICH from '../assets/images/RICHI-RICH.png' 
import NATURALKING from '../assets/images/NATURAL-KING.png' 

const products = [
    { name: "King Power", image: KingPower  },
    { name: "King Star", image: KingStar },
    { name: "Humi-Hub", image: HumiHub },
    { name: "King Blast", image: KingBlast },
    { name: "Humiking", image: Humiking },
    { name: "Nutriking", image: Nutriking },
    { name: "RICHI RICH", image: RICHIRICH },
    { name: "NATURAL KING", image: NATURALKING },
  ];
const PGR = () => {
  return (
    <>
    <Header/>
    <div className="hero-section">
          <h1>PGR</h1>
        </div>
      <Grid container spacing={2} justifyContent="center" sx={{ padding: 2 }}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card
            sx={{
              '&:hover': { transform: 'scale(1.05)', transition: '0.3s' },
              border: "1px solid #4CAF50",
              borderRadius: 2,
              boxShadow: 3,
              cursor: "pointer",
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.name}
              sx={{ objectFit: "contain", padding: 1 }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {product.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Footer/>
    </>
  )
}

export default PGR