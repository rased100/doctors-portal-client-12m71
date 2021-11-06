import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whiteening from '../../../images/whitening.png';


const services = [
    {
        name: 'Fluoride Treatement',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error quia culpa magnam illum facilis praesentium, corrupti cum et a? Nisi nobis totam id dignissimos doloribus? Hic veritatis at quidem expedita',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error quia culpa magnam illum facilis praesentium, corrupti cum et a? Nisi nobis totam id dignissimos doloribus? Hic veritatis at quidem expedita',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error quia culpa magnam illum facilis praesentium, corrupti cum et a? Nisi nobis totam id dignissimos doloribus? Hic veritatis at quidem expedita',
        img: whiteening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 2, color: 'success.main' }} variant="h6" component="div">
                    Our Services
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;