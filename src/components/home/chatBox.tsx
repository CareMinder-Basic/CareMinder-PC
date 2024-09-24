import { styled } from "@mui/material";

type ChatBoxProps = {
  leftorRight: "left" | "right";
};

function ChatBox({ leftorRight }: ChatBoxProps) {
  return (
    <Wrapper leftorRight={leftorRight}>
      {leftorRight === "left" ? (
        <>
          <Title color={"white"}>배가 아파요.</Title>
          <Time>오전 06:30</Time>
        </>
      ) : (
        <>
          <Time>오전 06:30</Time>
          <Title color={"#C1E9FF"}>배가 아파요.</Title>
        </>
      )}
    </Wrapper>
  );
}
export default ChatBox;

const Wrapper = styled("div")<{ leftorRight: string }>`
  padding-top: 18px;
  color: black;
  display: flex;
  align-items: end;
  justify-content: ${({ leftorRight }) => (leftorRight === "left" ? "start" : "end")};
`;
const Time = styled("div")`
  color: #5e5f65;
  font-size: 13px;
  margin: 0 10px;
`;
const Title = styled("div")<{ color: string }>`
  width: fit-content;
  background-color: ${({ color }) => color};
  padding: 8px 15px;
  border-radius: 8px;
`;
