import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "기관현황 | 다시스 실버케어센터" };

export default function StatusPage() {
  return (
    <ComingSoon
      category="요양원 소개"
      title="기관현황"
      breadcrumb={[{ name: "요양원 소개", href: "/about" }]}
    />
  );
}
