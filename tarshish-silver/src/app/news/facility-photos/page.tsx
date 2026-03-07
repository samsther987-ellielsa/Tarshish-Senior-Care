import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "시설포토앨범 | 다시스 실버케어센터" };

export default function FacilityPhotosPage() {
  return (
    <ComingSoon
      category="알림마당"
      title="시설포토앨범"
      breadcrumb={[{ name: "알림마당", href: "/news" }]}
    />
  );
}
