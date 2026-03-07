import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "인사말 | 다시스 실버케어센터" };

export default function GreetingPage() {
  return (
    <ComingSoon
      category="요양원 소개"
      title="인사말"
      breadcrumb={[{ name: "요양원 소개", href: "/about" }]}
    />
  );
}
