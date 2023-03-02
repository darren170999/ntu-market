import { Button, Container, Heading } from "@chakra-ui/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

function MyProfile(){
    return(
        <>
        <Container w='full' h='full' bg='green.100'>
            <Heading> My Profile Page</Heading>
            <br /><br />
            <Link to='myListings'>
                <Button>
                    My Listings
                </Button>              
            </Link>
            <Link to='myReviews'>
                <Button>
                    My Reviews
                </Button>              
            </Link>
            <Link to='/newListing'>
                <Button>
                    New Listing
                </Button>              
            </Link>
        </Container>
        <Outlet/>
        </>
    )
}
export default MyProfile;