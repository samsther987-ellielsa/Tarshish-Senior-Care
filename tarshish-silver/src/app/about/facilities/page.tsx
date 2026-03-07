import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "시설안내 | 다시스 실버케어센터" };

export default function FacilitiesPage() {
  return (
    <ComingSoon
      category="요양원 소개"
      title="시설안내"
      breadcrumb={[{ name: "요양원 소개", href: "/about" }]}
    />
  );
}
