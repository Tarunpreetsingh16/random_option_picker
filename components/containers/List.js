/*List -List created to visualize options entered by the user*/
import React, { useState, useEffect } from 'react';
import {
	FlatList,
	View,
	Text,
	TouchableOpacity,
	Dimensions,
} from 'react-native';
import styleSheet from '../../GlobalStyleSheet';
import Icon from 'react-native-vector-icons/FontAwesome';
export const List = ({ options, removeOption }) => {
	/*Method section */

	//method to delete the option from the list
	const deleteOption = (index) => {
		removeOption(index);
	};
	return (
		<View style={{ flex: 1 }}>
			{options.length != 0 ? (
				<FlatList
					data={options}
					renderItem={(item) => {
						return (
							<View style={styleSheet.listItem}>
								<Text style={styleSheet.lisItemTitle}>{item.item}</Text>
								<TouchableOpacity
									activeOpacity={0.5}
									onPress={() => deleteOption(item.index)}
								>
									<Icon name='trash' size={25} color='red' />
								</TouchableOpacity>
							</View>
						);
					}}
					keyExtractor={(option, index) => {
						return `${index}${option}`;
					}}
					contentContainerStyle={styleSheet.listStyle}
				/>
			) : (
				<View
					style={{
						width: Dimensions.get('window').width,
						alignItems: 'center',
					}}
				>
					<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Add options</Text>
				</View>
			)}
		</View>
	);
};

export default List;
