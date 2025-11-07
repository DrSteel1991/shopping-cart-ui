import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import FlexDiv from "src/ui/FlexDiv/FlexDiv";
import Button from "src/ui/Button/Button";
import { setStoredToken } from "src/utils/auth";

const Dashboard = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleLogout = () => {
    setStoredToken(null);
    queryClient.removeQueries({ queryKey: ["auth", "token"] });
    queryClient.removeQueries({ queryKey: ["user"] });
    queryClient.setQueryData(["auth", "token"], null);
    setTimeout(() => {
      navigate("/login");
    }, 0);
  };

  return (
    <FlexDiv direction="column" p={4} gap={3}>
      <FlexDiv justifyContent="between" alignItems="center">
        <h1>Dashboard</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </FlexDiv>
      <p>Welcome to your dashboard!</p>
    </FlexDiv>
  );
};

export default Dashboard;
