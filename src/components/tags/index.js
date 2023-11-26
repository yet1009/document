import {styled} from "styled-components";

export const Box = styled.div`
    display: block;
`

export const InlineBox = styled.div`
  display: inline-block;
  vertical-align: middle;
`

export const FlexBox = styled.div`
  display: flex;

  &.center {
    justify-content: center;
    align-items: center;
  }

  &.between {
    justify-content: space-between;
  }
`