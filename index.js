import ResetCircleLiveTestScreen from "./src/screens/ResetCircleLiveTestScreen";

export const applyCustomCode = externalCodeSetup => {
	externalCodeSetup.navigationApi.addNavigationRoute(
		"ResetCircleLiveTest",
		"ResetCircleLiveTest",
		ResetCircleLiveTestScreen,
		"Main"
	);
};
