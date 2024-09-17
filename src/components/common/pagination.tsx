import { styled } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

type PaginationProps = {
  totalPage: number;
};
function PaginationComponent({ totalPage }: PaginationProps) {
  return (
    <Wrapper>
      <Stack spacing={2}>
        <Pagination
          color="primary"
          showFirstButton
          showLastButton
          count={totalPage}
          defaultPage={1}
          shape="rounded"
          defaultValue={1}
        />
      </Stack>
    </Wrapper>
  );
}
export default PaginationComponent;

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;
