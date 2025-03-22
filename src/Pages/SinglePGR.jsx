import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Card, CardContent, Box } from '@mui/material';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import KingPower from "../assets/images/King-Power.png";
import KingStar from "../assets/images/King-Star.png";
import HumiHub from "../assets/images/Humi-Hub.png";
import KingBlast from "../assets/images/King-Blast.png";
import Humiking from "../assets/images/Humiking.png";
import Nutriking from "../assets/images/Nutriking.png";
import RICHIRICH from "../assets/images/RICHI-RICH.png";
import NATURALKING from "../assets/images/NATURAL-KING.png";

const products = {
    "king-power": {
        name: "King Power",
        image: KingPower,
        description: "High-quality growth enhancer for plants.",
        TargetCrops: "All Vegetables, Fruits and crops",
        Form: "Liquid",
        PackType: "Bottle packing",
        Color: "Black",
        Dose: "20 ml per 15 ltr. water",
        OrganicType: "Organic",
        Dilution: "15 litre water",
        Application: "All type of Crops like Rice, Groundnut, Fruits & Vegetables",
        Brand: "King Power",
        PackagingSize: "100 ml To 1 Litre"
    },
    "king-star": {
        name: "King Star",
        image: KingStar,
        description: "Boosts plant immunity and overall health.",
        TargetCrops: "All Vegetables, Fruits and crops",
        Form: "Liquid",
        PackType: "Bottle packing",
        Color: "Black",
        Dose: "20 ml per 15 ltr. water",
        OrganicType: "Organic",
        Dilution: "15 litre water",
        Application: "All type of Crops like Rice, Groundnut, Fruits & Vegetables",
        Brand: "King Star",
        PackagingSize: "100 ml To 1 Litre"
    },
    "humi-hub": {
        name: "Humi-Hub",
        image: HumiHub,
        description: "Improves soil fertility and moisture retention.",
        TargetCrops: "All Vegetables, Fruits and crops",
        Form: "Liquid",
        PackType: "Bottle packing",
        Color: "Black",
        Dose: "20 ml per 15 ltr. water",
        OrganicType: "Organic",
        Dilution: "15 litre water",
        Application: "All type of Crops like Rice, Groundnut, Fruits & Vegetables",
        Brand: "HumiHub",
        PackagingSize: "100 ml To 1 Litre"
    },
};

const SinglePGR = () => {
    const { productId } = useParams();
    const product = products[productId];
    console.log(product)

    if (!product) {
        return <Typography variant="h4" textAlign="center" mt={4}>Product Not Found</Typography>;
    }
    return (
        <>
            <Header />
            {/* Hero Section */}
            <div className="hero-section" style={{
                background: "url('/path-to-bg-image.jpg') no-repeat center/cover",
                padding: "40px 0",
                textAlign: "center",
                color: "#fff"
            }}>
                <Typography variant="h3" fontWeight="bold">{product.name}</Typography>
            </div>

            {/* Main Content */}
            <Grid container spacing={2} sx={{ padding: "20px 5%" }}>
                {/* Left Sidebar */}
                <Grid item xs={12} md={3}>
                    <Card sx={{ padding: 2 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ borderBottom: "2px solid green", paddingBottom: 1 }}>PGR PRODUCTS</Typography>
                        {Object.keys(products).map((key) => (
                            <Typography
                                key={key}
                                sx={{ padding: "8px 0", cursor: "pointer", color: key === productId ? "green" : "black" }}
                            >
                                {products[key].name}
                            </Typography>
                        ))}
                    </Card>
                </Grid>

                {/* Product Details */}
                <Grid item xs={12} md={9}>
                    <Card sx={{ padding: 3, textAlign: "center" }}>
                        <img src={product.image} alt={product.name} style={{ maxWidth: "200px", marginBottom: "20px" }} />
                        <Typography variant="h4" fontWeight="bold">{product.name}</Typography>
                        <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 2 }}>{product.description}</Typography>

                        <Box mt={3} textAlign="left">
                            <Typography variant="h6" fontWeight="bold" sx={{ borderBottom: "2px solid green", paddingBottom: 1 }}>SPECIFICATIONS</Typography>
                            <Typography variant="body1"><strong>Target Crops:</strong> {product.TargetCrops}</Typography>
                            <Typography variant="body1"><strong>Form:</strong> {product.Form}</Typography>
                            <Typography variant="body1"><strong>Pack Type:</strong> {product.PackType}</Typography>
                            <Typography variant="body1"><strong>Color:</strong> {product.Color}</Typography>
                            <Typography variant="body1"><strong>Dose:</strong> {product.Dose}</Typography>
                            <Typography variant="body1"><strong>Organic Type:</strong> {product.OrganicType}</Typography>
                            <Typography variant="body1"><strong>Dilution:</strong> {product.Dilution}</Typography>
                            <Typography variant="body1"><strong>Application:</strong> {product.Application}</Typography>
                            <Typography variant="body1"><strong>Brand:</strong> {product.Brand}</Typography>
                            <Typography variant="body1"><strong>Packaging Size:</strong> {product.PackagingSize}</Typography>
                        </Box>
                    </Card>
                </Grid>
            </Grid>

            <Footer />
        </>
    )
}

export default SinglePGR