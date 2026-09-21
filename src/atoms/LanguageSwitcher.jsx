import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const next = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(next);
  };

  return (
    <button onClick={toggleLanguage} aria-label="Change language">
      {i18n.language === "es" ? "EN" : "ES"}
      
      <Languages size={22} />
    </button>
    
  );
};

export default LanguageSwitcher;