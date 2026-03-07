import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "상담신청 | 다시스 실버케어센터" };

export default function ConsultPage() {
  return (
    <ComingSoon
      category="비용 및 상담신청"
      title="상담신청"
      breadcrumb={[{ name: "비용 및 상담신청", href: "/costs" }]}
    />
  );
}
