import { Button } from "antd";

const ComponentButton = ({
  title,
  icon,
  style,
  onClick,
  htmlType,
  size,
  disabled,
  loading,
}) => {
  return (
    <Button
      id="btn-0222-1456"
      type="primary"
      className="component-button"
      icon={icon}
      style={style}
      onClick={onClick}
      htmlType={htmlType}
      size={size}
      disabled={disabled}
      loading={loading}
    >
      {title}
    </Button>
  );
};

export default ComponentButton;
