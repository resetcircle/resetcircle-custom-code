import React from "react";
import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native";

const RESET_CIRCLE_GOLD = "#c9b172";

const ResetCircleLiveTestScreen = ({navigation}) => (
	<SafeAreaView style={styles.safeArea}>
		<View style={styles.content}>
			<Text style={styles.title}>Reset Circle Live</Text>
			<Text style={styles.supportingText}>Custom code is connected.</Text>
			<TouchableOpacity
				accessibilityRole="button"
				onPress={() => navigation.goBack()}
				style={styles.closeButton}
			>
				<Text style={styles.closeButtonText}>Close</Text>
			</TouchableOpacity>
		</View>
	</SafeAreaView>
);

const styles = StyleSheet.create({
	safeArea: {
		backgroundColor: "#000000",
		flex: 1
	},
	content: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 24,
		paddingVertical: 32
	},
	title: {
		color: RESET_CIRCLE_GOLD,
		fontSize: 30,
		fontWeight: "700",
		textAlign: "center"
	},
	supportingText: {
		color: "#ffffff",
		fontSize: 17,
		marginTop: 12,
		textAlign: "center"
	},
	closeButton: {
		alignItems: "center",
		borderColor: RESET_CIRCLE_GOLD,
		borderRadius: 6,
		borderWidth: 1,
		marginTop: 32,
		minWidth: 120,
		paddingHorizontal: 24,
		paddingVertical: 12
	},
	closeButtonText: {
		color: RESET_CIRCLE_GOLD,
		fontSize: 16,
		fontWeight: "600"
	}
});

export default ResetCircleLiveTestScreen;
