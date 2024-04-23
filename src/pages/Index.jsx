import { Box, Image, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <VStack spacing={4} p={5}>
      <Text fontSize="2xl" fontWeight="bold">
        Our Office Location
      </Text>
      <Image src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbWFwfGVufDB8fHx8MTcxMzg3ODU2Mnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Map of the location" boxSize="300px" objectFit="cover" />
      <Box p={4} borderWidth="1px" borderRadius="lg">
        <Text fontSize="lg">Visit Us At:</Text>
        <Text>123 Main Street, Metropolis, 10101</Text>
        <Text>Open: Mon-Fri, 9:00 AM - 5:00 PM</Text>
      </Box>
    </VStack>
  );
};

export default Index;
