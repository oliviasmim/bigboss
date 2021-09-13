import { createGlobalStyle } from 'styled-components';
import { createTheme } from '@material-ui/core/styles';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --white:#f5f5f5;
        --black:#0c0d0d;
        --white-gray:#EAF0FC;
        --blue: #134087;
    }

`
export const theme = createTheme({
	overrides: {
		// Style sheet name ⚛️

		MuiButton: {
			// Name of the rule
			root: {
				"&:active": {
					transform: "translate(1px, 1px)",
					boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.75)",
					transition: "",
				},
				"&:hover": {
					boxShadow: "0 2px 5px 2px rgba(0, 0, 0, 0.5)",
				},

				border: 0,
				color: "white",
				fontWeight: "bold",
				padding: ".3rem 1.5rem",
				boxShadow: "0 2px 5px 2px rgba(0, 0, 0, 0.5)",
			},
			containedPrimary: {
				// Some CSS
				backgroundColor: "var(--blue)",
				borderRadius: 34,
				"&:hover": {
					backgroundColor: "hsl(210, 75%, 20%)",
					boxShadow: "0 2px 5px 2px rgba(0, 0, 0, 0.5)",
				},
				alignSelf: "flex-end",
				boxShadow: "0 2px 5px 2px rgba(0, 0, 0, 0.5)",
			},
			containedSecondary: {
				// Some CSS
				backgroundColor: "hsl(359, 89%, 66%)",
				borderRadius: 34,
				"&:hover": {
					backgroundColor: "hsl(355, 65%, 50%)",
					boxShadow: "0 2px 5px 2px rgba(0, 0, 0, 0.5)",
				},
				alignSelf: "flex-end",
				boxShadow: "0 2px 5px 2px rgba(0, 0, 0, 0.5)",
			},
			outlinedPrimary: {
				backgroundColor: "var(--blue)",
				alignSelf: "flex-end",
				color: "white",
				"&:hover": {
					backgroundColor: "hsl(210, 75%, 20%)",
					boxShadow: "0 2px 5px 2px rgba(0, 0, 0, 0.5)",
				},
				"&:active": {
					transform: "translate(1px, 1px)",
					boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.75)",
					transition: "",
				},
				boxShadow: "0 2px 4px 1px rgba(0, 0, 0, 0.5)",
			},
		},
	},
});