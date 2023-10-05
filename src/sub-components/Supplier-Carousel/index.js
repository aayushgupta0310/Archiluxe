import SupplierLogo1 from "../../assets/svg-icons/supplierlogo1.svg";
import SupplierLogo2 from "../../assets/svg-icons/supplierlogo2.svg";
import SupplierLogo3 from "../../assets/svg-icons/supplierlogo3.svg";
import SupplierLogo4 from "../../assets/svg-icons/supplierlogo4.svg";
import SupplierLogo5 from "../../assets/svg-icons/supplierlogo5.svg";
import SupplierLogo6 from "../../assets/svg-icons/supplierlogo6.svg";

const SupplierCarousel = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <div className="flex items-center gap-16">
          <div>
            <img src={SupplierLogo1} alt="Supplier" />
          </div>
          <div>
            <img src={SupplierLogo2} alt="Supplier" />
          </div>
          <div>
            <img src={SupplierLogo3} alt="Supplier" />
          </div>
          <div>
            <img src={SupplierLogo4} alt="Supplier" />
          </div>
          <div>
            <img src={SupplierLogo5} alt="Supplier" />
          </div>
          <div>
            <img src={SupplierLogo6} alt="Supplier" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierCarousel;
