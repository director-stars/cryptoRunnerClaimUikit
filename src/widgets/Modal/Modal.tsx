import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import Flex from "../../components/Flex/Flex";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { InjectedProps } from "./types";

interface Props extends InjectedProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
}

const StyledModal = styled.div`
  background: #fff;
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  // border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 10px;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: visible;
  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: 360px;
    max-width: 100%;
  }
  padding: 20px;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e9eaeb;
  align-items: center;
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
  color: rgb(0 0 0 / 80%);
  * {
    color: rgb(0 0 0 / 80%);
    font-size: 23px;
  }
  margin-bottom: 10px;
`;

const StyledIconButton = styled(IconButton)`
  border-radius: 100px;
  background-color: #4f8dff;
  transform: translate(40px, -40px);
  color: #fff;
  border-width: 0px;
  box-shadow: 3px -3px 10px rgb(0 0 0 / 30%);
  width: 40px;
  height: 40px;
  &:hover:not(:disabled):not(.button--disabled):not(:active), &:active:not(:disabled) {
    background-color: #4f8dff;
    border-width: 0px;
    box-shadow: 0 0 0 2px #4f8dff;
  }
  &:focus:not(:active):not(:disabled) {
    box-shadow: 0 0 0 2px #4f8dff;
  }
  * {
    fill: #fff;
  }
`;

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "24px",
}) => (
  <StyledModal>
    <ModalHeader>
      <ModalTitle>
        {onBack && (
          <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
            <ArrowBackIcon color="primary" />
          </IconButton>
        )}
        <Heading>{title}</Heading>
      </ModalTitle>
      {!hideCloseButton && (
        <StyledIconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
          <CloseIcon color="primary" />
        </StyledIconButton>
      )}
    </ModalHeader>
    <Flex flexDirection="column">
      {children}
    </Flex>
  </StyledModal>
);

export default Modal;
