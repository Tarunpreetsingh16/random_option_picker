/*MainApp - Component created to contain all the application*/
import React, { useState } from 'react';
import {
	Text,
	TouchableOpacity,
	View,
	ToastAndroid,
	Platform,
} from 'react-native';
import styleSheet from '../../GlobalStyleSheet';
import { List } from './List';
import { InputModal } from './InputModal';
export const MainApp = () => {
	/*
	Variable Section
	*/

	//State created to hide and show the input modal which will be sent to child InputModal.js
	const [modalVisibility, setModalVisibility] = useState(false);
	//OPtions list to maintain the options entered by the user
	const [options, setOptions] = useState([]);

	//upper and lower bound to find the random number
	// const upperLimit = 2000000;
	// const lowerLimit = 1;

	/*
	Method section
	*/

	//Method created to update the value of the modalVisibility State on the basis of the button pressed
	const showHideModal = (value) => {
		setModalVisibility(value);
	};
	//Method to add options to the list
	const addOption = (option) => {
		//check if the list already has 10 items, it cannot have more than that!
		if (options.length === 10) {
			if (Platform.OS == 'android')
				ToastAndroid.show('Cannot add more than 10!', ToastAndroid.SHORT);
			return;
		}
		//add the option to the list
		setOptions((options) => [...options, option]);
	};

	//method to remvoe the option form the list
	const removeOption = (removeIndex) => {
		setOptions((options) =>
			options.filter((option, index) => {
				return index != removeIndex;
			})
		);
	};

	//method to find the random option from the provided list
	const spin = () => {
		//check that the list is not empty
		if (options.length === 0) {
			if (Platform.OS == 'android')
				ToastAndroid.show('No options added!', ToastAndroid.SHORT);
			return;
		}
		//alert box here
		//get list length to get the max length that we can pick
		const optionsLength = options.length;
		let randomNumber = Math.floor(Math.random() * optionsLength);

		if (Platform.OS == 'android')
			ToastAndroid.show(options[randomNumber], ToastAndroid.SHORT);
	};
	return (
		/*Main View created to contain the whole app*/
		<View style={styleSheet.mainAppContainer}>
			{/*View created as a placeholder for spinner which will run when spin is clicked*/}
			<View style={styleSheet.spinnerContainer}>
				<List options={options} removeOption={removeOption} />
			</View>
			{/*View created to contain the buttons - add and spin*/}
			<View style={styleSheet.buttonsContainer}>
				{/*Button to spin the spinner*/}
				<TouchableOpacity
					style={styleSheet.executeButton}
					activeOpacity={0.7}
					onPress={spin}
				>
					<Text style={styleSheet.actionButtons}>RUN</Text>
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
				<InputModal
					visible={modalVisibility}
					showHideModal={showHideModal}
					addOption={addOption}
				/>
			</View>
		</View>
	);
};

export default MainApp;
