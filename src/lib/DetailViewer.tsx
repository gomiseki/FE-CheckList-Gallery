import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface IFrameProps {
  marginwidth: string;
  marginheight: string;
  frameborder: string;
}

const FrameViewer = styled.iframe<IFrameProps>`
    width:100%;
    height: 100%;
    margin: 0;
`;

const Container = styled.div`
    width:100%;
    height: 500px;
    overflow: visible;
    resize: both;
`;

export function DetailViewer({ files }:any) {
  const [defaultFile, setDefaultFile] = useState<string>();
  useEffect(() => {
    if (files) {
      files.forEach((file: any) => {
        if (file.fileName === 'index.jsx') {
          const fileEndPoint = file.fileUrl
            .split('/')
            .slice(-2, -1)
            .join();
          setDefaultFile(fileEndPoint);
        }
      });
    }
  }, []);
  return (
    <Container>
      {defaultFile && <FrameViewer marginwidth="0" marginheight="0" frameborder="0" src={`${import.meta.env.VITE_VIEWER_URL}/${defaultFile}`} />}
    </Container>
  );
}
