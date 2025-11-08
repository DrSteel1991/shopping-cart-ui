import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlexDiv from "src/ui/FlexDiv/FlexDiv";
import Input from "src/ui/Input/Input";
import Button from "src/ui/Button/Button";
import { usePostLoginUserQuery } from "src/queries/User/usePostLoginUserQuery";
import { useAuth } from "src/contexts/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const { mutationAsync: postLoginUser } = usePostLoginUserQuery();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    postLoginUser(
      { email, password },
      {
        onSuccess: (data) => {
          login(data);
          navigate("/dashboard");
        },
        onError: (error) => {
          console.error("Login failed:", error);
        },
      }
    );
  };

  return (
    <FlexDiv
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgColor="primary-50"
    >
      <FlexDiv
        direction="column"
        gap={3}
        width="100%"
        maxWidth="400px"
        bgColor="white"
        borderRadius="lg"
        borderWidth={1}
        borderStyle="solid"
        borderColor="primary-200"
        p={6}
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      >
        <FlexDiv direction="column" alignItems="center" mb={2}>
          <h1 style={{ margin: 0, fontSize: "2rem", fontWeight: 600 }}>
            Welcome Back
          </h1>
          <p style={{ margin: "0.5rem 0 0 0", color: "#6c757d" }}>
            Sign in to your account
          </p>
        </FlexDiv>

        <form onSubmit={handleSubmit}>
          <FlexDiv direction="column" gap={3}>
            <FlexDiv direction="column" gap={1}>
              <label
                htmlFor="email"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#212529",
                }}
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                borderWidth={1}
                borderStyle="solid"
                borderColor="primary-300"
                borderRadius="md"
                p={2}
                width="100%"
              />
            </FlexDiv>

            <FlexDiv direction="column" gap={1}>
              <label
                htmlFor="password"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#212529",
                }}
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                borderWidth={1}
                borderStyle="solid"
                borderColor="primary-300"
                borderRadius="md"
                p={2}
                width="100%"
              />
            </FlexDiv>

            <FlexDiv justifyContent="between" alignItems="center" mt={1}>
              <FlexDiv alignItems="center" gap={1}>
                <input type="checkbox" id="remember" />
                <label
                  htmlFor="remember"
                  style={{
                    fontSize: "0.875rem",
                    color: "#6c757d",
                    cursor: "pointer",
                  }}
                >
                  Remember me
                </label>
              </FlexDiv>
              <a
                href="#"
                style={{
                  fontSize: "0.875rem",
                  color: "#007bff",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = "none";
                }}
              >
                Forgot password?
              </a>
            </FlexDiv>

            <Button
              type="submit"
              width="100%"
              p={3}
              borderRadius="md"
              borderWidth={0}
              mt={2}
            >
              Sign In
            </Button>

            <FlexDiv justifyContent="center" alignItems="center" gap={1} mt={2}>
              <span style={{ fontSize: "0.875rem", color: "#6c757d" }}>
                Don't have an account?
              </span>
              <a
                href="#"
                style={{
                  fontSize: "0.875rem",
                  color: "#007bff",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textDecoration = "none";
                }}
              >
                Sign up
              </a>
            </FlexDiv>
          </FlexDiv>
        </form>
      </FlexDiv>
    </FlexDiv>
  );
};

export default Login;
