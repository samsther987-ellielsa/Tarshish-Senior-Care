import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "활동포토앨범 | 다시스 실버케어센터" };

export default function ActivityPhotosPage() {
  return (
    <ComingSoon
      category="알림마당"
      title="활동포토앨범"
      breadcrumb={[{ name: "알림마당", href: "/news" }]}
    />
  );
}
