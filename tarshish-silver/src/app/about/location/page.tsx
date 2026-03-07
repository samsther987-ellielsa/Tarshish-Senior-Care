import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "오시는 길 | 다시스 실버케어센터" };

export default function LocationPage() {
  return (
    <ComingSoon
      category="요양원 소개"
      title="오시는 길"
      breadcrumb={[{ name: "요양원 소개", href: "/about" }]}
    />
  );
}
