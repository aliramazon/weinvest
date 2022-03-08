import React, { createContext, useReducer, useContext } from 'react';
import { rootReducer, GlobalState, ActionType, initialState } from '../store';

interface AppContextType {
    state: GlobalState;
    dispatch(action: ActionType): void;
}
const AppContext = createContext<AppContextType>({
    state: initialState,
    dispatch: () => undefined
});

interface AppProviderType {
    children: React.ReactNode;
}
export const AppProvider: React.FC<AppProviderType> = ({ children }) => {
    const [state, dispatch] = useReducer<
        React.Reducer<GlobalState, ActionType>
    >(rootReducer, initialState);

    const value = { state, dispatch };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useStore = () => {
    const { state, dispatch } = useContext<AppContextType>(AppContext);
    return { state, dispatch };
};
