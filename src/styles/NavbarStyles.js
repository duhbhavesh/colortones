import sizes from "./sizes";

export default {
	Navbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		height: "8vh",
		[sizes.down("xs")]: {
			flexDirection: "column",
			height: "auto",
			justifyContent: "center",
			padding: "1rem 0",
		},
	},
	logo: {
		marginRight: "15px",
		padding: "0 13px",
		fontSize: "22px",
		backgroundColor: "#eceff1",
		textShadow: "0 0 4px white",
		fontFamily: "Roboto",
		height: "100%",
		display: "flex",
		alignItems: "center",
		[sizes.down("xs")]: {
			padding: "0.5rem",
			marginBottom: "1rem",
			borderRadius: "1.5rem",
		},
		"& a": {
			textDecoration: "none",
			color: "black",
		},
	},
	slider: {
		width: "250px",
		margin: "0 10px",
		display: "inline-block",
		"& .rc-slider-track": {
			backgroundColor: "transparent",
		},
		"& .rc-slider-rail": {
			height: "8px",
		},
		"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover": {
			backgroundColor: "cyan",
			outline: "none",
			border: "2px solid black",
			boxShadow: "none",
			width: "13px",
			height: "13px",
			marginTop: "-3px",
		},
		[sizes.down("sm")]: {
			width: "150px",
		},
	},
	selectContainer: {
		marginLeft: "auto",
		marginRight: "1rem",
		[sizes.down("xs")]: {
			marginLeft: "0",
			marginTop: "1rem",
		},
	},
};
