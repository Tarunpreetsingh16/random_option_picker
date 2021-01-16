/*MainApp - Component created to contain all the application*/
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styleSheet from '../../GlobalStyleSheet';
import { Spinner } from './Spinner';
import { InputModal } from './InputModal';
export const MainApp = () => {
	//State created to hide and show the input modal which will be sent to child InputModal.js
	const [modalVisibility, setModalVisibility] = useState(false);
	//Method created to update the value of the modalVisibility State on the basis of the button pressed
	const showHideModal = (value) => {
		setModalVisibility(value);
	};
	return (
		/*Main View created to contain the whole app*/
		<View style={styleSheet.mainAppContainer}>
			{/*View created as a placeholder for spinner which will run when spin is clicked*/}
			<View style={styleSheet.spinnerContainer}>
				<Spinner />
			</View>
			{/*View created to contain the buttons - add and spin*/}
			<View style={styleSheet.buttonsContainer}>
				{/*Button to spin the spinner*/}
				<TouchableOpacity style={styleSheet.executeButton} activeOpacity={0.7}>
					<Text style={styleSheet.actionButtons}>SPIN</Text>
				</TouchableOpacity>
				{/*Button to open the input modal box*/}
				<TouchableOpacity
					style={{
						...styleSheet.executeButton,
						borderRightWidth: 0,
						borderLeftWidth: 2,
					}}
					activeOpacity={0.7}
					onPress={() => showHideModal(true)}
				>
					<Text style={styleSheet.actionButtons}>ADD</Text>
				</TouchableOpacity>
			</View>
			<View>
				{/*Input modal to get the input from the user*/}
				<InputModal visible={modalVisibility} showHideModal={showHideModal} />
			</View>
		</View>
	);
};

export default MainApp;
