import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';

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
		flexDirection: 'row',
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
		height: '30%',
		width: '80%',
		justifyContent: 'space-evenly',
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
	},
	proceedButton: {
		padding: 10,
		backgroundColor: 'rgba(116,199,184,1)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	textInputStyle: {
		backgroundColor: 'white',
		paddingVertical: 2,
		paddingHorizontal: 5,
		fontWeight: 'bold',
	},
	listStyle: {
		flexGrow: 1,
		backgroundColor: 'rgba(0,0,0,0.3)',
		alignItems: 'center',
	},
	listItem: {
		flexDirection: 'row',
		width: (Dimensions.get('window').width / 100) * 90,
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 5,
		marginVertical: 10,
		...Platform.select({
			ios: {
				shadowOffset: { width: 1, height: 1 },
			},
			android: {
				elevation: 15,
			},
		}),
		shadowRadius: 0.0,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	lisItemTitle: {
		fontWeight: 'bold',
		fontSize: 25,
	},
});
