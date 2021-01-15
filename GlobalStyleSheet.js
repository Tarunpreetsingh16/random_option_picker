import { StyleSheet, Platform, StatusBar } from 'react-native';

export default styleSheet = StyleSheet.create({
	androidSafeArea: {
		flexDirection: 'column',
		flex: 1,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
	mainView: {
		flex: 1,
		flexDirection: 'column',
	},
	headerContainer: {
		backgroundColor: '#000000',
		padding: 20,
	},
	colorWhite: {
		color: '#ffffff',
		fontWeight: 'bold',
		fontSize: 40,
	},
	mainAppContainer: {
		flex: 1,
		flexDirection: 'column',
	},
	spinnerContainer: {
		flex: 3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonsContainer: {
		flex: 1,
		flexDirection: 'row',
	},
	executeButton: {
		flex: 1,
		backgroundColor: '#92C98E',
		justifyContent: 'center',
		alignItems: 'center',
	},
	proceedButton: {
		flex: 1,
		backgroundColor: '#2998EC',
		justifyContent: 'center',
		alignItems: 'center',
	},
	actionButtons: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
	},
});
