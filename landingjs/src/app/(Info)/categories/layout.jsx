import OrderNow from "../../../components/OrderNow";

export default function CatLayout({ children }) {
  return (
    <>
      {children}
      <OrderNow />
    </>
  );
}
