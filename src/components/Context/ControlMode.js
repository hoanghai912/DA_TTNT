import { useState, createContext, useContext } from "react";

const ControlModeContext = createContext()

function ControlModeProvider(props) {
	const [controlmode, setControlmode] = useState(null);
	return <ControlModeContext.Provider value={ {controlmode, setControlmode }}>
            {props.children}
		</ControlModeContext.Provider>
}

function useControlmode() {
	const context = useContext(ControlModeContext);

	return context;
}

export { ControlModeProvider, useControlmode };
