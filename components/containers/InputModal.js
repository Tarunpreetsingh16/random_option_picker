/*InputModal - Modal created to take the input from the user*/
import React, { useState } from 'react';
import {
	Text,
	View,
	Modal,
	TouchableOpacity,
	TextInput,
	ToastAndroid,
	Platform,
} from 'react-native';
import styleSheet from '../../GlobalStyleSheet';
/*=>props
visible = state value sent from Main app to hide and show the modal
showHideModal = method sent from Main app to update the value of visible state in parent i.e. MainApp.js */
export const InputModal = ({ visible, showHideModal, addOption }) => {
	/*
	Variables Section
	*/
	const [optionInput, setOptionInput] = useState('');

	/*
	Methods Section
	*/
	//method to cancel the modal
	const cancelModal = () => {
		//hide the modal
		showHideModal(false);
		//clear the input field
		setOptionInput('');
	};
	//method to update the list when confirm is clicked
	const updateList = () => {
		//check if any option has been entered by the user and is not blank
		if (optionInput.trim().length === 0) {
			if (Platform.OS == 'android')
				ToastAndroid.show('Enter an option first!', ToastAndroid.SHORT);
			return;
		}
		//add the option to the list and then hide the modal
		addOption(optionInput);
		cancelModal();
	};

	return (
		//Main modal component
		<Modal animationType='slide' visible={visible} transparent={true}>
			{/*View created to dim the background for user experience*/}
			<View style={styleSheet.inputModalContainer}>
				{/*Actual View containing the elements of the modal*/}
				<View style={styleSheet.liftedModalContainer}>
					<View style={{ justifyContent: 'flex-start', width: '80%' }}>
						<TextInput
							style={styleSheet.textInputStyle}
							placeholder='Enter your option here...'
							onChangeText={(option) => setOptionInput(option)}
							value={optionInput}
						/>
					</View>
					{/*View holding the confirm and cancel buttons of modal*/}
					<View
						style={{
							...styleSheet.buttonsContainer,
							flex: 0,
							justifyContent: 'space-between',
							width: '50%',
						}}
					>
						{/*Button to close the input modal*/}
						<TouchableOpacity
							activeOpacity={0.7}
							onPress={cancelModal}
							style={styleSheet.dangerButton}
						>
							<Text
								style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}
							>
								Cancel
							</Text>
						</TouchableOpacity>
						{/*Button to add the option to the list and close the modal afterwards*/}
						<TouchableOpacity
							activeOpacity={0.7}
							style={styleSheet.proceedButton}
							onPress={updateList}
						>
							<Text
								style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}
							>
								Confirm
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default InputModal;
