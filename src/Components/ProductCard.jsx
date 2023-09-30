import { Box, Image, Text } from "@chakra-ui/react"

const ProductCard = ({ image, title, price, rating, brand }) => {
    return <Box justifyContent={"center"} >
        <Image src={image} m={"auto"} h={"400px"} w={"auto"} />
        <Text noOfLines={1} fontSize={"xl"} fontWeight={500}>{title}</Text>
        <Text fontSize={"md"} fontWeight={400}>₹ {price}</Text>
        <Text fontSize={"md"} fontWeight={400}>{rating} ⭐</Text>
        <Text fontSize={"md"} fontWeight={400}>{brand}</Text>
    </Box>
}
export default ProductCard;