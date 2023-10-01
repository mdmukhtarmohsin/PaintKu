import { Box, Button, Card, CardBody, CardFooter, Image, Link, Text } from "@chakra-ui/react"
import { Link as ReactRouterDom } from "react-router-dom";

const ProductCard = ({ image, title, price, rating, brand, id }) => {
    return <Card>
        <CardBody>
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