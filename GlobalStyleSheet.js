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
		flex: 6,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonsContainer: {
		flex: 1,
		flexDirection: 'row',
	},
	executeButton: {
		flex: 1,
		backgroundColor: 'black', //'#92C98E',
		justifyContent: 'center',
		alignItems: 'center',
		borderRightWidth: 2,
		borderColor: 'white',
	},
	actionButtons: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
	},
	inputModalContainer: {
		backgroundColor: 'rgba(24,24,24,0.5)',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	liftedModalContainer: {
		backgroundColor: 'rgba(24,24,24,1)',
		height: '50%',
		width: '80%',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		...Platform.select({
			ios: {
				shadowOffset: { width: 1, height: 1 },
			},
			android: {
				elevation: 20,
			},
		}),
		shadowRadius: 16.0,
	},
	dangerButton: {
		padding: 10,
		backgroundColor: 'rgba(211,93,110,1)',
		justifyContent: 'center',
		alignItems: 'center',
		borderRightWidth: 2,
		borderColor: 'white',
	},
	proceedButton: {
		padding: 10,
		backgroundColor: 'rgba(116,199,184,1)',
		justifyContent: 'center',
		alignItems: 'center',
		borderLeftWidth: 1,
		borderColor: 'white',
	},
});
