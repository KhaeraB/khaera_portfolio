import { signIn } from "next-auth/react";

interface OAuthProps {
  company: string;
}

const OAuthComponent: React.FC<OAuthProps> = ({ company }) => {
  const REDIRECT_URL_AFTER_SIGN_IN = "/dashboard"; // Remplacez par votre URL de redirection

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await signIn(company.toLowerCase()); // SignIn avec le fournisseur spécifié (par exemple, "google" ou "github")
    // Pas besoin de spécifier callbackUrl ici, car next-auth s'en occupe automatiquement
  };

  return (
    <div>
      {/* Votre contenu ici */}
      <button onClick={handleLogin}>Sign in with {company}</button>
    </div>
  );
};

export default OAuthComponent;
