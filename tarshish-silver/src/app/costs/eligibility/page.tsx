import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "대상 및 절차 | 다시스 실버케어센터" };

export default function EligibilityPage() {
  return (
    <ComingSoon
      category="비용 및 상담신청"
      title="대상 및 절차"
      breadcrumb={[{ name: "비용 및 상담신청", href: "/costs" }]}
    />
  );
}
