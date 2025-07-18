import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Grid, Typography, Card, Box, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../assets/css/singlepgr.css'

import biolarvicide from '../assets/images/biolarvicide.png';
import thipsandmites from '../assets/images/thipsandmites.png';
import whitefly from '../assets/images/whitefly.png';

const products = {
    "Larvicide": {
        Name: "Larvicide",
        image: biolarvicide,
        description: "High-quality growth enhancer for plants.",
        TargetCrops: "All Vegetables, Fruits and crops",
        Dose: "20 ml per 15 ltr. water",
        Application: "All type of Crops like Rice, Groundnut, Fruits & Vegetables",
        Brand: "King Power",
        PackagingSize: "100ml, 250ml ,500ml ,  1 Litre"
    },
    "Thrips & mites": {
        Name: "Thrips & mites",
        image: thipsandmites,
        description: "Boosts plant immunity and overall health.",
        TargetCrops: "All Vegetables, Fruits and crops",
        Materials: "Humic, SNP",
        PackType: "Bottle packing",
        Dose: "20 ml per 15 ltr. water",
        Application: "All type of Crops like Rice, Groundnut, Fruits & Vegetables",
        Brand: "King Star",
        PackagingSize: "100ml, 250ml ,500ml ,  1 Litre"
    },
    "White fly": {
        Name: "White fly",
        image: whitefly,
        description: "Improves soil fertility and moisture retention.",
        Materials: "Humic, Amino, Fulvic",
        TargetCrops: "All Vegetables, Fruits and crops",
        Dose: "20 ml per 15 ltr. water",
        Application: "All type of Crops like Rice, Groundnut, Fruits & Vegetables",
        Brand: "HumiHub",
        PackagingSize: "100ml, 250ml ,500ml ,  1 Litre"
    }
};


const Biopesticidesingle = () => {
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
                <Grid item xs={12} md={3}>
                    <Card sx={{ padding: 2 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ background: "#2E7D32", color: "white", padding: 1, textAlign: "center" }}>Bio-PESTICIDE PRODUCTS</Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
                            {Object.keys(products).map((key) => (
                                <Link to={`/products/bio-pesticides/${key}`} key={key} style={{ textDecoration: "none", color: "inherit" }}>
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

                <Grid item xs={12} md={9}>
                    <Card sx={{ padding: 3 }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} md={4} textAlign="center">
                                <img src={product.image} alt={product.Name} style={{ maxWidth: "70%" }} />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Typography variant="h3" fontWeight="bold" sx={{ color: "#2E7D32" }} >{product.Name}</Typography>
                                <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 2, color: "black" }}>{product.description}</Typography>

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

export default Biopesticidesingle