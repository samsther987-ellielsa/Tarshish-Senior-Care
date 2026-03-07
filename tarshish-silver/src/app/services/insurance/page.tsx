import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "노인장기요양보험 | 다시스 실버케어센터" };

export default function InsurancePage() {
  return (
    <ComingSoon
      category="서비스안내"
      title="노인장기요양보험"
      breadcrumb={[{ name: "서비스안내", href: "/services" }]}
    />
  );
}
