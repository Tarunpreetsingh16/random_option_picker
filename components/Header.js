import React from 'react';
import { Text, View } from 'react-native';
import styleSheet from '../GlobalStyleSheet';

export const Header = () => {
	return (
		<View style={styleSheet.headerContainer}>
			<Text style={styleSheet.colorWhite}>Turn it</Text>
		</View>
	);
};
export default Header;
