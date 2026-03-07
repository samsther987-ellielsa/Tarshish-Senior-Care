import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "비용안내 | 다시스 실버케어센터" };

export default function CostInfoPage() {
  return (
    <ComingSoon
      category="비용 및 상담신청"
      title="비용안내"
      breadcrumb={[{ name: "비용 및 상담신청", href: "/costs" }]}
    />
  );
}
