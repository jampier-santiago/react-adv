import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import { pages } from "../03-forms/pages";
import logo from "../logo.svg";

const {
  FormikAbstractPage,
  FormikBasicPage,
  FormikComponentsPage,
  FormikYupPage,
  Register,
  RegisterFormik,
  DynamicForm,
} = pages;

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>
                Register page
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" activeClassName="nav-active" exact>
                Formik basic
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                activeClassName="nav-active"
                exact
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstract-page"
                activeClassName="nav-active"
                exact
              >
                Formik AbstractPage
              </NavLink>
            </li>
            <li>
              <NavLink to="/register-formik" activeClassName="nav-active" exact>
                Register Formik
              </NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-formik" activeClassName="nav-active" exact>
                Dynamic Formik
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/formik-basic">
            <FormikBasicPage />
          </Route>
          <Route path="/formik-yup">
            <FormikYupPage />
          </Route>
          <Route path="/formik-components">
            <FormikComponentsPage />
          </Route>
          <Route path="/formik-abstract-page">
            <FormikAbstractPage />
          </Route>
          <Route path="/register-formik">
            <RegisterFormik />
          </Route>
          <Route path="/dynamic-formik">
            <DynamicForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
