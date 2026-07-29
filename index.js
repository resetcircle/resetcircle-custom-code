import ResetCircleLiveTestScreen from "./src/screens/ResetCircleLiveTestScreen";

export const applyCustomCode = externalCodeSetup => {
	externalCodeSetup.navigationApi.addNavigationRoute(
		"ResetCircleLiveTest",
		"ResetCircleLiveTest",
		ResetCircleLiveTestScreen,
		"Main"
	);

	externalCodeSetup.moreScreenApi.setTabsList(
		(sections, _dispatch, navigation) => [
			...sections,
			{
				label: "RESET CIRCLE",
				screens: [
					{
						item: {
							hasNavArrow: true,
							label: "Reset Circle Live Test",
							onPress: () =>
								navigation.navigate("ResetCircleLiveTest")
						},
						routeName: "ResetCircleLiveTest"
					}
				]
			}
		]
	);
};
