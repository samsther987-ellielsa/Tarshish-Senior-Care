import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "가족지원 | 다시스 실버케어센터" };

export default function FamilyPage() {
  return (
    <ComingSoon
      category="서비스안내"
      title="가족지원"
      breadcrumb={[{ name: "서비스안내", href: "/services" }]}
    />
  );
}
