import { useState } from "react";
import PropTypes from "prop-types";
import {
  ChakraProvider,
  Box,
  Heading,
  VStack,
  HStack,
  FormControl,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProblemPage from "./pages/ProblemPage";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const problems1 = [
  {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
  {
    title: "202. Bitwise AND of Numbers Range",
    difficulty: "Hard",
    acceptanceRate: "42%",
  },
  {
    title: "203. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
  {
    title: "204 . Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
];
const problems2 = [
  {
    title: "Title1",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
  {
    title: "Title2",
    difficulty: "Medium",
    acceptanceRate: "65%",
  },
  {
    title: "203. Bitwise AND of Numbers Range",
    difficulty: "Hard",
    acceptanceRate: "42%",
  },
  {
    title: "204 . Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
];

function App() {
  const [problems, setProblems] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ChakraProvider>
            <Box minW="100vw" minH="100vh" p={4} bgColor="gray.100">
              <Heading mb={6} textAlign="center" fontSize={["2xl", "3xl", "4xl"]}>
                Problem Solving Platform
              </Heading>

              <VStack
                align="center"
                spacing={6}
                maxW="lg"
                mx="auto"
                p={6}
                bgColor="white"
                borderRadius="md"
                boxShadow="lg"
              >
                <HStack w="100%">
                  <FormControl>
                    <Input placeholder="Email" type="email" />
                  </FormControl>
                  <FormControl>
                    <Input placeholder="Password" type="password" />
                  </FormControl>
                  <Button colorScheme="blue">Sign In</Button>
                  <Button colorScheme="blue">Sign Up</Button>
                </HStack>
                <HStack spacing={4}>
                  <Button
                    colorScheme="teal"
                    onClick={() => {
                      setProblems(() => problems1);
                    }}
                  >
                    Page 1
                  </Button>
                  <Button
                    colorScheme="teal"
                    onClick={() => {
                      setProblems(() => problems2);
                    }}
                  >
                    Page 2
                  </Button>
                </HStack>
                <Table variant="striped" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th>Title</Th>
                      <Th>Difficulty</Th>
                      <Th>Acceptance Rate</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {problems.map((problem, index) => (
                      <ProblemStatement
                        key={index}
                        title={problem.title}
                        difficulty={problem.difficulty}
                        acceptanceRate={problem.acceptanceRate}
                      />
                    ))}
                  </Tbody>
                </Table>
              </VStack>
            </Box>
          </ChakraProvider >} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

function ProblemStatement(props) {
  const { title, difficulty, acceptanceRate } = props;

  return (
    <Tr>
      <Td>{title}</Td>
      <Td color={difficulty === "Medium" ? "yellow.400" : "red.500"}>
        {difficulty}
      </Td>
      <Td>{acceptanceRate}</Td>
    </Tr>
  );
}
ProblemStatement.propTypes = {
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  acceptanceRate: PropTypes.string.isRequired,
};


export default App
