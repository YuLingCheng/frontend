import Button from 'antd/lib/button';
import message from 'antd/lib/message';
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import cssLang from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import xcode from 'react-syntax-highlighter/dist/esm/styles/hljs/xcode';
import styled from 'styled-components';

SyntaxHighlighter.registerLanguage('css', cssLang);

const info = () => {
  message.success('Copied!');
};

const Container = styled.div`
  padding: 5px 15px;
`;

const CodePanel = ({ codeString }) => (
  <Container>
    <h3>Generated CSS</h3>
    <p>Here is the code to match the container and the children you designed.</p>
    <p>
      Adapt the fixed sizes values (<i>width</i>, <i>height</i>, <i>flex-basis</i>) according to the
      actual values from the mockup.
    </p>
    <div style={{ position: 'relative' }}>
      <CopyToClipboard text={codeString} onCopy={info}>
        <Button icon="copy" size="small" style={{ position: 'absolute', right: '5px', top: '5px' }}>
          Copy to clipboard
        </Button>
      </CopyToClipboard>
      <SyntaxHighlighter language="css" style={xcode}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  </Container>
);

export default CodePanel;
