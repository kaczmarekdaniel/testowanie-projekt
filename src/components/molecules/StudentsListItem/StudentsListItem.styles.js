import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  padding: 16px 24px;
  border-radius: 24px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  background-color: #fff;

  /* &:not(:last-child)::after {
		content: '';
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 1px;
		background-color: lightgrey;
	} */
`;

export const StyledInfo = styled.div`
  padding: 16px;

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  p:first-child {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
