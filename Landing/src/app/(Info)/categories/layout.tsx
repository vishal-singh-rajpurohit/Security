import OrderNow from "@/components/OrderNow";

export default function CatLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>{children} <OrderNow /></>
    )
}