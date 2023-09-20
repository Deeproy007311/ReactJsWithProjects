import Component from "./deep";
import { useToast, Button } from "@chakra-ui/react"; // Import Button from Chakra UI

function App() {
  const myName = 'Deep Roy';
  const toast = useToast();
  
  return (
    <>
      <Component />
      <h2>I am {myName}</h2>
      <Button
        onClick={() =>
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Log in
      </Button>
    </>
  );
}

export default App;
