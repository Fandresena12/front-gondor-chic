import LoginModal from "../components/LoginModal";
import LoginForm from "../components/LoginForm";
import { useLoginStore } from "../services/loginStore";

const LoginContainer: React.FC = () => {
  const { isLoginModalOpen, closeLoginModal } = useLoginStore();

  return (
    <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
      <LoginForm />
    </LoginModal>
  );
};

export default LoginContainer;
