import { DRAWER_WIDTH } from "../constants";
import sizes from "./sizes";
const drawerWidth = DRAWER_WIDTH;

const styles = (theme) => ({
	root: {
		display: "flex",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		height: "100vh",
	},
	drawerPaper: {
		width: drawerWidth,
		display: "flex",
		alignItems: "center",
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		width: "100%",
		padding: "0 8px",
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	},
	iconlft: {
		backgroundColor: "#dce2e4",
		[sizes.down("xs")]: {
			margin: "2.2rem",
		},
	},
	content: {
		flexGrow: 1,
		height: "calc(100vh - 64px)",
		padding: 0,
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
	container: {
		width: "90%",
		height: "100%",
		fontFamily: "Roboto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		[sizes.down("xs")]: {
			width: "80%",
			marginTop: "-2rem",
			marginLeft: "-1.6rem",
		},
	},

	buttons: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
	},
	button: {
		width: "50%",
		margin: "2px",
		borderRadius: "1rem",
	},
});

export default styles;
