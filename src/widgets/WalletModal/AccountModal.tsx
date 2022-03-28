import React from "react";
import styled from "styled-components";
import WalletButton from "../../components/Button/WalletButton";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Flex/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { localStorageKey } from "./config";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}

const StyledText = styled(Text)`
  color: #4f8dff;
  margin-top: 20px;
  margin-bottom: 10px;
`

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null }) => (
  <Modal title="Your wallet" onDismiss={onDismiss}>
    <StyledText
      fontSize="20px"
      bold
      style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
    >
      {account}
    </StyledText>
    <Flex mb="12px">
      <LinkExternal small href={`https://bscscan.com/address/${account}`} mr="16px">
        View on BscScan
      </LinkExternal>
      <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
    </Flex>
    <Flex justifyContent="center">
      <WalletButton
        size="sm"
        variant="primary"
        onClick={() => {
          logout();
          window.localStorage.removeItem(localStorageKey);
          onDismiss();
          window.location.reload();
        }}
      >
        Logout
      </WalletButton>
    </Flex>
  </Modal>
);

export default AccountModal;
