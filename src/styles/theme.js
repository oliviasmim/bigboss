import { createTheme } from '@material-ui/core';

export const theme = createTheme({
	typography: {
		fontFamily: "Inter, sans-serif",
	},
	overrides: {
		// Style sheet name ⚛️
        MuiInputBase: {
            root: {
                backgroundColor: "white",
                borderRadius: 34,
                paddingLeft: ".3rem",
                "&:before" :{
                    borderColor: "yellow"
                },
                
            },
            input: {
                textAlign: "center",
            },
            
        },
        
        
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
			textSecondary: {
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
