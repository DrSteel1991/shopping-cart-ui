import FlexDiv from "./ui/FlexDiv/FlexDiv";
import BlockDiv from "./ui/BlockDiv/BlockDiv";
import Button from "./ui/Button/Button";
import Input from "./ui/Input/Input";

function App() {
  return (
    <FlexDiv position="relative" direction="column" gap={2} p={4}>
      <FlexDiv
        m={10}
        width="50%"
        height={100}
        position="absolute"
        top={0}
        left={500}
      >
        "text"
      </FlexDiv>
      <FlexDiv width={200} minHeight={50}>
        "text2"
      </FlexDiv>
      <FlexDiv width="calc(100% - 20px)" height="auto">
        "text3"
      </FlexDiv>
      <BlockDiv
        bgColor="primary"
        borderColor="success"
        borderWidth={2}
        borderRadius="md"
        p={4}
        m={2}
        width="300px"
        height={150}
      >
        BlockDiv example (no flex props)
      </BlockDiv>
      <FlexDiv direction="column" gap={2} mt={4} width="200px">
        <Button p={2} borderRadius="md" borderWidth={1}>
          Primary Button
        </Button>
        <Button.Secondary p={2} borderRadius="md" borderWidth={1}>
          Secondary Button
        </Button.Secondary>
        <Button.Tertiary p={2} borderRadius="md" borderWidth={1}>
          Tertiary Button (Danger)
        </Button.Tertiary>
        <Button
          bgColor="info"
          borderColor="info"
          p={2}
          borderRadius="md"
          borderWidth={1}
          disabled
        >
          Custom Button
        </Button>
      </FlexDiv>

      <FlexDiv direction="column" gap={2} mt={4} width="300px">
        <Input
          placeholder="Enter text here"
          borderWidth={1}
          borderStyle="solid"
          borderColor="primary"
          borderRadius="md"
          p={2}
        />
        <Input
          placeholder="Disabled input"
          disabled
          borderWidth={1}
          borderStyle="solid"
          borderColor="secondary"
          borderRadius="md"
          p={2}
        />
      </FlexDiv>
    </FlexDiv>
  );
}

export default App;
