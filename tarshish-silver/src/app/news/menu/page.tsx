import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "식단표 | 다시스 실버케어센터" };

export default function MenuPage() {
  return (
    <ComingSoon
      category="알림마당"
      title="식단표"
      breadcrumb={[{ name: "알림마당", href: "/news" }]}
    />
  );
}
