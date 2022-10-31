import { React, useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import { useAuth } from "auth-context/auth.context";
import swal from "@sweetalert/with-react";
import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";

// Go Coffee context
import { useMaterialUIController, setLayout } from "context";

const ProtectedRoute = (route) => {
  const [, dispatch] = useMaterialUIController();
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);

  // const navigate = useNavigate();
  const { _user } = useAuth();
  console.log("_user");
  console.log(_user);
  // const [show, setShow] = useState(true);

  const MoodButton = () => (
    <Button
      onClick={() => {
        console.log("navigate");
        // navigate("/");
        swal("Thanks for your rating!", `You rated us /3`, "success");
      }}
    >
      Click me
    </Button>
  );
  const SweetAlert = ({ title, text }) => {
    swal({
      title,
      text,
      icon: "warning",
      button: "Aceptar",
      content: <MoodButton />,
    });
  };
  if (!_user || !_user.token || _user.token === "") {
    console.log("SweetAlert");
    console.log(SweetAlert);
    return (
      <SweetAlert
        title="¡Debe haber iniciado sesión!"
        text="Inicie Sesión"
        path="/authentication/sign-in"
      />
    );
    // return (
    //   <Stack>
    //     <Button
    //       onClick={() => {
    //         navigate("/");
    //       }}
    //     >
    //       Click me
    //     </Button>
    //   </Stack>
    // );
  }

  // const routesRole = _user.routes;
  // const index = routesRole.indexOf({ route }.path);

  // if (index == -1) {
  //   return (
  //     <SweetAlert
  //       show={show}
  //       title="¡No tiene permiso para acceder a esta ruta!"
  //       onCancel={() => history.push("/home")}
  //       onConfirm={() => setShow(false)}
  //     />
  //   );
  // }
  console.log(_user.role);
  console.log("{ ...rest }");
  console.log({ route });
  return <Route exact path={{ route }.route} element={{ route }.component} key={{ route }.key} />;
};

export default ProtectedRoute;
