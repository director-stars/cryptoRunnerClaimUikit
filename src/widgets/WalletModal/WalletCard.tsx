import React from "react";
import WalletButton from "../../components/Button/WalletButton";
import Text from "../../components/Text/Text";
import { localStorageKey } from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mt: string;
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mt }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <WalletButton
      fullWidth
      variant="primary"
      onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem(localStorageKey, "1");
        onDismiss();
      }}
      style={{ justifyContent: "space-between" }}
      mt={mt}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Text bold color="contrast" mr="16px">
        {title}
      </Text>
      <Icon width="32px" />
    </WalletButton>
  );
};

export default WalletCard;
