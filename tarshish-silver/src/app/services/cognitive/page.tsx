import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "인지향상 | 다시스 실버케어센터" };

export default function CognitivePage() {
  return (
    <ComingSoon
      category="서비스안내"
      title="인지향상"
      breadcrumb={[{ name: "서비스안내", href: "/services" }]}
    />
  );
}
