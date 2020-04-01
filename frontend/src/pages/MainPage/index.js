import React from 'react';
import Post from '../../components/Post';
import { Grid } from 'semantic-ui-react';

export default function MainPage(props) {
	return (
		<div>
			<Grid>
				<Grid.Column width={2}>
					<Post title="TESTE" body="# VISH"></Post>
				</Grid.Column>
				<Grid.Column width={14}>
					<Post title="TESTE" body="# VISH"></Post>
				</Grid.Column>
			</Grid>
		</div>
	);
}
