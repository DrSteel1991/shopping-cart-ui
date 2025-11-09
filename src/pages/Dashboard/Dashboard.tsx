import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlexDiv from "src/ui/FlexDiv/FlexDiv";
import Button from "src/ui/Button/Button";
import { useAuth } from "src/contexts/useAuth";
import DashboardCategories from "./DashboardCategories/DashboardCategories";
import DashboardProducts from "./DashboardProducts/DashboardProducts";

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <FlexDiv direction="column" p={2} height="90vh">
      <FlexDiv justifyContent="between" alignItems="center">
        <h1>Dashboard</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </FlexDiv>
      <FlexDiv basis={12}>
        <DashboardCategories
          setSelectedCategoryId={setSelectedCategoryId}
          selectedCategoryId={selectedCategoryId}
        />
        <DashboardProducts selectedCategoryId={selectedCategoryId} />
      </FlexDiv>
    </FlexDiv>
  );
};

export default Dashboard;
