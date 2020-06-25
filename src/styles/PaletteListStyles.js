import sizes from "./sizes";
import bg from "./bg.svg";

export default {
	"@global": {
		".fade-exit": {
			opacity: 1,
		},
		".fade-exit-active": {
			opacity: 0,
			transition: "opacity 500ms ease-out",
		},
	},
	root: {
		height: "100vh",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		backgroundColor: "#1387a1",
		backgroundImage: `url(${bg})`,
		overflow: "scroll",
	},
	heading: {
		fontSize: "2rem",
		textShadow: "0 0 4px black",
	},
	container: {
		width: "50%",
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
		[sizes.down("xl")]: {
			width: "80%",
		},
		[sizes.down("xs")]: {
			width: "75%",
		},
	},
	nav: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		color: "white",
		"& a": {
			color: "white",
			textDecoration: "none",
			fontWeight: "700",
			textShadow: "0 0 4px black",
		},
	},
	palettes: {
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(3, 30%)",
		gridGap: "2.5rem",
		[sizes.down("md")]: {
			gridTemplateColumns: "repeat(2, 50%)",
		},
		[sizes.down("xs")]: {
			gridTemplateColumns: "repeat(1, 100%)",
			gridGap: "1.4rem",
		},
	},
};
