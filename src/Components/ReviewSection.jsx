import { Box, Container, Text, Image, useStatStyles } from "@chakra-ui/react";
import { useState, useEffect } from "react";
let ReviewsSection = () => {
  let [reviewIndex, setReviewIndex] = useState(0);
  let backgroundColors = ["black", "blue", "green", "red"];
  let data = [
    {
      name: "Wade Waron",
      review:
        "It is a long established fact that a reader will be cted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has more-or-less normal.",
      position: "CEO at Vision Trust",
      imageURL: "https://c.stocksy.com/a/Jmn700/z9/1859647.jpg",
    },
    {
      name: "ABC Person",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consequuntur explicabo assumenda sapiente similique. Sed adipisci provident ab quam porro necessitatibus laboriosam nemo quaerat consectetur a, distinctio aliquam nisi quos libero alias, dolorum eveniet repellat modi eos. Nulla, autem. Quibusdam.",
      position: "CEO at Vision Trust",
      imageURL:
        "https://th.bing.com/th/id/OIP.Nolz7WP6ihgX54G98AcWnAHaEo?pid=ImgDet&rs=1",
    },
    {
      name: "XYZ Person",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consequuntur explicabo assumenda sapiente similique. Sed adipisci provident ab quam porro necessitatibus laboriosam nemo quaerat consectetur a, distinctio aliquam nisi quos libero alias, dolorum eveniet repellat modi eos. Nulla, autem. Quibusdam.",
      position: "CEO at Vision Trust",
      imageURL:
        "https://th.bing.com/th/id/OIP.FXBk1PVaDOtDvXwYO6QDVAAAAA?pid=ImgDet&rs=1",
    },
    {
      name: "DEF Person",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis consequuntur explicabo assumenda sapiente similique. Sed adipisci provident ab quam porro necessitatibus laboriosam nemo quaerat consectetur a, distinctio aliquam nisi quos libero alias, dolorum eveniet repellat modi eos. Nulla, autem. Quibusdam.",
      position: "CEO at Vision Trust",
      imageURL: "https://wallpapercave.com/wp/wp2525363.jpg",
    },
  ];
  useEffect(() => {
    let interval = setInterval(() => {
      setReviewIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  let currentReview = data[reviewIndex];
  let backgroundColor = backgroundColors[reviewIndex];
  return (
    <Container maxW="100%" mt="50" p="1">
      <Box w="40%" m="auto" textAlign="center" p="10">
        <Text fontSize="5xl">
          What People <span style={{ color: "green" }}>Are Saying</span>
        </Text>
        <Text mt="4">
          With each Livary Wall we send you our passion for beautiful for your
          home . The Content of each Wall is agreed with the Creators.
        </Text>
      </Box>
      <Box
        w="80%"
        m="auto"
        display="flex"
        alignItems="center"
        letterSpacing="1px"
        justifyContent="space-between"
      >
        <Box boxSize="300px" h="350px" bgColor="gray.100" p="5">
          <Image w="100%" h="100%" src={currentReview.imageURL} />
        </Box>
        <Box boxSize="70%">
          <Box
            boxSize="100%"
            h="100px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image
              w="50"
              h="50"
              src="https://th.bing.com/th/id/OIP.jaFDe5pxvXhUtudX1r5i7QAAAA?pid=ImgDet&rs=1"
            />
            <Image
              w="50"
              h="50"
              src="https://th.bing.com/th/id/OIP.ZPzHyA5vjinjiazyh33uLwHaHa?pid=ImgDet&rs=1"
            />
          </Box>
          <Box textAlign="left" w="80%">
            {currentReview.review}
          </Box>
          <Box
            mt="5"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            boxSize="90%"
          >
            <Box>
              <Text fontSize="2xl">{currentReview.name}</Text>
              <Text color="gray.600">{currentReview.position}</Text>
            </Box>
            <Box display="flex" gap="2">
              <Box
                w="3"
                h="3"
                border="1px solid black"
                borderRadius="50%"
                bgColor={backgroundColor === "black" ? "black" : "transparent"}
              ></Box>
              <Box
                w="3"
                h="3"
                border="1px solid black"
                borderRadius="50%"
                bgColor={backgroundColor === "blue" ? "blue" : "transparent"}
              ></Box>
              <Box
                w="3"
                h="3"
                border="1px solid black"
                borderRadius="50%"
                bgColor={backgroundColor === "green" ? "green" : "transparent"}
              ></Box>
              <Box
                w="3"
                h="3"
                border="1px solid black"
                borderRadius="50%"
                bgColor={backgroundColor === "red" ? "red" : "transparent"}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default ReviewsSection;
