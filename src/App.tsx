import FlexDiv from "./ui/FlexDiv/FlexDiv";
import BlockDiv from "./ui/BlockDiv/BlockDiv";

function App() {
  return (
    <FlexDiv bgColor="secondary" position="relative">
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
    </FlexDiv>
  );
}

export default App;
