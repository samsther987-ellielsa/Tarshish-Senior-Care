import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "요양 | 다시스 실버케어센터" };

export default function CarePage() {
  return (
    <ComingSoon
      category="서비스안내"
      title="요양"
      breadcrumb={[{ name: "서비스안내", href: "/services" }]}
    />
  );
}
