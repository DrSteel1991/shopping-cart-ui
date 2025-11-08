import { useNavigate } from "react-router-dom";
import FlexDiv from "src/ui/FlexDiv/FlexDiv";
import Button from "src/ui/Button/Button";
import { useAuth } from "src/contexts/useAuth";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <FlexDiv direction="column" p={4} gap={3}>
      <FlexDiv justifyContent="between" alignItems="center">
        <h1>Dashboard</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </FlexDiv>
      {user && (
        <FlexDiv direction="column" gap={2}>
          <p>
            Welcome, {user.firstName} {user.lastName}!
          </p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </FlexDiv>
      )}
    </FlexDiv>
  );
};

export default Dashboard;
