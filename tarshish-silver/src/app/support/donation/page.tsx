import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "후원안내 | 다시스 실버케어센터" };

export default function DonationPage() {
  return (
    <ComingSoon
      category="후원 및 자원봉사"
      title="후원안내"
      breadcrumb={[{ name: "후원 및 자원봉사", href: "/support" }]}
    />
  );
}
