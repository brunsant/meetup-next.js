import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
  // layout is actually a wrapper to create a header/nav bar
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
