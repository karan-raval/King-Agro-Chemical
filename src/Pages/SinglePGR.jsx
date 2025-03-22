import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Grid, Typography, Card, Box, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../assets/css/singlepgr.css'
import KingPower from '../assets/images/King-Power.png' 
import KingStar from '../assets/images/King-Star.png' 
import HumiHub from '../assets/images/Humi-Hub.png' 
import KingBlast from '../assets/images/King-Blast.png' 
import Humiking from '../assets/images/Humiking.png' 
import Nutriking from '../assets/images/Nutriking.png' 

const products = {
    "king-power": {
        Name: "King Power",
        image: KingPower,
        description: "High-quality growth enhancer for plants.",
        TargetCrops: "All Vegetables, Fruits and crops",
        Dose: "20 ml per 15 ltr. water",
        Application: "All type of Crops like Rice, Groundnut, Fruits & Vegetables",
        Brand: "King Power",
        PackagingSize: "100ml, 250ml ,500ml ,  1 Litre"
    },
    "king-star": {
        Name: "King Star",
        image: KingStar,
        description: "Boosts plant immunity and overall health.",
        TargetCrops: "All Vegetables, Fruits and crops",
        Materials: "Humic, SNP",
        PackType: "Bottle packing",
        Dose: "20 ml per 15 ltr. water",
        Application: "All type of Crops like Rice, Groundnut, Fruits & Vegetables",
        Brand: "King Star",
        PackagingSize: "100ml, 250ml ,500ml ,  1 Litre"
    },
    "humi-hub": {
        Name: "Humi-Hub",
        image: HumiHub,
        description: "Improves soil fertility and moisture retention.",
        Materials: "Humic, Amino, Fulvic",
        TargetCrops: "All Vegetables, Fruits and crops",
        Dose: "20 ml per 15 ltr. water",
        Application: "All type of Crops like Rice, Groundnut, Fruits & Vegetables",
        Brand: "HumiHub",
        PackagingSize: "100ml, 250ml ,500ml ,  1 Litre"
    },
    "king-blast": {
        Name: "King Blast",
        image: KingBlast,
        TargetCrops: "All Vegetables, Fruits and crops",
        Materials: "Humic, Amino, Fulvic, Seaweed",
        Dose: "20 ml per 15 ltr. water",
        Application: "All type of Crops like Rice, Groundnut, Fruits & Vegetables",
        Brand: "King Blast",
        PackagingSize: "100ml, 250ml ,500ml ,  1 Litre"
    },
    "humiking": {
        Name: "Humiking",
        image: Humiking,
        TargetCrops: "All Vegetables, Fruits and crops",
        Materials: "Humic Liquid",
        Dose: "20 ml per 15 ltr. water",
        Application: "All type of Crops like Rice, Groundnut, Fruits & Vegetables",
        Brand: "Humiking",
        PackagingSize: "100ml, 250ml ,500ml ,  1 Litre"
    },
    "nutriking": {
        Name: "Nutriking",
        image: Nutriking,
        description: "MIX MICRONUTRENT",
        TargetCrops: "All Vegetables, Fruits and crops",
        Materials: "All Micronutrient",
        Dose: "20 ml per 15 ltr. water",
        Application: "All type of Crops like Rice, Groundnut, Fruits & Vegetables",
        Brand: "Nutriking",
        PackagingSize: "100ml, 250ml ,500ml ,  1 Litre"
    }
};

const SinglePGR = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(products[productId]);

    useEffect(() => {
        setProduct(products[productId]);
    }, [productId]);

    if (!product) {
        return <Typography variant="h4" textAlign="center" mt={4}>Product Not Found</Typography>;
    }
    return (
        <>
            <Header />
            
            <div className="hero-section" >
                <Typography variant="h3" fontWeight="bold" >{product.Name}</Typography>
            </div>

            <Grid container spacing={2} sx={{ padding: "20px 5%" }}>
                {/* Sidebar */}
                <Grid item xs={12} md={3}>
                    <Card sx={{ padding: 2 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ background: "#2E7D32", color: "white", padding: 1, textAlign: "center" }}>PGR PRODUCTS</Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
                            {Object.keys(products).map((key) => (
                                <Link to={`/product/pgr/${key}`} key={key} style={{ textDecoration: "none", color: "inherit" }}>
                                    <Typography
                                        sx={{ padding: "8px 12px", cursor: "pointer", background: key === productId ? "#C8E6C9" : "transparent", borderRadius: "5px", '&:hover': { background: "#A5D6A7" } }}
                                    >
                                        {products[key].Name}
                                    </Typography>
                                </Link>
                            ))}
                        </Box>
                    </Card>
                </Grid>

                {/* Product Details */}
                <Grid item xs={12} md={9}>
                    <Card sx={{ padding: 3 }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} md={4} textAlign="center">
                                <img src={product.image} alt={product.Name} style={{ maxWidth: "70%" }} />
                            </Grid>
                            <Grid item xs={12} md={8}>
                <Typography variant="h3" fontWeight="bold" sx={{ color: "#2E7D32"}} >{product.Name}</Typography>
                                {/* <Typography variant="h4" fontWeight="bold" >{product.Name}</Typography> */}
                                <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 2,color: "black" }}>{product.description}</Typography>

                                {/* Table Section */}
                                <Box mt={3}>
                                    <Typography variant="h6" fontWeight="bold" sx={{ background: "#2E7D32", color: "white", padding: 1, textAlign: "center" }}>SPECIFICATIONS</Typography>
                                    <TableContainer component={Paper} sx={{ mt: 2, boxShadow: "none" }}>
                                        <Table>
                                            <TableBody>
                                                {Object.entries(product).map(([key, value]) => (
                                                    key !== "image" && key !== "description" && (
                                                        <TableRow key={key}>
                                                            <TableCell sx={{ fontWeight: "bold", background: "#E8F5E9", fontSize: "0.875rem", padding: "4px 8px" }}>{key.replace(/([A-Z])/g, ' $1').trim()}</TableCell>
                                                            <TableCell sx={{ fontSize: "0.875rem", padding: "4px 8px" }}>{value}</TableCell>
                                                        </TableRow>
                                                    )
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>

            <Footer />
        </>
    )
}

export default SinglePGR;
