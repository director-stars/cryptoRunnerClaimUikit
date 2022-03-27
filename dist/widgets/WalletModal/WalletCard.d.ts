import React from "react";
import { Login, Config } from "./types";
interface Props {
    walletConfig: Config;
    login: Login;
    onDismiss: () => void;
    mt: string;
}
declare const WalletCard: React.FC<Props>;
export default WalletCard;
