import { Button, Modal } from "antd";
import ComponentButton from "../ComponentButton";

const ComponentModal = ({
  open,
  handleOk,
  handleClose,
  backText,
  submitText,
  title,
  children,
  width,
  footer,
  loader,
}) => {
  return (
    <Modal
      visible={open}
      title={title}
      style={{ borderRadius: "4px" }}
      width={width}
      onOk={handleOk}
      onCancel={handleClose}
      footer={null}
    >
      {children}
    </Modal>
  );
};
export default ComponentModal;
