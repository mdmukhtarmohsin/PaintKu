import { Box, Button, Card, CardBody, CardFooter, Image, Link, Text } from "@chakra-ui/react"
import { Link as ReactRouterDom } from "react-router-dom";

const ProductCard = ({ image, title, price, rating, brand, id }) => {
    const handleRecent = (id, image, title, price, rating, brand) => {
        let recentData = JSON.parse(localStorage.getItem("recent")) || [];
        const existingProduct = recentData?.find(product => product.id === id);
        if (existingProduct) {

        } else {
            let data = {
                id,
                image,
                title,
                price,
                rating,
                brand
            }
            const updatedRecent = [data, ...recentData];
            localStorage.setItem("recent", JSON.stringify(updatedRecent));
        }
    }
    return <Card>
        <CardBody onClick={() => (handleRecent(id, image, title, price, rating, brand))}>
            <Link as={ReactRouterDom} to={`/products/${id}`} textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image src={image} m={"auto"} h={"350px"} w={"auto"} />
                <Text noOfLines={1} fontSize={"xl"} fontWeight={500}>{title}</Text>
                <Text fontSize={"md"} fontWeight={400}>₹ {price}</Text>
                <Text fontSize={"md"} fontWeight={400}>{rating} ⭐</Text>
                <Text fontSize={"md"} fontWeight={400}>{brand}</Text>
            </Link>
        </CardBody>
        <CardFooter>
            <Button bg="#4AAB76" color="white" w={"100%"}>Add to Cart</Button>
        </CardFooter>
    </Card>
    //  <Box justifyContent={"center"} >
    // </Box>
}
export default ProductCard;