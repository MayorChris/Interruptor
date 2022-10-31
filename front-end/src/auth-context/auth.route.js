import { RolesApi } from "api-auth/auth";
async function authRoute(role) {
  try {
    console.log("Roles aqui");
    let routes;
    await RolesApi.Login(role).then((response) => {
      const data = response.data;
      data.map((item) => {
        if (item.permission == "route") {
          routes.push(item.route);
        }
        return item;
      });
      console.log(routes);
    });
    return routes;
  } catch (err) {
    console.log(err);
  }
}

export default authRoute;
