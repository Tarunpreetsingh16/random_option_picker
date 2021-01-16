/*InputModal - Modal created to take the input from the user*/
import React from 'react';
import { Text, View, Modal, TouchableOpacity } from 'react-native';
import styleSheet from '../../GlobalStyleSheet';
/*=>props
visible = state value sent from Main app to hide and show the modal
showHideModal = method sent from Main app to update the value of visible state in parent i.e. MainApp.js */
export const InputModal = ({ visible, showHideModal }) => {
	return (
		//Main modal component
		<Modal animationType='slide' visible={visible} transparent={true}>
			{/*View created to dim the background for user experience*/}
			<View style={styleSheet.inputModalContainer}>
				{/*Actual View containing the elements of the modal*/}
				<View style={styleSheet.liftedModalContainer}>
					{/*View holding the confirm and cancel buttons of modal*/}
					<View style={{ ...styleSheet.buttonsContainer, flex: 0 }}>
						{/*Button to close the input modal*/}
						<TouchableOpacity
							activeOpacity={0.7}
							onPress={() => showHideModal(false)}
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
