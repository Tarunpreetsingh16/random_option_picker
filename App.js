import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { MainApp } from './components/containers/MainApp';
import { Header } from './components/Header';
import styleSheet from './GlobalStyleSheet';
export default function App() {
	return (
		<SafeAreaView style={styleSheet.androidSafeArea}>
			<View style={styleSheet.mainView}>
				<Header />
				<MainApp />
			</View>
		</SafeAreaView>
	);
}
