import { Form, Input } from "antd";
import ComponentButton from "../../atoms/ComponentButton";
import LogoBlack from "../../assets/svg-icons/logo-black.svg";
import { useNavigate } from "react-router";
import { HOME_URL } from "../../routes";

const FooterCustom = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#E5E2DC] py-16 custom-footer">
      <div className="container">
        <div className="flex justify-between items-start">
          <div className="flex gap-12">
            <div>
              <h5>Customer service</h5>
              <ul>
                <li>Care & Maintenance</li>
                <li>F.A.Q.</li>
                <li>Shipping & Delivery</li>
                <li>Returns & Exchanges</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h5>Quick links</h5>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Shop</li>
                <li>Inspirations</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h5>Follow us</h5>
              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Pinterest</li>
                <li>Youtube</li>
              </ul>
            </div>
          </div>
          <div className="max-w-[405px] w-full">
            <h5>Subscribe and enjoy 10% off</h5>
            <p>
              Join our mailing list and enjoy 10% off* on your first purchase.
              You will also be the first to know about new collections, VIP
              invitations and exclusive sneak peeks.​
            </p>
            <Form
              autoComplete="off"
              className="footer-form"
              initialValues={{ remember: true }}
              layout="vertical"
            >
              <Form.Item
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Email Address!",
                  },
                ]}
              >
                <Input placeholder="Enter Your e-mail" />
              </Form.Item>
              <Form.Item>
                <ComponentButton
                  title={"Subscribe"}
                  style={{
                    borderRadius: "4px",
                    border: "1px solid #946039",
                    fontSize: "14px",
                    fontWeight: "300",
                    height: "32px",
                    color: "#946039",
                  }}
                />
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <img src={LogoBlack} alt="Logo" onClick={()=>navigate(HOME_URL)} className="cursor-pointer"/>
          <div>
            <p className="address-footer">
              Mollura & C. SPA P.Iva 02759750835S.S. 114 Km 6,400 98128 <br />
              Tremestieri Messina - Italy
            </p>
          </div>
        </div>
        <div className="text-center text-[#444] text-sm leading-6">
        Copyrights © 2023
        </div>
      </div>
    </div>
  );
};

export default FooterCustom;
