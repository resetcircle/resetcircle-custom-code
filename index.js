import MoreScreenDiagnostic from "./src/screens/MoreScreenDiagnostic";
import ResetCircleLiveTestScreen from "./src/screens/ResetCircleLiveTestScreen";

export const applyCustomCode = externalCodeSetup => {
	externalCodeSetup.indexJsApi.addIndexJsFunction(() => {
		console.log("RESET_CIRCLE_CUSTOM_CODE_LOADED");
	});

	externalCodeSetup.navigationApi.addNavigationRoute(
		"ResetCircleLiveTest",
		"ResetCircleLiveTest",
		ResetCircleLiveTestScreen,
		"Main"
	);

	// TEMPORARY DIAGNOSTIC: restore the standard More screen after verification.
	externalCodeSetup.navigationApi.replaceScreenComponent(
		"MoreScreen",
		MoreScreenDiagnostic
	);
};
