import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "물리(작업) 치료 | 다시스 실버케어센터" };

export default function TherapyPage() {
  return (
    <ComingSoon
      category="서비스안내"
      title="물리(작업) 치료"
      breadcrumb={[{ name: "서비스안내", href: "/services" }]}
    />
  );
}
