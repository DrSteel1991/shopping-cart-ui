import FlexDiv from "./ui/FlexDiv/FlexDiv";

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
    </FlexDiv>
  );
}

export default App;
