import React from "react";
import {View, Text} from "react-native";

export const applyCustomCode = externalCodeSetup => {
	externalCodeSetup.navigationApi.replaceScreenComponent(
		"SignupScreen",
		() => (
			<View
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#000000"
				}}
			>
				<Text
					style={{
						color: "#c9b172",
						fontSize: 26,
						fontWeight: "700"
					}}
				>
					Reset Circle Custom Code Loaded
				</Text>

				<Text
					style={{
						color: "#ffffff",
						fontSize: 16,
						marginTop: 12
					}}
				>
					This is the custom signup screen.
				</Text>
			</View>
		)
	);
};