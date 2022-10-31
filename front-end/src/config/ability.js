import { RolesApi } from "api-auth/auth";

async function authAbility(role) {
  try {
    console.log("Reglas aqui");
    console.log(role);
    let rules;
    await RolesApi.Login(role).then((response) => {
      const data = response.data;
      rules = data.map((item) => {
        const rul = {
          action: item.action,
          subject: item.subject,
        };
        return rul;
      });
      console.log("rules");
      console.log(rules);
    });
    return rules;
  } catch (err) {
    console.log(err);
  }
}

export default authAbility;
