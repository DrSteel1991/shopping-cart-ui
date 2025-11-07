import FlexDiv from "./ui/FlexDiv/FlexDiv";

function App() {
  return (
    <FlexDiv
      bgColor="secondary"
      borderColor="success"
      borderWidth={1}
      borderStyle="solid"
      borderRadius={10}
      boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.1)"
      opacity={0.5}
      zIndex={10}
      width="100%"
      height={400}
      minWidth={300}
      maxHeight="80vh"
    >
      <FlexDiv m={10} width="50%" height={100}>
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
