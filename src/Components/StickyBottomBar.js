import React from 'react';
import styled from '@emotion/styled'
import {Box, Text} from 'stormbreaker'
import {ReactComponent as Menu} from '../assets/menu.svg'

const MenuIcon = styled(Menu)`
  color: ${props => props.theme.colors.primary}
`

function StickyBottomBar() {
	return (
		<Box
			minHeight={70}
			display='flex'
			alignItems='center'
			justifyContent='space-between'
			width='100%'
			px={6}
			bg='white'
			style={{
				position: 'fixed',
				bottom: 0,
				left: 0,
				borderTopLeftRadius: '16px',
				borderTopRightRadius: '16px',
			}}
		>
			<MenuIcon height={21} width={28} />

			<Text variant='body1' fontWeight='semibold'>
				Home
			</Text>
			<Text variant='body1' fontWeight='semibold'>
				Add
			</Text>
		</Box>
	);
}

export default StickyBottomBar;
