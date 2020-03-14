export const reducer = (statement, action) => {
    switch (action.type) {
        case 'appStateChange':

        return {
            ...state,
            appState: action.newAppStateChange
        };

        default:
        return state;
    };
};