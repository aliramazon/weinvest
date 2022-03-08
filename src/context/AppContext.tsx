import React, { createContext, useReducer, useContext } from 'react';
import { rootReducer, GlobalState, ActionType } from '../store';

interface AppContextType {
    state: GlobalState;
    dispatch<T>(action: ActionType<T>): void;
}
const AppContext = createContext<AppContextType>({
    state: {} as GlobalState,
    dispatch: () => {}
});

interface AppProviderType {
    children: React.ReactNode;
}
export const AppProvider: React.FC<AppProviderType> = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, {} as GlobalState);

    const value = { state, dispatch };

    return (
        <AppContext.Provider value={value as AppContextType}>
            {children}
        </AppContext.Provider>
    );
};

export const useStore = () => {
    const { state, dispatch } = useContext<AppContextType>(AppContext);
    return { state, dispatch };
};
