import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export default ((props: PropsWithChildren<{}>) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
}) as React.FC<PropsWithChildren<{}>>;
