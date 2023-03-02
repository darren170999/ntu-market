import React from "react";
import { Container } from "@chakra-ui/react";
import PhishingAlert from '../components/phishingalert';
import Categories from '../components/categories';
import FeaturedItems from '../components/featured_items';

function Home(){
    return(
        <Container
        mt='0'
        mb='0'
        ml='0'
        mr='0'
        minWidth='100%'
          >
          <PhishingAlert/>
          <Categories/>
          <FeaturedItems/>
        </Container>
    )
}
export default Home;