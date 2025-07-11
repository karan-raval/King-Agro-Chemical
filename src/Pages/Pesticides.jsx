import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Thiamethoxam25 from '../assets/images/Thiamethoxam25.png';
import KingStar from '../assets/images/King-Star.png';
import HumiHub from '../assets/images/Humi-Hub.png';
import KingBlast from '../assets/images/King-Blast.png';
import Humiking from '../assets/images/Humiking.png';
import Thiamethoxam30 from '../assets/images/Thiamethoxam30.png';
import EmamectionBenzoate from '../assets/images/Emamection-Benzoate.png'


const products = [
    { id: "1", name: "Abamectin 1.9% EC", image: Humiking },
    { id: "2", name: "Azoxystrobin 11% + Tebuconazole 18.3% SC", image: KingStar },
    { id: "3", name: "Emamectin Benzoate 1.9% EC", image: HumiHub },
    { id: "4", name: "Emamectin Benzoate 5% SG", image: EmamectionBenzoate },
    { id: "5", name: "Glyphosate 41% SL", image: Humiking },
    { id: "6", name: "Glyphosate 71% SG", image: Humiking },
    { id: "7", name: "Hexaconazole 5% SC", image: Humiking },
    { id: "8", name: "Imidacloprid 17.8% SL", image: Humiking },
    { id: "9", name: "Imidacloprid 30.5% SC", image: Humiking },
    { id: "10", name: "Sulphur Granules WDG", image: Humiking },
    { id: "11", name: "Thiamethoxam 25% WG", image: Thiamethoxam25 },
    { id: "12", name: "Thiamethoxam 30% FS", image: Thiamethoxam30 },
];

const Pesticides = () => {
    return (
        <>
            <Header />
            <div className="hero-section">
                <h1>Pesticides</h1>
            </div>
            <Grid container spacing={2} justifyContent="center" sx={{ padding: 2 }}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={3} key={product.id}>
                        <Link to={`/product/pgr/${product.id}`} style={{ textDecoration: "none" }}>
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
                                <CardContent sx={{ textAlign: "center", lineHeight: 1.4 }}>
                                    {product.id === "2" ? (
                                        <>
                                            <Typography variant="subtitle1" fontWeight="bold">
                                                Azoxystrobin 11%
                                            </Typography>
                                            <Typography variant="subtitle1" fontWeight="bold" color="green">
                                                +
                                            </Typography>
                                            <Typography variant="subtitle1" fontWeight="bold">
                                                Tebuconazole 18.3% SC
                                            </Typography>
                                        </>
                                    ) : (
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            {product.name}
                                        </Typography>
                                    )}
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
            <Footer />
        </>
    );
};

export default Pesticides;
