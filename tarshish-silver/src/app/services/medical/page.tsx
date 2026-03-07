import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "간호/의료 | 다시스 실버케어센터" };

export default function MedicalPage() {
  return (
    <ComingSoon
      category="서비스안내"
      title="간호/의료"
      breadcrumb={[{ name: "서비스안내", href: "/services" }]}
    />
  );
}
