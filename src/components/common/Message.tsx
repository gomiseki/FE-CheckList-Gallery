import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 200px;
`;

const Text = styled.span`
  color: ${(props) => props.color};
  font-size: 1.3rem;
`;

interface IMessageProps {
  color: string;
  message: string;
}

function Message({ color, message }: IMessageProps) {
  return <Container><Text color={color}>{message}</Text></Container>;
}

export default Message;
