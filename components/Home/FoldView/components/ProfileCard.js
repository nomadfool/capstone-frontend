import React, { Component } from 'react';

import { View, Text, TouchableHighlight, StyleSheet, Image } from 'react-native';

import FoldView from 'react-native-foldview';

import ProfileDetailCard from './ProfileDetailCard';
import AdditionalInfoCard from './AdditionalInfoCard';

import { ThinGrayLine, ThickDarkGrayLine } from './Lines';

export default class Row extends Component {
	componentWillMount() {
		this.renderBackface = this.renderBackface.bind(this);
		this.renderInnerBackFace = this.renderInnerBackFace.bind(this);
	}

	renderBlankFace() {
		return (
			<View
				style={{
					backgroundColor : '#D6EFFF',
					flex            : 1
				}}
			/>
		);
	}

	renderBackface() {
		const onPress = this.props.onPress;
		return (
			<View style={{ flex: 1 }}>
				<FoldView renderFrontface={this.renderBlankFace} renderBackface={this.renderInnerBackFace}>
					<AdditionalInfoCard onPress={onPress} table={this.props.table} />
				</FoldView>
			</View>
		);
	}

	renderInnerBackFace() {
		const onPress = this.props.onPress;
		return <View />;
	}

	render() {
		const onPress = this.props.onPress;
		const table = this.props.table;

		return (
			<View
				style={{
					flex            : 1,
					backgroundColor : '#fff',
					flexDirection   : 'column'
				}}
			>
				<View style={{ flex: 1 }}>
					<View
						style={{
							flex          : 1,
							paddingBottom : 10,
							padding       : 16
						}}
					>
						<Text>{table.game.name}</Text>

						<View
							style={{
								marginTop     : 10,
								flexDirection : 'row'
							}}
						>
							<View
								style={{
									flex          : 1,
									flexDirection : 'column'
								}}
							>
								<Image style={{ width: 50, height: 50 }} source={{ uri: `${table.game.image}` }} />
							</View>

							<View
								style={{
									flex          : 1,
									flexDirection : 'column'
								}}
							>
								<Text>{table.game_date}</Text>
								<Text>{table.start_time}</Text>
							</View>
						</View>
					</View>

					<View style={{ flex: 1 }}>
						<FoldView renderFrontface={this.renderBlankFace} renderBackface={this.renderBackface}>
							<ProfileDetailCard onPress={onPress} table={this.props.table} />
						</FoldView>
					</View>
				</View>
			</View>
		);
	}
}
