import Login from "./Login";
import type { ProfilePropsType } from "./Profile";

type PrivatePropsType = {
  isLoggedIn: boolean;
  Component: React.ComponentType<ProfilePropsType>
};

const Private = ({ isLoggedIn, Component }: PrivatePropsType) => {
  if (isLoggedIn) {
    return <Component name='Sameer' />;
  } else {
    <Login />;
  }
};

export default Private;
