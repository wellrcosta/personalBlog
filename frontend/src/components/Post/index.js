import React from 'react';
import Markdown from 'markdown-to-jsx';
import { Container, Header } from 'semantic-ui-react';
import './styles.css';

export default function Post(props) {
	return (
    <div>
      <Container textAlign='left'>
      <Header as='h2'>{props.title}</Header>
      <p>
        <Markdown>{props.body}
        </Markdown>
      </p>
      </Container>
    </div>
  );
}
