import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "공지사항 | 다시스 실버케어센터" };

export default function NoticesPage() {
  return (
    <ComingSoon
      category="알림마당"
      title="공지사항"
      breadcrumb={[{ name: "알림마당", href: "/news" }]}
    />
  );
}
