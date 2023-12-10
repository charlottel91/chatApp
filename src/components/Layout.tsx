import { createContext, useContext, useEffect, useState } from "react";
import { useUsers } from "src/api/hooks/useUser";
import { User } from "src/types/user";
import { getLoggedUserId } from "src/utils/getLoggedUserId";

type ActiveUser = {
  id?: number;
  nickname?: string;
  token?: string;
};

type ActiveUserContextType = {
  activeUser: ActiveUser;
  setActiveUser: (value: User) => void;
};

export const ActiveUserContext = createContext<ActiveUserContextType>({
  activeUser: {},
  setActiveUser: () => {
    console.warn("setActiveUser is not defined");
  },
});

export const useActiveUserContext = () => {
  return useContext(ActiveUserContext);
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data: users } = useUsers();
  const [activeUser, setActiveUser] = useState<ActiveUser>({});

  useEffect(() => {
    if (users) {
      const user = users.filter((user) => user.id === getLoggedUserId());
      setActiveUser(user[0]);
    }
  }, [users]);

  return (
    <ActiveUserContext.Provider
      value={{
        activeUser,
        setActiveUser,
      }}
    >
      <div className="artboard h-screen md:px-20 md:py-16">
        <div className="h-full">{children}</div>
      </div>
    </ActiveUserContext.Provider>
  );
};

export default Layout;
