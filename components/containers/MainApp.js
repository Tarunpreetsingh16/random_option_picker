import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import styleSheet from '../../GlobalStyleSheet';
import { Spinner } from './Spinner';
export const MainApp = () => {
	return (
		<View style={styleSheet.mainAppContainer}>
			<View style={styleSheet.spinnerContainer}>
				<Spinner />
			</View>
			<View style={styleSheet.buttonsContainer}>
				<TouchableOpacity style={styleSheet.executeButton} activeOpacity={0.7}>
					<Text style={styleSheet.actionButtons}>SPIN</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styleSheet.proceedButton} activeOpacity={0.7}>
					<Text style={styleSheet.actionButtons}>ADD</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default MainApp;
