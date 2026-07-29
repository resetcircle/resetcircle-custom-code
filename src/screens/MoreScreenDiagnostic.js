import React from "react";
import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native";

const RESET_CIRCLE_GOLD = "#c9b172";

// TEMPORARY DIAGNOSTIC: remove this component after custom-code loading is verified.
const MoreScreenDiagnostic = ({navigation}) => (
	<SafeAreaView style={styles.safeArea}>
		<View style={styles.content}>
			<Text style={styles.title}>RESET CIRCLE CUSTOM CODE LOADED</Text>

			<View style={styles.details}>
				<Text style={styles.label}>Repository:</Text>
				<Text style={styles.value}>resetcircle-custom-code</Text>
				<Text style={styles.label}>Branch:</Text>
				<Text style={styles.value}>master</Text>
			</View>

			<TouchableOpacity
				accessibilityRole="button"
				onPress={() => navigation.navigate("ResetCircleLiveTest")}
				style={styles.button}
			>
				<Text style={styles.buttonText}>Open Live Test</Text>
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
		fontWeight: "800",
		lineHeight: 38,
		textAlign: "center"
	},
	details: {
		marginTop: 36,
		width: "100%"
	},
	label: {
		color: "#ffffff",
		fontSize: 16,
		fontWeight: "700",
		marginTop: 12,
		textAlign: "center"
	},
	value: {
		color: "#ffffff",
		fontSize: 18,
		marginTop: 4,
		textAlign: "center"
	},
	button: {
		alignItems: "center",
		borderColor: RESET_CIRCLE_GOLD,
		borderRadius: 6,
		borderWidth: 2,
		marginTop: 40,
		minWidth: 180,
		paddingHorizontal: 24,
		paddingVertical: 14
	},
	buttonText: {
		color: RESET_CIRCLE_GOLD,
		fontSize: 17,
		fontWeight: "700"
	}
});

export default MoreScreenDiagnostic;
