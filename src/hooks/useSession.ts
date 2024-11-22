import { deleteCookies } from "@/actions/cookies";
import { getUser } from "@/api/profile.api";
import { useCallback, useState } from "react";

interface IUser {
  autorizado: boolean;
  usuario: string;
}

export const useSession = () => {
  const [loading, setLoading] = useState(false);
  const [userLogged, setUserLogged] = useState<IUser>({
    autorizado: false,
    usuario: "",
  });

  const handleLogin = useCallback(async () => {
    try {
      setLoading(true);
      const userLogged = await getUser();
      setUserLogged(userLogged);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }, []);

  const handleLoggout = useCallback(async () => {
    try {
      setLoading(true);
      await deleteCookies("token");
      setUserLogged({ autorizado: false, usuario: "" });
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, []);

  return {
    loading,
    userLogged,
    handleLogin,
    handleLoggout,
  };
};
