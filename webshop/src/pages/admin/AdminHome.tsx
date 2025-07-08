import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import { Button } from "react-bootstrap";

function AdminHome() {
  const { t } = useTranslation();

  return (
    <div>
      <Button as={Link as any} to="/admin/maintain-products" variant="primary">{t("menu.maintainproducts")}</Button>
      <Button as={Link as any} to="/admin/maintain-categories" variant="secondary">{t("menu.maintaincategories")}</Button>
      <Button as={Link as any} to="/admin/add-product" variant="success">{t("menu.addproduct")}</Button>
      <Button as={Link as any} to="/admin/maintain-shops" variant="warning">{t("menu.maintainshops")}</Button>
      <Button as={Link as any} to="/admin/supplier1" variant="info">Supplier 1</Button>
      <Button as={Link as any} to="/admin/supplier2" variant="info">Supplier 2</Button>
      <Button as={Link as any} to="/admin/supplier3" variant="info">Supplier 3</Button>
    </div>
  )
}

export default AdminHome