import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  authcard: {
    marginTop: "10vh",
    minWidth: "30vw",
    padding: theme.spacing(3),
  },

  link: {
    paddingRight: theme.spacing(2),
    color: "#3385ff",
    textDecoration: "none",
  },

  chartCard: {
    padding: theme.spacing(3),
  },

  searchSelect: {
    textAlignLast: "center",
  },

  tooltip: {
    maxWidth: "500px",
  },

  dialogDeep: {
    minWidth: "1000px !important",
    height: "90vh !important",
    maxWidth: "1000px !important",
  },

  dialogCloseBtn: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 100,
  },

  contentSection: {
    backgroundColor: grey[500],
    height: "100%",
    maxHeight: "55vh",
    overflow: "auto",
  },

  label: {
    fontSize: 14,
  },
}));

export default useStyles;
